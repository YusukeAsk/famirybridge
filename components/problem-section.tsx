import { Lock, FolderOpen, Coins, AlertTriangle } from "lucide-react"

const problems = [
  {
    icon: Lock,
    text: "「パスワードを厳重に管理しすぎて、家族が開けなかった」",
    color: "from-[#fee2e2] to-[#fecaca]",
    iconColor: "text-red-500",
    borderColor: "border-red-200",
  },
  {
    icon: FolderOpen,
    text: "「どこに何の口座・保険があるか、家族は把握していない」",
    color: "from-[#fef3c7] to-[#fde68a]",
    iconColor: "text-amber-500",
    borderColor: "border-amber-200",
  },
  {
    icon: Coins,
    text: "「デジタル資産や重要ファイルが、そのまま消えてしまった」",
    color: "from-[#ffedd5] to-[#fed7aa]",
    iconColor: "text-orange-500",
    borderColor: "border-orange-200",
  },
]

export function ProblemSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-10 flex items-center justify-center gap-3">
          <AlertTriangle className="h-6 w-6 text-amber-500" />
          <h2 className="text-center text-2xl font-bold text-[#1a3a5c] md:text-3xl text-balance">
            こんな不安、ありませんか？
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl border ${problem.borderColor} bg-gradient-to-br ${problem.color} p-6 transition-all hover:shadow-lg hover:-translate-y-1`}
            >
              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/80 shadow-sm`}>
                <problem.icon className={`h-6 w-6 ${problem.iconColor}`} />
              </div>
              <p className="text-sm leading-relaxed text-[#1a3a5c] font-medium md:text-base">
                {problem.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-xl rounded-2xl bg-gradient-to-r from-[#1a3a5c] to-[#2563a8] p-6 text-center shadow-lg">
          <p className="text-sm leading-relaxed text-white/90 md:text-base text-pretty">
            デジタル化が進んだ今、
            <br className="sm:hidden" />
            <span className="font-semibold text-white">「備えているつもり」が「届かなかった」</span>になる
            <br className="hidden sm:block" />
            リスクは、誰にでも存在します。
          </p>
        </div>
      </div>
    </section>
  )
}
