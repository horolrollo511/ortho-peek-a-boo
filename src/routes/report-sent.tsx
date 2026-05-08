import { createFileRoute, Link, Navigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Check, Download, QrCode, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/report-sent")({
  head: () => ({
    meta: [
      { title: "Report sent · Ortholens" },
      { name: "description", content: "Your orthopedic pre-exam report has been generated." },
    ],
  }),
  component: ReportSent,
});

type Report = {
  id: string;
  createdAt: string;
  region: string;
  pain: string[];
  trigger: string[];
  duration: string;
  intensity: number;
};

function ReportSent() {
  const [report, setReport] = useState<Report | null>(null);
  const [missing, setMissing] = useState(false);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("ortholens.lastReport");
      if (!raw) {
        setMissing(true);
        return;
      }
      setReport(JSON.parse(raw));
    } catch {
      setMissing(true);
    }
  }, []);

  if (missing) return <Navigate to="/pre-exam" />;
  if (!report) return <div className="min-h-screen bg-background" />;

  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-3xl px-6 py-20">
        <div className="flex flex-col items-center text-center">
          <div className="size-16 rounded-full bg-primary text-primary-foreground grid place-items-center shadow-elevated">
            <Check className="size-7" strokeWidth={3} />
          </div>
          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-primary">Report generated</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
            Your pre-exam is ready.
          </h1>
          <p className="mt-4 text-muted-foreground max-w-lg">
            Show the QR code at reception, or share the report ID with your orthopedist. They'll
            open it in their workflow before you walk in.
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-border bg-card shadow-soft overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-muted/40">
            <span className="font-mono text-xs text-muted-foreground">
              ortholens · report · #{report.id}
            </span>
            <span className="text-xs text-muted-foreground">
              {new Date(report.createdAt).toLocaleString()}
            </span>
          </div>

          <div className="grid md:grid-cols-5 gap-6 p-6">
            <div className="md:col-span-2 flex flex-col items-center justify-center rounded-2xl bg-muted/40 p-6">
              <div className="size-40 rounded-2xl bg-foreground p-3">
                <QrPattern seed={report.id} />
              </div>
              <p className="mt-3 text-xs text-muted-foreground">Scan at reception</p>
            </div>

            <dl className="md:col-span-3 divide-y divide-border">
              <Row label="Region" value={report.region} />
              <Row label="Pain type" value={report.pain.join(", ") || "—"} />
              <Row label="Triggers" value={report.trigger.join(", ") || "—"} />
              <Row label="Duration" value={report.duration || "—"} />
              <Row label="Intensity" value={`${report.intensity} / 10`} />
            </dl>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => downloadJson(report)}
            className="h-12 px-6 rounded-full border border-border bg-card text-foreground font-medium hover:bg-muted transition inline-flex items-center gap-2"
          >
            <Download className="size-4" /> Download report
          </button>
          <Link
            to="/clinics"
            className="h-12 px-6 rounded-full bg-primary text-primary-foreground font-medium shadow-soft hover:shadow-elevated transition inline-flex items-center gap-2"
          >
            <QrCode className="size-4" /> Choose a clinic <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-12 text-center">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
            Back to home
          </Link>
        </div>
      </main>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-start gap-4 py-3">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="text-sm font-medium text-foreground text-right max-w-[60%]">{value}</span>
    </div>
  );
}

function QrPattern({ seed }: { seed: string }) {
  // Decorative deterministic 12x12 pattern derived from the report ID.
  const cells = Array.from({ length: 144 }, (_, i) => {
    let h = 0;
    const s = seed + i;
    for (let j = 0; j < s.length; j++) h = (h * 31 + s.charCodeAt(j)) | 0;
    return h % 3 !== 0;
  });
  return (
    <div className="grid grid-cols-12 gap-px h-full w-full">
      {cells.map((on, i) => (
        <div key={i} className={on ? "bg-background" : "bg-foreground"} />
      ))}
    </div>
  );
}

function downloadJson(report: Report) {
  const blob = new Blob([JSON.stringify(report, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `ortholens-report-${report.id}.json`;
  a.click();
  URL.revokeObjectURL(url);
}
