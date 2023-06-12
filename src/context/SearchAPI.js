import { createContext, useContext, useState } from "react";

export const SearchContext = createContext();

export function SearchContextProvider({ children }) {
  const [keyword, setKeyword] = useState("");

  return (
    <SearchContext.Provider value={{ keyword, setKeyword }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchAPI() {
  return useContext(SearchContext);
}
