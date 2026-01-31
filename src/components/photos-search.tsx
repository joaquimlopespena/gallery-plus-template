import InputText from "./input-text";
import SearchIcon from "../assets/icons/search.svg?react";
import { useCallback, useState } from "react";
import { debounce } from "../helpers/utils";

export default function PhotosSearch() {
    const [search, setSearch] = useState("");
    const debouncedSetSearch = useCallback(
        debounce((value: string) => console.log(value), 800),
        []
    );

    function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
        debouncedSetSearch(e.target.value);
        setSearch(e.target.value);
    }

    return (<InputText placeholder="Buscar foto" icon={SearchIcon} value={search} onChange={handleSearch} className="flex-1" />);
}