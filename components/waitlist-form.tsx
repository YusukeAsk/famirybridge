"use client"

import { useState } from "react"
import { Heart, Mail, User, MessageSquare, CheckCircle2 } from "lucide-react"

type FormStatus = "idle" | "submitting" | "success" | "error"

export function WaitlistForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<FormStatus>("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      })

      if (!response.ok) {
        throw new Error("Failed to submit")
      }

      setStatus("success")
      setName("")
      setEmail("")
      setMessage("")
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <section id="waitlist-form" className="relative overflow-hidden bg-gradient-to-b from-[#f0f7ff] to-[#e0f2fe] py-16 md:py-24">
        <div className="absolute top-10 left-10 h-40 w-40 rounded-full bg-[#0d9488]/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-[#f97316]/10 blur-3xl" />
        
        <div className="relative mx-auto max-w-lg px-4 text-center">
          <div className="rounded-3xl bg-white p-8 shadow-2xl shadow-[#2563a8]/10 border border-[#e0f2fe]">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#0d9488] to-[#0f766e] shadow-lg">
              <CheckCircle2 className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#1a3a5c]">
              ご登録ありがとうございます！
            </h3>
            <p className="mt-3 text-[#64748b]">
              正式リリース時にご連絡します。
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-[#0d9488]">
              <Heart className="h-4 w-4" fill="currentColor" />
              <span>家族のための安心を、一緒に届けましょう。</span>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="waitlist-form" className="relative overflow-hidden bg-gradient-to-b from-[#f0f7ff] to-[#e0f2fe] py-16 md:py-24">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 h-40 w-40 rounded-full bg-[#0d9488]/10 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-[#f97316]/10 blur-3xl" />
      
      <div className="relative mx-auto max-w-lg px-4">
        <div className="text-center mb-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-[#0d9488] shadow-sm border border-[#0d9488]/20">
            <Heart className="h-4 w-4" fill="currentColor" />
            <span>家族への想いをカタチに</span>
          </div>
          <h2 className="text-2xl font-bold text-[#1a3a5c] md:text-3xl">
            先行登録する
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-[#64748b] md:text-base">
            メールアドレスをご登録いただくだけで完了です。
            <br />
            スパムメールは送りません。登録解除もいつでも可能です。
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl bg-white p-6 shadow-2xl shadow-[#2563a8]/10 md:p-8 border border-[#e0f2fe]"
        >
          <div className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 flex items-center gap-2 text-sm font-medium text-[#1a3a5c]"
              >
                <User className="h-4 w-4 text-[#2563a8]" />
                お名前 <span className="text-[#f97316]">*</span>
              </label>
              <input
                type="text"
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="例：山田 太郎"
                className="w-full rounded-xl border-2 border-[#e0f2fe] bg-[#f8fafc] px-4 py-3 text-sm text-[#1a3a5c] placeholder:text-[#94a3b8] focus:border-[#2563a8] focus:bg-white focus:outline-none transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 flex items-center gap-2 text-sm font-medium text-[#1a3a5c]"
              >
                <Mail className="h-4 w-4 text-[#2563a8]" />
                メールアドレス <span className="text-[#f97316]">*</span>
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="例：taro@example.com"
                className="w-full rounded-xl border-2 border-[#e0f2fe] bg-[#f8fafc] px-4 py-3 text-sm text-[#1a3a5c] placeholder:text-[#94a3b8] focus:border-[#2563a8] focus:bg-white focus:outline-none transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 flex items-center gap-2 text-sm font-medium text-[#1a3a5c]"
              >
                <MessageSquare className="h-4 w-4 text-[#0d9488]" />
                ひとこと（任意）
              </label>
              <textarea
                id="message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="気になること・期待していることなど、自由にお書きください"
                className="w-full resize-none rounded-xl border-2 border-[#e0f2fe] bg-[#f8fafc] px-4 py-3 text-sm text-[#1a3a5c] placeholder:text-[#94a3b8] focus:border-[#0d9488] focus:bg-white focus:outline-none transition-all"
              />
            </div>
          </div>

          {status === "error" && (
            <div className="mt-4 rounded-xl bg-red-50 p-3 text-center text-sm text-red-600 border border-red-100">
              送信に失敗しました。時間をおいて再度お試しください。
            </div>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-6 w-full rounded-xl bg-gradient-to-r from-[#2563a8] to-[#1d4ed8] py-4 text-base font-bold text-white shadow-lg shadow-[#2563a8]/25 transition-all hover:shadow-xl hover:shadow-[#2563a8]/30 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
          >
            {status === "submitting" ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                送信中...
              </span>
            ) : (
              "登録する"
            )}
          </button>

          <p className="mt-4 text-center text-xs text-[#94a3b8]">
            ご登録いただいた情報は、サービスのご案内のみに使用します。
          </p>
        </form>
      </div>
    </section>
  )
}
