import { Check, Gift, Star, MessageCircle } from "lucide-react"

const benefits = [
  {
    icon: Gift,
    text: "初期メンバー50名様：サービス開始後、先着順で50名様のみ1年間無料でご利用いただけます",
    highlight: "1年間無料",
  },
  {
    icon: Star,
    text: "先行登録者：正式リリース時に最優先でご案内します",
    highlight: "最優先",
  },
  {
    icon: MessageCircle,
    text: "ご意見・フィードバックを元に、一緒にサービスを育てていただけます",
    highlight: "一緒に",
  },
]

export function NarrowDownSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center mb-10">
          <span className="inline-block mb-4 rounded-full bg-[#f97316] px-4 py-1.5 text-sm font-bold text-white shadow-lg shadow-[#f97316]/25">
            期間限定
          </span>
          <h2 className="text-2xl font-bold text-[#1a3a5c] md:text-3xl text-balance">
            今だけ：先行登録メンバーを募集中
          </h2>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-[#2563a8] via-[#1d4ed8] to-[#1e40af] p-1 shadow-2xl shadow-[#2563a8]/20">
          <div className="rounded-[calc(1.5rem-4px)] bg-white p-6 md:p-8">
            <ul className="space-y-5">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-4 group">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563a8] to-[#0d9488] shadow-md transition-transform group-hover:scale-110">
                    <benefit.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm leading-relaxed text-[#1a3a5c] md:text-base">
                      {benefit.text.split(benefit.highlight)[0]}
                      <span className="font-bold text-[#f97316]">{benefit.highlight}</span>
                      {benefit.text.split(benefit.highlight)[1]}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#fff7ed] to-[#ffedd5] p-4 border border-[#f97316]/20">
              <Check className="h-5 w-5 text-[#f97316]" />
              <p className="text-sm font-medium text-[#1a3a5c]">
                先着順。定員に達し次第、無料特典は終了となります。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
