import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Star, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/clinics")({
  head: () => ({
    meta: [
      { title: "Partner Clinics · Ortholens" },
      { name: "description", content: "Browse 320+ orthopedic clinics that accept Ortholens pre-exam reports." },
    ],
  }),
  component: Clinics,
});

const clinics = [
  { name: "Seoul Bone & Joint Center", city: "Seoul, KR", specialty: "Knee · Hip", rating: 4.9, distance: "1.2 km", lead: "Dr. Lena Park" },
  { name: "Manhattan Orthopedic Group", city: "New York, US", specialty: "Sports medicine", rating: 4.8, distance: "0.4 mi", lead: "Dr. R. Hernandez" },
  { name: "Charité Klinik für Orthopädie", city: "Berlin, DE", specialty: "Spine · Trauma", rating: 4.7, distance: "2.8 km", lead: "Dr. M. Becker" },
  { name: "Tokyo Joint Institute", city: "Tokyo, JP", specialty: "Shoulder · Elbow", rating: 4.9, distance: "3.1 km", lead: "Dr. K. Sato" },
  { name: "Stockholm Rörelseklinik", city: "Stockholm, SE", specialty: "Pediatric ortho", rating: 4.8, distance: "5.0 km", lead: "Dr. A. Lindqvist" },
  { name: "London Bridge Orthopedics", city: "London, UK", specialty: "Foot & Ankle", rating: 4.6, distance: "0.9 mi", lead: "Dr. P. Whitfield" },
];

function Clinics() {
  const [q, setQ] = useState("");
  const filtered = clinics.filter(
    (c) =>
      c.name.toLowerCase().includes(q.toLowerCase()) ||
      c.city.toLowerCase().includes(q.toLowerCase()) ||
      c.specialty.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5">
            <ArrowLeft className="size-4" /> Home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Partner network</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
          Find a clinic that reads your report.
        </h1>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          320+ orthopedic practices accept Ortholens pre-exams as part of intake. Show your QR
          code at reception — your report opens automatically in their EHR.
        </p>

        <div className="mt-10">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by city, specialty, or clinic"
            className="w-full h-14 rounded-2xl border border-border bg-card px-5 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {filtered.map((c) => (
            <article key={c.name} className="rounded-2xl border border-border bg-card p-6 hover:shadow-soft transition">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-semibold text-foreground">{c.name}</h2>
                  <p className="text-sm text-muted-foreground inline-flex items-center gap-1 mt-1">
                    <MapPin className="size-3.5" /> {c.city} · {c.distance}
                  </p>
                </div>
                <div className="inline-flex items-center gap-1 text-sm text-foreground">
                  <Star className="size-4 fill-accent text-accent" /> {c.rating}
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                  {c.specialty}
                </span>
                <span className="text-xs text-muted-foreground">{c.lead}</span>
              </div>
              <button className="mt-5 w-full h-10 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition">
                Book with pre-exam
              </button>
            </article>
          ))}
          {!filtered.length && (
            <div className="md:col-span-2 text-center text-muted-foreground py-16">
              No clinics match "{q}". Try a different city or specialty.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
