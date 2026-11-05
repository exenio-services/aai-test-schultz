import Link from "next/link";
import Anmeldung from "@/components/Anmeldung";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anfrageverwaltung | Schulz Heiztechnik",
  robots: { index: false, follow: false },
};

export default function VerwaltungPage() {
  return (
    <main className="flex min-h-screen items-center bg-mist px-6 py-16">
      <div className="mx-auto w-full max-w-md rounded-2xl border border-ink/10 bg-white p-6 sm:p-8">
        <p className="mb-4 font-heading text-sm font-bold text-primary-dark">Schulz Heiztechnik</p>
        <h1 className="break-words text-3xl font-bold sm:text-4xl">Anmelden</h1>
        <p className="mt-3 text-ink/70">Melden Sie sich zur Anfragenverwaltung an.</p>
        <Anmeldung />
        <Link href="/" className="mt-6 inline-flex text-sm font-semibold text-primary-dark hover:underline">Zur Website</Link>
      </div>
    </main>
  );
}
