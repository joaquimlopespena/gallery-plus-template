import InputText from "./input-text";
import SearchIcon from "../assets/icons/search.svg?react";
import { useCallback, useState } from "react";
import { debounce } from "../helpers/utils";
import usePhotos from "../contexts/photos/hooks/use-photos";

export default function PhotosSearch() {
    const [search, setSearch] = useState("");
    const { filters } = usePhotos();

    const debouncedSetSearch = useCallback(
        debounce((value: string) => {
            filters.setQ(value);
        }, 800),
        [filters.setQ]
    );

    function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
        debouncedSetSearch(e.target.value);
        setSearch(e.target.value);
    }

    return (<InputText placeholder="Buscar foto" icon={SearchIcon} value={search} onChange={handleSearch} className="flex-1" />);
}