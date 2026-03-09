import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // ── バリデーション ────────────────────────────────────────────────
    if (!name || name.trim().length === 0 || name.length > 100) {
      return NextResponse.json(
        { error: "入力内容に誤りがあります" },
        { status: 400 }
      );
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: "入力内容に誤りがあります" },
        { status: 400 }
      );
    }
    if (message && message.length > 500) {
      return NextResponse.json(
        { error: "入力内容に誤りがあります" },
        { status: 400 }
      );
    }

    const jstTime = new Date().toLocaleString("ja-JP", {
      timeZone: "Asia/Tokyo",
    });

    const from = process.env.RESEND_FROM;
    const notifyEmail = process.env.NOTIFY_EMAIL;
    if (!from || !notifyEmail || !process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_FROM, NOTIFY_EMAIL, or RESEND_API_KEY");
      return NextResponse.json(
        { error: "送信に失敗しました" },
        { status: 500 }
      );
    }

    // ── ① 管理者への通知メール ────────────────────────────────────────
    await resend.emails.send({
      from,
      to: notifyEmail,
      subject: `【FamilyBridge】新規ウェイティングリスト登録 — ${name} 様`,
      html: `
        <h2 style="color:#1a3a5c;">新規ウェイティングリスト登録</h2>
        <table style="border-collapse:collapse;width:100%;">
          <tr><td style="padding:8px;border:1px solid #e2e8f0;font-weight:bold;">お名前</td><td style="padding:8px;border:1px solid #e2e8f0;">${escapeHtml(name)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e2e8f0;font-weight:bold;">メールアドレス</td><td style="padding:8px;border:1px solid #e2e8f0;">${escapeHtml(email)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e2e8f0;font-weight:bold;">ひとこと</td><td style="padding:8px;border:1px solid #e2e8f0;">${escapeHtml(message || "（未入力）")}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e2e8f0;font-weight:bold;">登録日時</td><td style="padding:8px;border:1px solid #e2e8f0;">${jstTime}</td></tr>
        </table>
      `,
    });

    // ── ② 登録者への受付完了メール ───────────────────────────────────
    await resend.emails.send({
      from,
      to: email,
      subject: "【FamilyBridge】先行登録を受け付けました",
      html: `
        <p>${escapeHtml(name)} 様</p>
        <p>FamilyBridge の先行登録を受け付けました。<br>正式リリース時に最優先でご案内いたします。</p>
        <p>引き続きよろしくお願いいたします。<br><strong>FamilyBridge チーム</strong></p>
        <hr>
        <p style="font-size:12px;color:#888;">このメールに心当たりのない場合は、そのまま破棄してください。</p>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Waitlist API error:", error);
    return NextResponse.json(
      { error: "送信に失敗しました" },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
