import { searchTerm } from "../utils/countriesSignal.ts";

const SearchBar = () => {
  return (
    <input
      type="text"
      placeholder="Buscar país..."
      onInput={(e) => searchTerm.value = e.currentTarget.value}
      class="searchbar"
    />
  );
};

export default SearchBar;