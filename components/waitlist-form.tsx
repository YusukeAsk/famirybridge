"use client"

import { Heart, Clock } from "lucide-react"

export function WaitlistForm() {
  return (
    <section id="waitlist-form" className="relative overflow-hidden bg-gradient-to-b from-[#f0f7ff] to-[#e0f2fe] py-16 md:py-24">
      <div className="absolute top-10 left-10 h-40 w-40 rounded-full bg-[#0d9488]/10 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-[#f97316]/10 blur-3xl" />

      <div className="relative mx-auto max-w-lg px-4 text-center">
        <div className="rounded-3xl bg-white p-8 shadow-2xl shadow-[#2563a8]/10 border border-[#e0f2fe]">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#94a3b8]/20">
            <Clock className="h-10 w-10 text-[#64748b]" />
          </div>
          <span className="inline-block rounded-full bg-[#e2e8f0] px-4 py-1.5 text-sm font-medium text-[#64748b]">
            Coming Soon
          </span>
          <h2 className="mt-6 text-2xl font-bold text-[#1a3a5c] md:text-3xl">
            先行登録は準備中です
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-[#64748b] md:text-base">
            まもなく受付を開始します。
            <br />
            今しばらくお待ちください。
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
