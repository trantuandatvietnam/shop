import { Dispatch, SetStateAction } from "react";

export interface ISearchProps {
    search: {
        field: string,
        searchValue: string,
    }, 
    setSearch: Dispatch<SetStateAction<{ field: string; searchValue: string; }>>,
    handleSearch: () => void,
    setStartDate: Dispatch<SetStateAction<string>>,
    startDate: string,
    setEndDate: Dispatch<SetStateAction<string>>,
    endDate: string,
}