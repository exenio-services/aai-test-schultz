"use client";

import { useState, type FormEvent } from "react";

const feldKlasse =
  "w-full rounded-lg border border-ink/20 bg-white px-4 py-3 text-base text-ink placeholder:text-ink/40 focus:border-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/50";

export default function AnfrageFormular() {
  const [hinweisSichtbar, setHinweisSichtbar] = useState(false);

  function absenden(ereignis: FormEvent<HTMLFormElement>) {
    ereignis.preventDefault();
    // Der Livebau ergänzt hier die geschützte Serveranbindung.
    // Im Frontendstarter werden Formulardaten weder gelesen noch versendet.
    setHinweisSichtbar(true);
  }

  return (
    <form
      onSubmit={absenden}
      className="flex flex-col gap-5 rounded-2xl border border-ink/10 bg-white p-6 shadow-sm sm:p-8"
      aria-describedby="formular-hinweis"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-semibold">
          Ihr Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          maxLength={120}
          className={feldKlasse}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-semibold">
          Ihre E-Mail-Adresse
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          maxLength={200}
          className={feldKlasse}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="anliegen" className="text-sm font-semibold">
          Ihr Anliegen
        </label>
        <textarea
          id="anliegen"
          name="anliegen"
          required
          rows={5}
          maxLength={4000}
          placeholder="Zum Beispiel: Unsere Gasheizung ist 20 Jahre alt, wir denken über eine Wärmepumpe nach."
          className={feldKlasse}
        />
      </div>

      {/* Honeypot: für Menschen unsichtbar, Bots füllen es aus. */}
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="firma">Firma (bitte leer lassen)</label>
        <input id="firma" name="firma" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <p id="formular-hinweis" className="rounded-lg bg-mist px-4 py-3 text-sm text-ink/80">
        Übungsstand: Die Datenspeicherung verbinden wir gemeinsam.
      </p>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 font-heading text-base font-bold text-ink transition hover:bg-primary-dark hover:text-white disabled:cursor-wait disabled:opacity-60"
      >
        Anfrage absenden
      </button>

      <p className="text-sm text-ink/60">
        In diesem Übungsstand werden keine Angaben gespeichert oder versendet.
      </p>

      <div role="status" aria-live="polite">
        {hinweisSichtbar && (
          <p className="rounded-lg border border-primary-dark/30 bg-primary/10 px-4 py-3 text-sm text-ink">
            Die Datenspeicherung verbinden wir gemeinsam in der Session. Ihre Angaben wurden nicht gespeichert oder versendet.
          </p>
        )}
      </div>
    </form>
  );
}
