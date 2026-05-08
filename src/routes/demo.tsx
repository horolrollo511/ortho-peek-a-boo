import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Play } from "lucide-react";
import joint from "@/assets/joint-detail.jpg";

export const Route = createFileRoute("/demo")({
  head: () => ({
    meta: [
      { title: "Demo · Ortholens" },
      { name: "description", content: "60-second demo of the Ortholens pre-exam experience." },
    ],
  }),
  component: Demo,
});

function Demo() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/60">
        <div className="mx-auto max-w-5xl px-6 h-16 flex items-center">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5">
            <ArrowLeft className="size-4" /> Home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">60-second demo</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
          See a pre-exam end to end.
        </h1>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          Watch how a patient with knee pain completes the visual pre-exam and what their
          orthopedist receives moments later.
        </p>

        <div className="mt-10 relative rounded-3xl overflow-hidden border border-border bg-card shadow-elevated">
          <img src={joint} alt="Demo preview" className="w-full aspect-video object-cover opacity-80" />
          <button className="absolute inset-0 grid place-items-center group">
            <span className="size-20 rounded-full bg-foreground/90 text-background grid place-items-center group-hover:scale-105 transition shadow-elevated">
              <Play className="size-7 ml-1" fill="currentColor" />
            </span>
          </button>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            ["00:00", "Patient opens body map and selects right knee"],
            ["00:18", "Phone camera captures range-of-motion test"],
            ["00:42", "Report generated, sent to chosen clinic via QR"],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-5">
              <div className="font-mono text-sm text-primary">{t}</div>
              <p className="mt-2 text-sm text-foreground">{d}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap gap-3">
          <Link
            to="/pre-exam"
            className="h-12 px-6 rounded-full bg-primary text-primary-foreground font-medium shadow-soft hover:shadow-elevated transition inline-flex items-center"
          >
            Try it yourself
          </Link>
          <Link
            to="/clinics"
            className="h-12 px-6 rounded-full border border-border bg-card text-foreground font-medium hover:bg-muted transition inline-flex items-center"
          >
            Browse clinics
          </Link>
        </div>
      </main>
    </div>
  );
}
