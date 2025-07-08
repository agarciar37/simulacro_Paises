import { FunctionComponent } from "preact/src/index.d.ts";
import { Country } from "../types.ts";
import { useComputed } from "@preact/signals";import { searchTerm } from "../utils/countriesSignal.ts";
import SearchBar from "./SearchBar.tsx";
import CountryCard from "../components/CountryCard.tsx";

interface Props {
    countries: Country[]
}

const LoginForm: FunctionComponent<Props> = (props) => {
    const {countries} = props

    const filteredCountries = useComputed(() => countries.filter((c) => 
    c.name.toLowerCase().includes(searchTerm.value.toLowerCase())))

    return (
        <div>
            <SearchBar />
            <ul >
                {filteredCountries.value.length === 0? (
                    <p>No se encontró ningún país</p>
                ): (filteredCountries.value.map((c) => (
                    <CountryCard key={c.name} country={c} />
                )))}
            </ul>
        </div>
    )
} 

export default LoginForm;