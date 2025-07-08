import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "axios";
import { Country } from "../../types.ts";
import CountryDetail from "../../components/CountryDetail.tsx";
import { setCookie } from "$std/http/cookie.ts"; // estándar de Deno

interface Data {
  country: Country;
}

export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext<unknown, Data>) => {
    const { name } = ctx.params;
    const url = `https://www.apicountries.com/countries/name/${name}`;

    try {
      const response = await axios.get<Country[]>(url);
      const country = response.data[0];

      const headers = new Headers();
      setCookie(headers, {
        name: "country",
        value: encodeURIComponent(name),
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 7 días
      });

      return ctx.render({ country }, { headers });

    } catch (e) {
      return new Response("Error fetching data");
    }
  },
};

export default (props: PageProps<Data>) => (
  <CountryDetail country={props.data.country} />
);
