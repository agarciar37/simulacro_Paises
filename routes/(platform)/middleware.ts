import { FreshContext, MiddlewareHandler } from "$fresh/server.ts";

type State = {
    country: string
}

export const handler: MiddlewareHandler<State> = async (req: Request, ctx: FreshContext<State>) => {
    const cookie = req.headers.get("cookie");
    const cookies = cookie?.split(";").map(c => c.trim());
    const countryCookie = cookies?.find(c => c.startsWith("country="));

    if (countryCookie) {
        const country = countryCookie.split("=")[1];
        ctx.state = {country}
        return await ctx.next();
    }

    return new Response(null, {
        status: 302, 
        headers: {
            Location: "/"
        }
    })
}