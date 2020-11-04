import { useState, createContext } from "react";

export const FilterContext = createContext();

export const FilterContextProvider = (props) => {
  const [filters, setFilters] = useState([]);
  return (
    <FilterContext.Provider value={[filters, setFilters]}>
      {props.children}
    </FilterContext.Provider>
  );
};
