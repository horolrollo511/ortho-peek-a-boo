export function Trust() {
  return (
    <section id="trust" className="py-28 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Built with clinicians</p>
            <h2 className="text-4xl font-semibold tracking-tight text-foreground">
              Designed in clinic, not in a lab.
            </h2>
          </div>
          <figure className="lg:col-span-2 space-y-8">
            <blockquote className="text-2xl md:text-3xl font-medium text-foreground leading-snug tracking-tight">
              "I used to spend the first ten minutes of every appointment reconstructing the
              patient's story. With Ortholens, I open the door already knowing where to look."
            </blockquote>
            <figcaption className="flex items-center gap-4">
              <div className="size-12 rounded-full bg-secondary border border-border" />
              <div>
                <div className="font-medium text-foreground">Dr. Lena Park, MD</div>
                <div className="text-sm text-muted-foreground">Orthopedic surgeon · Seoul Bone & Joint</div>
              </div>
            </figcaption>
          </figure>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            ["HIPAA", "compliant by design"],
            ["GDPR", "EU data residency"],
            ["ISO 27001", "certified infrastructure"],
            ["FDA Class I", "wellness device"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-2xl border border-border bg-card p-6">
              <div className="text-lg font-semibold text-foreground">{k}</div>
              <div className="text-sm text-muted-foreground mt-1">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
