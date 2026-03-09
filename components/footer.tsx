export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <p className="text-sm text-muted-foreground">
          © 2026 FamilyBridge
        </p>
        <div className="mt-3 flex items-center justify-center gap-4">
          <a
            href="#"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            プライバシーポリシー
          </a>
          <span className="text-muted-foreground">|</span>
          <a
            href="#"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            利用規約
          </a>
        </div>
      </div>
    </footer>
  )
}
