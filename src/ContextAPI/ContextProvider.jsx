import { createContext, useContext, useState } from "react";
export const AppContext = createContext();
export const ContextProvider = ({ children }) => {
  const [expand, setExpand] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [category, setCategory] = useState(0);
  const [videoId, setVideoId] = useState();
  const [videosData, setVideosData] = useState([]);
  const [expanded, setExpanded] = useState(false);
  return (
    <AppContext.Provider
      value={{
        expand,
        setExpand,
        loading,
        setLoading,
        isSearchOpen,
        setIsSearchOpen,
        category,
        setCategory,
        videoId,
        setVideoId,
        videosData,
        setVideosData,
        expanded,
        setExpanded,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useApp = () => useContext(AppContext);
