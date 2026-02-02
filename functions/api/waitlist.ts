interface Env {
  PITBULL_WAITLIST: KVNamespace;
}

type CfContext = {
  request: Request;
  env: Env;
};

export const onRequestPost = async (context: CfContext): Promise<Response> => {
  try {
    const contentType = context.request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return new Response(JSON.stringify({ error: "Expected application/json" }), {
        status: 415,
        headers: { "content-type": "application/json" },
      });
    }

    const body = (await context.request.json()) as { email?: string };
    const email = (body.email || "").trim().toLowerCase();

    // Simple, cheap validation (good enough for MVP)
    const emailOk = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
    if (!emailOk) {
      return new Response(JSON.stringify({ error: "Invalid email" }), {
        status: 400,
        headers: { "content-type": "application/json" },
      });
    }

    const key = `waitlist:${email}`;
    const existing = await context.env.PITBULL_WAITLIST.get(key);
    if (existing) {
      return new Response(JSON.stringify({ ok: true, already: true }), {
        status: 200,
        headers: { "content-type": "application/json" },
      });
    }

    await context.env.PITBULL_WAITLIST.put(
      key,
      JSON.stringify({ email, createdAt: new Date().toISOString() })
    );

    return new Response(JSON.stringify({ ok: true }), {
      status: 201,
      headers: { "content-type": "application/json" },
    });
  } catch {
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }
};
