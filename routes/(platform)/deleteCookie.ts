import { FreshContext, Handlers } from "$fresh/server.ts";
import { deleteCookie } from "$std/http/cookie.ts";

export const handler: Handlers = {
  GET: (_req: Request, ctx: FreshContext) => {
    const headers = new Headers();
    deleteCookie(headers, "country", { path: "/" });
    headers.set("Location", "/");
    return new Response(null, { status: 302, headers });
  },
};
