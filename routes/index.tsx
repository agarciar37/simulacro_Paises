import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import LoginForm from "../islands/LoginForm.tsx";
import { Country } from "../types.ts";
import axios from "axios"

interface Data {
    countries: Country[]
}

export const handler: Handlers = {
    GET: async (req: Request, ctx: FreshContext<unknown, Data>) => {
        const url = "https://www.apicountries.com/countries"
        try {
            const response = await axios.get<Country[]>(url)
            return ctx.render({countries: response.data})
        } catch (e) {
            return new Response ("Error fetching Data")
        }
    } 
}

export default (props: PageProps<Data>) => {
    return <LoginForm countries={props.data.countries} />
}