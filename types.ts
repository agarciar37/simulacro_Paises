export interface Country {
    name: string;
    capital: string;
    population: number;
    flag: string;
    languages: {name: string}[]
}