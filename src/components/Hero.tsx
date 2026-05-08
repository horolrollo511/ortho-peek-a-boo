import { Link } from "@tanstack/react-router";
import skeleton from "@/assets/skeleton-hero.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-accent" />
            Visualized orthopedic pre-examination
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.02]">
            See your pain<br />
            <span className="italic font-serif text-primary">before</span> the appointment.
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Ortholens guides you through a 7-minute interactive pre-exam. Tap where it hurts,
            describe how it moves, and arrive at your orthopedist with a structured visual
            report — so the consultation starts where it matters.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/pre-exam"
              className="h-12 px-6 rounded-full bg-primary text-primary-foreground font-medium shadow-soft hover:shadow-elevated transition inline-flex items-center"
            >
              Start free pre-exam
            </Link>
            <Link
              to="/demo"
              className="h-12 px-6 rounded-full border border-border bg-card text-foreground font-medium hover:bg-muted transition inline-flex items-center"
            >
              Watch 60-sec demo
            </Link>
          </div>
          <dl className="flex gap-10 pt-4">
            {[
              ["7 min", "average session"],
              ["94%", "report accuracy"],
              ["320+", "partner clinics"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-2xl font-semibold text-foreground">{k}</dt>
                <dd className="text-xs text-muted-foreground mt-1">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="absolute inset-0 -m-6 rounded-[2.5rem] bg-card shadow-elevated -z-10" />
          <img
            src={skeleton}
            alt="Anatomical visualization of joints with highlighted pain regions"
            width={1024}
            height={1024}
            className="w-full h-auto"
          />
          <FloatingTag className="top-[18%] left-[10%]" label="Shoulder" value="Mild · L" />
          <FloatingTag className="top-[58%] right-[6%]" label="Knee" value="Moderate · R" tone="accent" />
          <FloatingTag className="bottom-[8%] left-[8%]" label="Range of motion" value="Captured" />
        </div>
      </div>
    </section>
  );
}

function FloatingTag({
  className,
  label,
  value,
  tone = "default",
}: {
  className?: string;
  label: string;
  value: string;
  tone?: "default" | "accent";
}) {
  return (
    <div
      className={`absolute ${className} bg-card/95 backdrop-blur border border-border rounded-2xl px-3 py-2 shadow-soft text-left`}
    >
      <div className="flex items-center gap-2">
        <span
          className={`size-2 rounded-full ${tone === "accent" ? "bg-accent" : "bg-primary"}`}
        />
        <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</span>
      </div>
      <div className="text-sm font-medium text-foreground mt-0.5">{value}</div>
    </div>
  );
}
