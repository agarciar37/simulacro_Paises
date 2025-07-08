import { FunctionComponent } from "preact/src/index.d.ts";
import { Country } from "../types.ts";

interface Props {
    country: Country
}

const CountryCard: FunctionComponent<Props> = (props) => {
    const { country } = props;
    return (
        <div class="country-card">
            <a href={`/countries/${country.name}`} >
                <img src={country.flag} alt={`Flag of ${country.name}`} width="50" />
                <span>{country.name}</span>
            </a>
        </div>
    );
}

export default CountryCard;