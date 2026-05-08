import joint from "@/assets/joint-detail.jpg";
import { Check } from "lucide-react";

export function ReportPreview() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="rounded-3xl bg-card border border-border shadow-elevated overflow-hidden">
            <div className="flex items-center gap-1.5 px-5 py-3 border-b border-border bg-muted/40">
              <span className="size-2.5 rounded-full bg-accent/70" />
              <span className="size-2.5 rounded-full bg-secondary" />
              <span className="size-2.5 rounded-full bg-primary/30" />
              <span className="ml-3 text-xs text-muted-foreground font-mono">ortholens · pre-exam · #A4F-9921</span>
            </div>
            <div className="p-8 grid grid-cols-5 gap-6">
              <div className="col-span-2">
                <img src={joint} alt="Knee joint detail" width={1024} height={768} className="rounded-xl border border-border" loading="lazy" />
                <div className="mt-3 text-xs text-muted-foreground">Right knee · medial · ROM 92°</div>
              </div>
              <div className="col-span-3 space-y-4 text-sm">
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Patient</div>
                  <div className="font-medium text-foreground">M. Avery · 42 · 178cm · 81kg</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Chief complaint</div>
                  <div className="text-foreground leading-relaxed">Right medial knee pain, 6 weeks. Sharp on flexion past 90°, swelling after running.</div>
                </div>
                <div className="grid grid-cols-3 gap-2 pt-2">
                  {[["VAS", "6/10"], ["ROM", "92°"], ["Onset", "6w"]].map(([k, v]) => (
                    <div key={k} className="rounded-lg bg-muted px-3 py-2">
                      <div className="text-[10px] uppercase text-muted-foreground">{k}</div>
                      <div className="font-semibold text-foreground">{v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">The report</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
            A consultation that begins at minute zero.
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            No more clipboard, no more recap. Your orthopedist receives a structured PDF with
            visualized anatomy, motion data, and a triage summary — formatted to match their
            clinical workflow.
          </p>
          <ul className="space-y-3">
            {[
              "ICD-10 suggested mapping for faster billing",
              "Embedded ROM video clips and gait waveform",
              "Prior injury timeline & medication history",
              "Patient-readable plain-language version included",
            ].map((f) => (
              <li key={f} className="flex items-start gap-3 text-foreground">
                <span className="mt-0.5 size-5 rounded-full bg-primary text-primary-foreground grid place-items-center shrink-0">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
