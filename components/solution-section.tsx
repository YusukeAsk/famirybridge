import { Shield, Users, Sparkles, Eye, Heart } from "lucide-react"

const solutions = [
  {
    icon: Shield,
    title: "安全な保管",
    description:
      "独自のパスワード設計により、重要情報を暗号化した状態で安全に管理します。",
    color: "bg-[#2563a8]",
    lightColor: "bg-[#dbeafe]",
  },
  {
    icon: Users,
    title: "確実な引き継ぎ",
    description:
      "あらかじめ指定した家族（受取人）に対して、必要なタイミングで情報を届けます。",
    color: "bg-[#0d9488]",
    lightColor: "bg-[#ccfbf1]",
  },
  {
    icon: Sparkles,
    title: "シンプルな操作",
    description:
      "難しい設定は不要。ステップに沿って進めるだけで設定が完了します。",
    color: "bg-[#f97316]",
    lightColor: "bg-[#ffedd5]",
  },
  {
    icon: Eye,
    title: "プライバシー保護",
    description:
      "サーバー側には暗号化済みのデータのみ保存。平文は一切残りません。",
    color: "bg-[#8b5cf6]",
    lightColor: "bg-[#ede9fe]",
  },
]

export function SolutionSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f0f7ff] to-white py-16 md:py-24">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyNTYzYTgiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      
      <div className="relative mx-auto max-w-4xl px-4">
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#0d9488]/10 px-4 py-2 text-sm font-medium text-[#0d9488]">
            <Heart className="h-4 w-4" fill="currentColor" />
            <span>家族のための安心設計</span>
          </div>
          <h2 className="text-2xl font-bold text-[#1a3a5c] md:text-3xl text-balance">
            FamilyBridgeができること
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 rounded-2xl bg-white p-6 shadow-md shadow-[#2563a8]/5 transition-all hover:shadow-xl hover:shadow-[#2563a8]/10 hover:-translate-y-1 border border-[#e0f2fe]"
            >
              <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${solution.lightColor} transition-transform group-hover:scale-110`}>
                <solution.icon className={`h-7 w-7 ${solution.color.replace('bg-', 'text-')}`} />
              </div>
              <div>
                <h3 className="font-bold text-[#1a3a5c] text-lg">
                  {solution.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#64748b]">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Family-friendly message */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#0d9488]/10 via-[#2563a8]/10 to-[#f97316]/10 p-8 text-center border border-[#0d9488]/20">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Heart className="h-5 w-5 text-[#f97316]" fill="#f97316" />
            <span className="font-bold text-[#1a3a5c] text-lg">残された家族に優しい設計</span>
            <Heart className="h-5 w-5 text-[#f97316]" fill="#f97316" />
          </div>
          <p className="text-[#64748b] text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            FamilyBridgeは、あなたの大切な情報を守るだけでなく、
            <span className="font-semibold text-[#0d9488]">受け取る家族にとっても分かりやすく、負担の少ない</span>
            設計を心がけています。複雑な手続きなく、必要な情報が届く安心をお届けします。
          </p>
        </div>
      </div>
    </section>
  )
}
