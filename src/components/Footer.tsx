export function Footer() {
  return (
    <footer className="border-t border-border/60 py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} Ortholens Health, Inc. · Not a substitute for medical advice.</div>
        <div className="flex gap-6">
          <a className="hover:text-foreground transition" href="#">Privacy</a>
          <a className="hover:text-foreground transition" href="#">Terms</a>
          <a className="hover:text-foreground transition" href="#">Clinicians</a>
          <a className="hover:text-foreground transition" href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}
