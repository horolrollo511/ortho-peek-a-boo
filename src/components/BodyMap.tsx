import { useState } from "react";
import skeleton from "@/assets/skeleton-hero.png";

const regions = [
  { id: "shoulder", label: "Shoulder", x: 32, y: 22, cases: "1,240 reports" },
  { id: "spine", label: "Lower back", x: 50, y: 38, cases: "3,580 reports" },
  { id: "hip", label: "Hip", x: 56, y: 47, cases: "892 reports" },
  { id: "knee", label: "Knee", x: 44, y: 68, cases: "4,120 reports" },
  { id: "ankle", label: "Ankle", x: 53, y: 88, cases: "640 reports" },
];

export function BodyMap() {
  const [active, setActive] = useState("knee");
  const current = regions.find((r) => r.id === active)!;

  return (
    <section id="regions" className="py-28 bg-secondary/40 border-y border-border/60">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-6">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Interactive body map</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
            Point. We listen.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Most patients struggle to describe pain in words. Ortholens replaces the questionnaire
            with an anatomical map — calibrated to the way orthopedists actually think.
          </p>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Selected region</div>
            <div className="mt-1 flex items-end justify-between">
              <span className="text-3xl font-semibold text-foreground">{current.label}</span>
              <span className="text-sm text-muted-foreground">{current.cases}</span>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs">
              {["Sharp", "Dull", "Throbbing"].map((t) => (
                <div key={t} className="rounded-lg bg-muted py-2 text-muted-foreground">{t}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 relative aspect-[4/5] max-w-md mx-auto w-full">
          <img src={skeleton} alt="Body region map" width={1024} height={1024} className="w-full h-full object-contain opacity-90" loading="lazy" />
          {regions.map((r) => (
            <button
              key={r.id}
              onClick={() => setActive(r.id)}
              style={{ left: `${r.x}%`, top: `${r.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 group"
              aria-label={r.label}
            >
              <span className={`block size-6 rounded-full transition ${active === r.id ? "bg-accent" : "bg-primary/30 group-hover:bg-primary/60"}`}>
                <span className={`block size-full rounded-full ${active === r.id ? "animate-ping bg-accent/70" : ""}`} />
              </span>
              <span className="absolute left-1/2 -translate-x-1/2 mt-1 text-[10px] font-medium text-foreground bg-card border border-border rounded-full px-2 py-0.5 whitespace-nowrap shadow-soft">
                {r.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
