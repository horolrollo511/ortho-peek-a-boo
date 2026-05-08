import { Link } from "@tanstack/react-router";

export function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-foreground text-background p-12 md:p-20">
          <div
            className="absolute -right-20 -top-20 size-96 rounded-full opacity-30 blur-3xl"
            style={{ background: "var(--gradient-primary)" }}
          />
          <div className="relative max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Ready to walk in already understood?
            </h2>
            <p className="mt-5 text-background/70 text-lg leading-relaxed">
              Begin a free pre-examination. Bring the report to any orthopedist — or to one of
              our 320+ partner clinics.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/pre-exam"
                className="h-12 px-6 rounded-full bg-background text-foreground font-medium hover:opacity-90 transition inline-flex items-center"
              >
                Start pre-exam
              </Link>
              <Link
                to="/clinics"
                className="h-12 px-6 rounded-full border border-background/20 text-background hover:bg-background/10 transition inline-flex items-center"
              >
                Find a clinic
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
