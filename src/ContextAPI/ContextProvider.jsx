import { createContext, useContext, useState } from "react";
export const AppContext = createContext();
export const ContextProvider = ({ children }) => {
  const [expand, setExpand] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <AppContext.Provider
      value={{
        expand,
        setExpand,
        loading,
        setLoading,
        isSearchOpen,
        setIsSearchOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useApp = () => useContext(AppContext);
