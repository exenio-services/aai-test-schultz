/** Frontend-Übungsstand. Der Livebau ersetzt diesen Platzhalter durch das geschützte Backend. */
export async function POST() {
  return Response.json(
    { ok: false, fehler: "Die Datenspeicherung verbinden wir gemeinsam in der Session. Es wurde nichts gespeichert oder versendet." },
    { status: 503, headers: { "Cache-Control": "no-store" } },
  );
}
