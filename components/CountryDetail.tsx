import { FunctionComponent } from "preact/src/index.d.ts";
import { Country } from "../types.ts";

interface Props {
    country: Country
}

const CountryDetail: FunctionComponent<Props> = props => {
    const {country} = props

    return (
        <div class="detail">
            <h2>{country.name}</h2>
            <img src={country.flag} alt={country.name} class="country-flag-large"/>
            <p><strong>Capital:</strong> {country.capital}</p>
            <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
            <p><strong>Languages:</strong> {country.languages.map(l => l.name).join(", ")}</p>
            <a href="/" class="back-link">← Volver</a>
            <form method="GET" action="/deleteCookie">
                <button type="submit" class="logout-button">Cerrar sesión</button>
            </form>

        </div>
    )
}

export default CountryDetail