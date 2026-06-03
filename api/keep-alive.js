// Daglig cron mot Supabase så projektet inte pausas.
// Schemalagd via vercel.json -> crons.
export default async function handler(req, res) {
  const SUPABASE_URL = 'https://vcykbabftxlyivxaohxa.supabase.co';
  const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjeWtiYWJmdHhseWl2eGFvaHhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkyNzA1NjQsImV4cCI6MjA5NDg0NjU2NH0.2cOhsyzrpu4l4PDh8qAmBhYfP-niCit4DSyufIsWuAU';
  try {
    const r = await fetch(`${SUPABASE_URL}/rest/v1/exercises?select=id&limit=1`, {
      headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` }
    });
    return res.status(200).json({ ok: true, status: r.status, at: new Date().toISOString() });
  } catch (e) {
    return res.status(500).json({ ok: false, error: String(e) });
  }
}
