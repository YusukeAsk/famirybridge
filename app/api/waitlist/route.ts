import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

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

    const mailFrom = process.env.MAIL_FROM;
    const notifyEmail = process.env.NOTIFY_EMAIL;
    const notifyEmailFallback = process.env.NOTIFY_EMAIL_FALLBACK;
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!mailFrom || !notifyEmail || !smtpHost || !smtpPort || !smtpUser || smtpPass === undefined) {
      console.error("Missing MAIL_FROM, NOTIFY_EMAIL, or SMTP_* env vars");
      return NextResponse.json(
        { error: "送信に失敗しました" },
        { status: 500 }
      );
    }

    const secure = process.env.SMTP_SECURE !== "false";
    const port = parseInt(smtpPort, 10) || 587;
    const smtpOptions = { host: smtpHost, port, secure, auth: { user: smtpUser, pass: smtpPass } };

    // ── ① 登録者への受付完了メール（専用の接続で送信） ─────────────────────
    const userTransporter = nodemailer.createTransport(smtpOptions);
    await userTransporter.sendMail({
      from: mailFrom,
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
    userTransporter.close();
    console.log("Waitlist: registrant confirmation sent to", maskEmail(email));

    // 別個の送信のため少し間隔を空ける
    await sleep(800);

    // ── ② 管理者への通知メール（別の接続で単独送信） ───────────────────────
    const adminTransporter = nodemailer.createTransport(smtpOptions);
    try {
      const adminTo =
        notifyEmail.trim().toLowerCase() === mailFrom.trim().toLowerCase() &&
        notifyEmailFallback
          ? notifyEmailFallback
          : notifyEmail;

      await adminTransporter.sendMail({
        from: mailFrom,
        to: adminTo,
        replyTo: email,
        headers: {
          "Auto-Submitted": "auto-generated",
          "X-FamilyBridge-Form": "waitlist",
        },
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
      console.log("Waitlist: admin notification sent to", maskEmail(adminTo));
    } catch (adminError) {
      console.error("Waitlist: admin notification failed", adminError);
      // 管理者送信失敗でもユーザーには成功を返す
    } finally {
      adminTransporter.close();
    }

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

/** 指定ミリ秒だけ待つ */
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** ログ用にメールアドレスをマスク（例: a***@example.com） */
function maskEmail(email: string): string {
  const at = email.indexOf("@");
  if (at <= 0) return "***";
  return email[0] + "***" + email.slice(at);
}
