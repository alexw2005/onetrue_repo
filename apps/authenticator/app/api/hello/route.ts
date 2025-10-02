export async function GET() {
  return new Response(JSON.stringify({ ok: true, service: "authenticator-bff" }), {
    headers: { "content-type": "application/json" }
  });
}
