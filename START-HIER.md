# Schulz-Website starten

Node.js 22.23.1 verwenden. ZIP entpacken und diesen Projektordner in Claude Code öffnen.

1. npm ci installiert die mitgelieferten Paketversionen.
2. npm run dev:vinext startet die lokale Website.
3. npm run build:vinext baut die Anwendung; danach startet npm run start:vinext die lokale Workers-Vorschau.

Anmelden-Button und Loginoberfläche sind vorbereitet. Echte Anmeldung und Datenspeicherung sind noch nicht verbunden. Das Formular überträgt keine Angaben; direkte Aufrufe der Serverroute antworten bewusst mit HTTP 503. Es ist keine fertige Backendlösung enthalten.

SCHEMA.md erklärt die sieben Datenfelder, den einen Admin und die Zugriffsprinzipien. Passwörter und geheime Schlüssel gehören niemals in den Chat oder ins Repository.
