import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { BodyMap } from "@/components/BodyMap";
import { ReportPreview } from "@/components/ReportPreview";
import { Trust } from "@/components/Trust";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ortholens — Visualized Orthopedic Pre-Examination" },
      {
        name: "description",
        content:
          "A 7-minute interactive pre-exam for orthopedic patients. Map your pain, capture motion, and arrive at your appointment with a clinician-ready visual report.",
      },
      { property: "og:title", content: "Ortholens — Visualized Orthopedic Pre-Examination" },
      {
        property: "og:description",
        content: "Tap where it hurts. Arrive understood. Visual pre-exams for modern orthopedic care.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <BodyMap />
        <ReportPreview />
        <Trust />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
