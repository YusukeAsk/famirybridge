"use client"

import { Heart, ArrowDown } from "lucide-react"

export function HeroSection() {
  const scrollToForm = () => {
    const element = document.getElementById("waitlist-form")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f0f7ff] via-white to-[#e0f2fe] pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-[#2563a8]/5 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-48 w-48 rounded-full bg-[#0d9488]/10 blur-3xl" />
      <div className="absolute top-40 right-20 h-32 w-32 rounded-full bg-[#f97316]/10 blur-2xl" />

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#2563a8"
            fillOpacity="0.08"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center">
        {/* Family-friendly badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#fff7ed] to-[#ccfbf1] px-4 py-2 text-sm font-medium text-[#1a3a5c] shadow-sm">
          <Heart className="h-4 w-4 text-[#f97316]" fill="#f97316" />
          <span>残された家族に優しいサービス</span>
        </div>

        <h1 className="text-3xl font-bold leading-tight tracking-tight text-[#1a3a5c] md:text-4xl lg:text-5xl text-balance">
          大切なデジタル資産情報を、
          <br className="hidden sm:block" />
          もしものときに
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-[#2563a8] to-[#0d9488] bg-clip-text text-transparent">家族へ確実に届ける。</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#64748b] md:text-lg text-pretty">
          通帳・保険・デジタル資産——
          <br className="sm:hidden" />
          あなたが管理している大切な情報は、
          <br className="hidden sm:block" />
          もしものとき、家族の手に届きますか？
          <br />
          FamilyBridgeは、独自のパスワード設計によって
          <br className="hidden sm:block" />
          あなたの情報を守りながら、<span className="font-semibold text-[#0d9488]">必要なときだけ届けます。</span>
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={scrollToForm}
            className="inline-flex items-center rounded-xl bg-gradient-to-r from-[#2563a8] to-[#1d4ed8] px-8 py-4 text-base font-medium text-white shadow-lg shadow-[#2563a8]/25 transition-all hover:shadow-xl hover:shadow-[#2563a8]/30 hover:-translate-y-0.5 md:text-lg"
          >
            先行登録する（無料）
            <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
          </button>
        </div>

        {/* Trust indicators */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-[#64748b]">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#0d9488]" />
            <span>登録無料</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#2563a8]" />
            <span>先着50名様 1年間無料</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#f97316]" />
            <span>スパムメールなし</span>
          </div>
        </div>
      </div>
    </section>
  )
}
