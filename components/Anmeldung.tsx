"use client";

import { useState, type FormEvent } from "react";

const feldKlasse = "mt-2 w-full rounded-lg border border-ink/20 bg-white px-4 py-3 text-base text-ink focus:border-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/50";

export default function Anmeldung() {
  const [hinweisSichtbar, setHinweisSichtbar] = useState(false);

  function anmelden(ereignis: FormEvent<HTMLFormElement>) {
    ereignis.preventDefault();
    // Nur vorbereitete Oberfläche: keine Zugangsdaten lesen, senden oder speichern.
    setHinweisSichtbar(true);
  }

  return (
    <form onSubmit={anmelden} className="mt-7 flex flex-col gap-5" aria-describedby="login-hinweis">
      <div>
        <label htmlFor="login-email" className="text-sm font-semibold">E-Mail-Adresse</label>
        <input id="login-email" name="email" type="email" autoComplete="username" required className={feldKlasse} />
      </div>
      <div>
        <label htmlFor="login-passwort" className="text-sm font-semibold">Passwort</label>
        <input id="login-passwort" name="password" type="password" autoComplete="current-password" required className={feldKlasse} />
      </div>
      <button type="submit" className="rounded-full bg-primary px-6 py-3 font-heading font-bold text-ink transition hover:bg-primary-dark hover:text-white">Anmelden</button>
      <p id="login-hinweis" className="text-sm text-ink/60">Die Anmeldung verbinden wir gemeinsam in der Session.</p>
      <div role="status" aria-live="polite">
        {hinweisSichtbar && <p className="rounded-lg border border-primary-dark/30 bg-primary/10 px-4 py-3 text-sm text-ink">Die Anmeldung ist noch nicht verbunden. Wir schließen den Zugang gemeinsam in der Session an.</p>}
      </div>
    </form>
  );
}
