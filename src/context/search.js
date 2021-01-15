import { createContext, useState } from "react";

const SearchContext = createContext(true);

const SearchProvider = props => {
  const [history, setHistory] = useState([]);

  return <SearchContext.Provider value={{
    history,
    setHistory,
  }}>{props.children}</SearchContext.Provider>
};

export { SearchProvider };
export default SearchContext;