import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import skeleton from "@/assets/skeleton-hero.png";

export const Route = createFileRoute("/pre-exam")({
  head: () => ({
    meta: [
      { title: "Pre-Exam · Ortholens" },
      { name: "description", content: "Begin your guided 7-minute orthopedic pre-examination." },
    ],
  }),
  component: PreExam,
});

const regions = [
  { id: "shoulder-l", label: "Left shoulder", x: 38, y: 22 },
  { id: "shoulder-r", label: "Right shoulder", x: 62, y: 22 },
  { id: "spine", label: "Lower back", x: 50, y: 38 },
  { id: "hip-l", label: "Left hip", x: 44, y: 47 },
  { id: "hip-r", label: "Right hip", x: 56, y: 47 },
  { id: "knee-l", label: "Left knee", x: 44, y: 68 },
  { id: "knee-r", label: "Right knee", x: 56, y: 68 },
  { id: "ankle-l", label: "Left ankle", x: 46, y: 88 },
  { id: "ankle-r", label: "Right ankle", x: 54, y: 88 },
];

const painTypes = ["Sharp", "Dull", "Throbbing", "Burning", "Stiff", "Tingling"];
const triggers = ["Walking", "Sitting", "Standing up", "Bending", "Lifting", "At rest", "At night"];

function PreExam() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [region, setRegion] = useState<string | null>(null);
  const [pain, setPain] = useState<string[]>([]);
  const [trigger, setTrigger] = useState<string[]>([]);
  const [intensity, setIntensity] = useState(5);
  const [duration, setDuration] = useState("");

  const togglePain = (p: string) =>
    setPain((s) => (s.includes(p) ? s.filter((x) => x !== p) : [...s, p]));
  const toggleTrigger = (t: string) =>
    setTrigger((s) => (s.includes(t) ? s.filter((x) => x !== t) : [...s, t]));

  const steps = ["Region", "Pain type", "Triggers", "Intensity", "Review"];
  const canNext =
    (step === 0 && region) ||
    (step === 1 && pain.length) ||
    (step === 2 && trigger.length) ||
    step === 3 ||
    step === 4;

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 backdrop-blur bg-background/80 border-b border-border/60">
        <div className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5">
            <ArrowLeft className="size-4" /> Exit pre-exam
          </Link>
          <div className="text-sm font-mono text-muted-foreground">
            Step {step + 1} / {steps.length}
          </div>
        </div>
        <div className="h-1 bg-muted">
          <div
            className="h-full bg-primary transition-all duration-500"
            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
          />
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex gap-2 mb-10">
          {steps.map((s, i) => (
            <div key={s} className="flex-1">
              <div className={`text-xs ${i <= step ? "text-foreground" : "text-muted-foreground"} font-medium`}>
                {s}
              </div>
              <div className={`mt-2 h-1 rounded-full ${i <= step ? "bg-primary" : "bg-muted"}`} />
            </div>
          ))}
        </div>

        {step === 0 && (
          <StepShell title="Where does it hurt?" hint="Tap the region on the body map.">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-[4/5] max-w-sm mx-auto w-full">
                <img src={skeleton} alt="Body map" className="w-full h-full object-contain opacity-90" />
                {regions.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => setRegion(r.id)}
                    style={{ left: `${r.x}%`, top: `${r.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    aria-label={r.label}
                  >
                    <span
                      className={`block size-5 rounded-full border-2 border-background transition ${
                        region === r.id ? "bg-accent scale-125" : "bg-primary/40 hover:bg-primary/70"
                      }`}
                    />
                  </button>
                ))}
              </div>
              <div className="space-y-2">
                {regions.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => setRegion(r.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl border transition ${
                      region === r.id
                        ? "border-primary bg-primary/5 text-foreground"
                        : "border-border bg-card text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>
          </StepShell>
        )}

        {step === 1 && (
          <StepShell title="How would you describe the pain?" hint="Select all that apply.">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {painTypes.map((p) => (
                <Chip key={p} active={pain.includes(p)} onClick={() => togglePain(p)}>
                  {p}
                </Chip>
              ))}
            </div>
          </StepShell>
        )}

        {step === 2 && (
          <StepShell title="When does it get worse?" hint="Select all triggers you've noticed.">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {triggers.map((t) => (
                <Chip key={t} active={trigger.includes(t)} onClick={() => toggleTrigger(t)}>
                  {t}
                </Chip>
              ))}
            </div>
            <div className="mt-8">
              <label className="text-sm text-muted-foreground">How long have you had this pain?</label>
              <input
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="e.g. 3 weeks"
                className="mt-2 w-full h-12 rounded-xl border border-border bg-card px-4 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </StepShell>
        )}

        {step === 3 && (
          <StepShell title="Rate your pain right now" hint="0 = none, 10 = worst imaginable.">
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="text-center">
                <div className="text-7xl font-semibold text-foreground tabular-nums">{intensity}</div>
                <div className="text-sm text-muted-foreground mt-2">VAS scale</div>
              </div>
              <input
                type="range"
                min={0}
                max={10}
                value={intensity}
                onChange={(e) => setIntensity(Number(e.target.value))}
                className="mt-8 w-full accent-[var(--color-primary)]"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>No pain</span>
                <span>Worst possible</span>
              </div>
            </div>
          </StepShell>
        )}

        {step === 4 && (
          <StepShell title="Review your pre-exam" hint="This will be sent to your orthopedist.">
            <div className="rounded-2xl border border-border bg-card divide-y divide-border">
              <Row label="Region" value={regions.find((r) => r.id === region)?.label ?? "—"} />
              <Row label="Pain type" value={pain.join(", ") || "—"} />
              <Row label="Triggers" value={trigger.join(", ") || "—"} />
              <Row label="Duration" value={duration || "—"} />
              <Row label="Intensity" value={`${intensity} / 10`} />
            </div>
            <button
              onClick={() => navigate({ to: "/clinics" })}
              className="mt-8 w-full h-12 rounded-full bg-primary text-primary-foreground font-medium shadow-soft hover:shadow-elevated transition inline-flex items-center justify-center gap-2"
            >
              <Check className="size-4" /> Submit & find a clinic
            </button>
          </StepShell>
        )}

        <div className="flex justify-between mt-10">
          <button
            disabled={step === 0}
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            className="h-11 px-5 rounded-full border border-border text-foreground disabled:opacity-30 hover:bg-muted transition"
          >
            Back
          </button>
          {step < 4 && (
            <button
              disabled={!canNext}
              onClick={() => setStep((s) => Math.min(4, s + 1))}
              className="h-11 px-6 rounded-full bg-foreground text-background font-medium disabled:opacity-30 inline-flex items-center gap-2"
            >
              Continue <ArrowRight className="size-4" />
            </button>
          )}
        </div>
      </main>
    </div>
  );
}

function StepShell({ title, hint, children }: { title: string; hint: string; children: React.ReactNode }) {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">{title}</h1>
      <p className="mt-2 text-muted-foreground">{hint}</p>
      <div className="mt-8">{children}</div>
    </div>
  );
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`h-12 rounded-full border px-5 text-sm font-medium transition ${
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-card text-foreground hover:bg-muted"
      }`}
    >
      {children}
    </button>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center px-6 py-4">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="text-sm font-medium text-foreground text-right max-w-[60%]">{value}</span>
    </div>
  );
}
