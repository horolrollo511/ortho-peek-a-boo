import { Link } from "@tanstack/react-router";
import { Activity } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="size-8 rounded-xl bg-primary text-primary-foreground grid place-items-center shadow-soft">
            <Activity className="size-4" strokeWidth={2.5} />
          </div>
          <span className="font-semibold tracking-tight text-foreground">Ortholens</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#how" className="hover:text-foreground transition">How it works</a>
          <a href="#regions" className="hover:text-foreground transition">Body map</a>
          <a href="#trust" className="hover:text-foreground transition">Clinicians</a>
          <a href="#faq" className="hover:text-foreground transition">FAQ</a>
        </nav>
        <Link
          to="/pre-exam"
          className="inline-flex h-10 items-center rounded-full bg-foreground text-background px-5 text-sm font-medium hover:opacity-90 transition"
        >
          Begin pre-exam
        </Link>
      </div>
    </header>
  );
}
