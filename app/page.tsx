import {
  Bath,
  CalendarCheck,
  Droplets,
  Flame,
  HandCoins,
  Heater,
  Leaf,
  Mail,
  MapPin,
  Phone,
  Receipt,
  Snowflake,
  Thermometer,
  UserCheck,
  Wrench,
} from "lucide-react";
import AnfrageFormular from "@/components/AnfrageFormular";
import ScrollEffects from "@/components/ScrollEffects";
import { kontakt, siteName } from "@/lib/site";

// Alle Texte stammen aus business-dna.md und dem Crawl der bestehenden Seite.
// Zahlen, die in der DNA mit [PRÜFEN] markiert sind, kommen bewusst nicht vor.

const bereiche = [
  {
    icon: Flame,
    titel: "Wärmetechnik",
    text: "Effiziente Wärmetechnik für Ihr Zuhause, von der modernen Heizungsanlage bis zur umweltfreundlichen Wärmepumpe. Wir sorgen für zuverlässige Wärme und nachhaltige Lösungen.",
  },
  {
    icon: Thermometer,
    titel: "Heiztechnik",
    text: "Mit moderner Heiztechnik sorgen wir für effiziente Wärme, die Kosten spart und die Umwelt schont. Von der Planung bis zur Wartung alles aus einer Hand.",
  },
  {
    icon: Leaf,
    titel: "Erneuerbare Energien",
    text: "Setzen Sie auf erneuerbare Energien, von der Solaranlage bis zur Wärmepumpe. Wir beraten Sie zu modernen Lösungen und dazu, wie Sie die Umwelt schützen können.",
  },
];

const dienstleistungen = [
  {
    icon: Heater,
    titel: "Heizungsanlagen",
    text: "Planung, Einbau und Modernisierung von Heizungsanlagen, unter anderem mit Bosch-Heiztechnik.",
  },
  {
    icon: Snowflake,
    titel: "Klimatechnik",
    text: "Planung, Einbau und Wartung von Klimaanlagen und Klimasystemen.",
  },
  {
    icon: Wrench,
    titel: "Wartung und Reparatur",
    text: "Für Heizungs-, Klima- und Sanitäranlagen, damit alles zuverlässig läuft.",
  },
  {
    icon: Bath,
    titel: "Badsanierungen",
    text: "Vom Gäste-WC bis zum kompletten Familienbad.",
  },
  {
    icon: Droplets,
    titel: "Austausch und Installation",
    text: "Sanitärarmaturen, Sanitärkeramik und Rohrleitungen.",
  },
  {
    icon: HandCoins,
    titel: "Beratung",
    text: "Zu energiesparenden Lösungen und möglichen Förderungen.",
  },
];

const werte = [
  {
    icon: UserCheck,
    titel: "Fester, persönlicher Ansprechpartner",
    text: "Von der ersten Beratung bis zur Wartung haben Sie bei uns denselben Ansprechpartner.",
  },
  {
    icon: CalendarCheck,
    titel: "Termingerechte und saubere Ausführung",
    text: "Wir halten vereinbarte Termine ein und hinterlassen Ihr Zuhause so sauber, wie wir es vorgefunden haben.",
  },
  {
    icon: Receipt,
    titel: "Transparente und faire Preise",
    text: "Sie erhalten ein nachvollziehbares Angebot und wissen vorab, womit Sie rechnen können.",
  },
];

export default function Startseite() {
  return (
    <>
      <ScrollEffects />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:font-semibold"
      >
        Zum Inhalt springen
      </a>

      <header className="sticky top-0 z-40 border-b border-ink/10 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
          <a href="#start" className="flex items-center gap-3 whitespace-nowrap font-heading text-lg font-bold">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <Flame className="h-5 w-5" aria-hidden="true" />
            </span>
            {siteName}
          </a>
          <nav aria-label="Hauptnavigation" className="hidden items-center gap-8 text-sm font-semibold md:flex">
            <a href="#leistungen" className="hover:text-primary-dark">Leistungen</a>
            <a href="#ueber-uns" className="hover:text-primary-dark">Über uns</a>
            <a href="#kontakt" className="hover:text-primary-dark">Kontakt</a>
          </nav>
          <div className="flex shrink-0 items-center gap-3 sm:gap-5">
          <a href="/verwaltung" className="text-sm font-semibold hover:text-primary-dark">Anmelden</a>
          <a
            href="#kontakt"
            className="hidden rounded-full bg-primary px-5 py-2.5 font-heading text-sm font-bold text-ink transition hover:bg-primary-dark hover:text-white sm:inline-flex"
          >
            Anfrage stellen
          </a>
          </div>
        </div>
      </header>

      <main id="main" className="flex-1">
        {/* Hero */}
        <section id="start" className="relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
            <div className="flex flex-col gap-6" data-reveal>
              <p className="font-heading text-sm font-bold uppercase tracking-widest text-primary-dark">
                Bosch Premium Fachbetrieb in Bergneustadt-Wiedenest
              </p>
              <h1 className="max-w-[18ch] text-4xl font-extrabold leading-tight sm:text-5xl">
                Wir bringen nicht nur Wärme.
              </h1>
              <p className="max-w-[52ch] text-lg text-ink/75">
                Wir bieten eine Rundumversorgung für Ihr Anliegen, wenn es um
                Haustechnik geht. Ob Wärmetechnik, Sanitär oder Elektronik: Bei uns
                befinden Sie sich in guten Händen.
              </p>
              <div>
                <a
                  href="#kontakt"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 font-heading text-base font-bold text-ink transition hover:bg-primary-dark hover:text-white"
                >
                  Anfrage stellen
                </a>
              </div>
            </div>

            <div
              className="rounded-3xl bg-ink p-8 text-white sm:p-10"
              data-reveal
              data-reveal-delay="0.15"
            >
              <p className="font-heading text-sm font-bold uppercase tracking-widest text-primary">
                Heizung, Sanitär und Klima
              </p>
              <p className="mt-4 max-w-[36ch] text-balance text-xl font-semibold leading-snug">
                Alles aus einer Hand, mit festem Ansprechpartner, für Wiedenest,
                Bergneustadt, Gummersbach und Umgebung.
              </p>
              <ul className="mt-8 grid gap-4 text-white/85">
                <li className="flex items-start gap-3">
                  <Heater className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  Heizungsanlagen planen, installieren, modernisieren und warten,
                  inklusive Wärmepumpen
                </li>
                <li className="flex items-start gap-3">
                  <Snowflake className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  Klimaanlagen für angenehm kühle Räume im Sommer
                </li>
                <li className="flex items-start gap-3">
                  <Bath className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  Sanitär und Badsanierung vom Gäste-WC bis zum Familienbad
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Was wir tun */}
        <section id="leistungen" className="border-t border-ink/10 bg-mist">
          <div className="mx-auto flex max-w-6xl flex-col gap-14 px-6 py-20 lg:py-28">
            <div className="flex flex-col gap-4" data-reveal>
              <p className="font-heading text-sm font-bold uppercase tracking-widest text-primary-dark">
                Was wir tun
              </p>
              <h2 className="max-w-[24ch] text-3xl font-bold sm:text-4xl">
                Wärme, Kühle und Wasser, dort wo Sie es brauchen.
              </h2>
              <p className="max-w-[60ch] text-lg text-ink/75">
                Damit es bei Ihnen warm bleibt, wenn es soll, angenehm kühl, wenn es
                muss, und das Wasser nur da kommt, wo es soll.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {bereiche.map((bereich, index) => (
                <article
                  key={bereich.titel}
                  className="flex flex-col gap-4 rounded-2xl bg-white p-8 shadow-sm"
                  data-reveal
                  data-reveal-delay={(index * 0.1).toFixed(2)}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-primary-dark">
                    <bereich.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="text-xl font-bold">{bereich.titel}</h3>
                  <p className="text-ink/75">{bereich.text}</p>
                </article>
              ))}
            </div>

            <div className="flex flex-col gap-8">
              <h3 className="text-2xl font-bold" data-reveal>
                Unsere Dienstleistungen
              </h3>
              <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {dienstleistungen.map((dienst, index) => (
                  <li
                    key={dienst.titel}
                    className="flex gap-4 rounded-2xl border border-ink/10 bg-white p-6"
                    data-reveal
                    data-reveal-delay={((index % 3) * 0.08).toFixed(2)}
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent-dark">
                      <dienst.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="flex flex-col gap-1">
                      <h4 className="font-heading text-base font-bold">{dienst.titel}</h4>
                      <p className="text-sm text-ink/75">{dienst.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Über uns / Vertrauen */}
        <section id="ueber-uns" className="border-t border-ink/10">
          <div className="mx-auto flex max-w-6xl flex-col gap-14 px-6 py-20 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <div className="flex flex-col gap-4" data-reveal>
                <p className="font-heading text-sm font-bold uppercase tracking-widest text-primary-dark">
                  Über uns
                </p>
                <h2 className="max-w-[20ch] text-3xl font-bold sm:text-4xl">
                  Familiär geführt, seit 2015 in Wiedenest.
                </h2>
              </div>
              <div className="flex flex-col gap-5 text-lg text-ink/75" data-reveal data-reveal-delay="0.1">
                <p>
                  Wir, Firma Schulz, sind ein kleiner, familiär geführter Heizungs-,
                  Sanitär- und Klimatechnikbetrieb aus Bergneustadt-Wiedenest. Seit
                  2015 stehen wir für zuverlässige Arbeit, persönliche Betreuung und
                  ehrliche Beratung.
                </p>
                <p>
                  Als Bosch Premium Fachbetrieb setzen wir auf hochwertige Produkte
                  und moderne Technik mit langer Lebensdauer, für Heizung, Sanitär
                  und Klima.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <h3 className="text-2xl font-bold" data-reveal>
                Unsere Werte
              </h3>
              <ul className="grid gap-6 md:grid-cols-3">
                {werte.map((wert, index) => (
                  <li
                    key={wert.titel}
                    className="flex flex-col gap-4 rounded-2xl bg-mist p-8"
                    data-reveal
                    data-reveal-delay={(index * 0.1).toFixed(2)}
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-ink">
                      <wert.icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h4 className="font-heading text-lg font-bold">{wert.titel}</h4>
                    <p className="text-ink/75">{wert.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section id="kontakt" className="border-t border-ink/10 bg-mist">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
            <div className="flex flex-col gap-6" data-reveal>
              <p className="font-heading text-sm font-bold uppercase tracking-widest text-primary-dark">
                Kontakt
              </p>
              <h2 className="max-w-[20ch] text-3xl font-bold sm:text-4xl">
                Kontaktieren Sie uns.
              </h2>
              <p className="max-w-[52ch] text-lg text-ink/75">
                Beschreiben Sie uns kurz Ihr Anliegen. Wir melden uns bei Ihnen und
                besprechen gemeinsam die nächsten Schritte.
              </p>
              <address className="not-italic">
                <ul className="flex flex-col gap-4 text-ink/80">
                  <li className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary-dark" aria-hidden="true" />
                    {kontakt.telefonAnzeige}
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary-dark" aria-hidden="true" />
                    {kontakt.email}
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary-dark" aria-hidden="true" />
                    {kontakt.strasse}, {kontakt.ort}
                  </li>
                </ul>
              </address>
            </div>
            <div data-reveal data-reveal-delay="0.1">
              <AnfrageFormular />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-ink/10 bg-ink text-white/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1 text-sm">
            <p className="font-heading text-base font-bold text-white">{siteName}</p>
            <p>
              {kontakt.strasse}, {kontakt.ort}
            </p>
          </div>
          <ul className="flex flex-col gap-2 text-sm md:flex-row md:gap-6">
            <li>
              <a href={kontakt.telefonLink} className="hover:text-primary">
                {kontakt.telefonAnzeige}
              </a>
            </li>
            <li>
              <a href={`mailto:${kontakt.email}`} className="hover:text-primary">
                {kontakt.email}
              </a>
            </li>
          </ul>
        </div>
        <div className="border-t border-white/10">
          <p className="mx-auto max-w-6xl px-6 py-4 text-xs text-white/60">
            Demo-Seite aus dem AAM-Lehrgang, kein echtes Angebot. Kontaktdaten sind
            Platzhalter.
          </p>
        </div>
      </footer>
    </>
  );
}
