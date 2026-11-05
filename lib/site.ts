// Zentrale Stammdaten der Demo-Seite. Kontaktdaten sind bewusst Platzhalter,
// weil die Seite im AAM-Lehrgang als Demo für einen echten Betrieb dient.

export const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const siteName = "Schulz Heiztechnik";

export const seoTitle =
  "Schulz Heiztechnik - Heizungsbauer in Wiedenest und Umgebung";

export const seoDescription =
  "Heizungsbauer in Wiedenest: moderne Heiztechnik, Wärmepumpen & erneuerbare Energien. Persönliche Beratung, Installation und Service.";

export const kontakt = {
  telefonAnzeige: "02261 000000",
  telefonLink: "tel:+492261000000",
  email: "anfrage@beispiel.de",
  strasse: "Musterstraße 1",
  ort: "00000 Beispielort",
};
