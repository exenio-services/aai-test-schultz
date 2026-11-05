# Schema der Anfragenverwaltung

Ein Schema ist ein Namensraum, ähnlich einem Ordner. Im Supabase-Projekt liegt die Tabelle service_request im Schema public. Die Tabelle enthält gleichartige Anfragen; jede Zeile ist eine Anfrage, jede Spalte eine Eigenschaft. **Der Name public erlaubt niemandem automatisch, die Daten zu lesen.** Zugriffsrechte gelten unabhängig vom Schemanamen.

## Sieben Felder

| Feld | Datentyp | Bedeutung und Regel |
|---|---|---|
| id | uuid | Eindeutige Anfrage-ID, automatisch erzeugter Primärschlüssel |
| owner_id | uuid | Zuständiger Admin; Fremdschlüssel auf auth.users.id, automatisch gesetzter Default |
| customer_name | text | Pflichtfeld, nicht leer, höchstens 120 Zeichen |
| customer_email | text | Pflichtfeld, nicht leer, höchstens 200 Zeichen |
| message | text | Pflichtfeld, nicht leer, höchstens 4000 Zeichen |
| status | text | Startwert new; erlaubt sind new, in_progress und done |
| created_at | timestamptz | Automatischer Erstellzeitpunkt mit Zeitzone |

Der Primärschlüssel identifiziert eine Anfrage eindeutig. Der Fremdschlüssel verbindet sie mit einem vorhandenen Auth-Benutzer. Statuswerte erscheinen in der Oberfläche als Neu, In Arbeit und Erledigt. Diese drei Zustände benötigen keine zusätzlichen Tabellen.

## Ein Admin und klare Rechte

Supabase Auth verwaltet genau einen vorgesehenen Admin und dessen Passwort. Öffentliche Registrierung bleibt ausgeschaltet. Seine E-Mail wird einmal auf genau einen vorhandenen Benutzer aufgelöst. Die feste UUID wird als Default für owner_id verwendet. So ordnet die Datenbank neue Anfragen automatisch zu; Browser und Worker benötigen keine Besitzer-ID als Konfigurationswert. Es gibt keine eigene Passworttabelle.

GRANT erlaubt Aktionen und bestimmte Spalten. RLS begrenzt den Zugriff auf einzelne Datensätze. Besucher ohne Anmeldung dürfen Anfragen weder lesen noch direkt einfügen, ändern oder löschen. Die echte Admin-Sitzung darf nur zugeordnete Anfragen lesen und ausschließlich deren Status ändern. Kundendaten und Besitzer bleiben geschützt. Die Regeln binden den Zugriff gleichzeitig an den festgelegten Admin und dessen eigene Datensätze.

Nur die validierende Serverroute legt neue Anfragen an. Sie prüft Eingaben und Missbrauchsschutz; der Server-Secret-Key bleibt ausschließlich auf dem Server. Öffentliche Schlüssel sind keine Zugriffsrechte. Passwörter und geheime Schlüssel gehören weder in Browserdateien noch ins Repository oder in den Chat.
