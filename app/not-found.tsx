import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-24 text-center">
      <p className="font-heading text-sm font-bold uppercase tracking-widest text-primary-dark">
        Fehler 404
      </p>
      <h1 className="max-w-[20ch] text-3xl font-bold sm:text-4xl">
        Diese Seite gibt es nicht.
      </h1>
      <p className="max-w-[48ch] text-ink/70">
        Der Link ist veraltet oder enthält einen Tippfehler. Auf der Startseite
        finden Sie alle Leistungen und das Kontaktformular.
      </p>
      <Link
        href="/"
        className="rounded-full bg-primary px-8 py-4 font-heading font-bold text-ink transition hover:bg-primary-dark hover:text-white"
      >
        Zur Startseite
      </Link>
    </main>
  );
}
