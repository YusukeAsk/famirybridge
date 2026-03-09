import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#f0f7ff] px-4">
      <h1 className="text-2xl font-bold text-[#1a3a5c]">ページが見つかりません</h1>
      <p className="text-[#64748b]">お探しのページは存在しないか、移動した可能性があります。</p>
      <Link
        href="/"
        className="rounded-xl bg-[#2563a8] px-6 py-3 font-medium text-white transition hover:bg-[#1d4ed8]"
      >
        トップへ戻る
      </Link>
    </div>
  )
}
