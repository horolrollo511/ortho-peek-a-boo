import { MousePointerClick, Activity, FileText, Stethoscope } from "lucide-react";

const steps = [
  {
    icon: MousePointerClick,
    n: "01",
    title: "Locate the pain",
    body: "Tap the body map to mark exactly where it hurts — front, back, left, right, deep or surface.",
  },
  {
    icon: Activity,
    n: "02",
    title: "Capture motion",
    body: "Guided phone-camera tests measure range of motion, swelling, and gait asymmetry.",
  },
  {
    icon: FileText,
    n: "03",
    title: "Generate report",
    body: "A clinician-readable PDF summarizes symptoms, history, and visualized anatomy.",
  },
  {
    icon: Stethoscope,
    n: "04",
    title: "Arrive prepared",
    body: "Your orthopedist opens the report before you walk in — no repeated forms, no guessing.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-28 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">How it works</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
            Four steps. One clear picture of you.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {steps.map(({ icon: Icon, n, title, body }) => (
            <div key={n} className="bg-card p-8 flex flex-col gap-6 min-h-[280px] hover:bg-muted/40 transition">
              <div className="flex items-center justify-between">
                <div className="size-11 rounded-xl bg-secondary text-primary grid place-items-center">
                  <Icon className="size-5" strokeWidth={2} />
                </div>
                <span className="font-mono text-xs text-muted-foreground">{n}</span>
              </div>
              <div className="mt-auto">
                <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
