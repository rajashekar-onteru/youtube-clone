import { createContext, useContext, useState } from "react";
export const AppContext = createContext();
export const ContextProvider = ({ children }) => {
  const [expand, setExpand] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [categoryId, setCategoryId] = useState(0);
  const [videoId, setVideoId] = useState();
  const [videosData, setVideosData] = useState([]);
  const [tab, setTab] = useState("Home");
  return (
    <AppContext.Provider
      value={{
        expand,
        setExpand,
        loading,
        setLoading,
        isSearchOpen,
        setIsSearchOpen,
        categoryId,
        setCategoryId,
        videoId,
        setVideoId,
        videosData,
        setVideosData,
        tab,
        setTab,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useApp = () => useContext(AppContext);
