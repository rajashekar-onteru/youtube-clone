import "../Sidebar/Sidebar.scss";
import home_icon from "../../assets/sidebar_icons/home_icon.svg";
import sports_icon from "../../assets/sidebar_icons/sports_icon.svg";
import music_icon from "../../assets/sidebar_icons/music_icon.svg";
import news_icon from "../../assets/sidebar_icons/news_icon.svg";
import gaming_icon from "../../assets/sidebar_icons/gaming_icon.svg";
import { altImg } from "../../assets/altImg.js";
import { useApp } from "../../ContextAPI/ContextProvider.jsx";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const { expand, setCategoryId, tab, setTab } = useApp();
  const icons_class = expand
    ? "expanded-sidebar-icons sidebar-icons"
    : "sidebar-icons";

  const navigate = useNavigate();
  const getClassName = (id) => {
    return tab === id ? "sidebar-active" : "";
  };

  const handleClick = (categoryId, tab) => {
    setCategoryId(categoryId);
    setTab(tab);
    navigate(`/${tab}/${categoryId}`);
    window.scrollTo({ top: 0 });
  };

  return (
    <div className={expand ? "sidebar expanded-sidebar" : "sidebar"}>
      <div
        className={`${icons_class} ${getClassName("Home")}`}
        onClick={() => handleClick(0, "Home")}
      >
        <img src={home_icon} alt={altImg} />
        Home
      </div>
      <div
        className={`${icons_class} ${getClassName("News")}`}
        onClick={() => handleClick(25, "News")}
      >
        <img src={news_icon} alt={altImg} />
        News
      </div>
      <div
        className={`${icons_class} ${getClassName("Sports")}`}
        onClick={() => handleClick(17, "Sports")}
      >
        <img src={sports_icon} alt={altImg} />
        <span>Sports</span>
      </div>
      <div
        className={`${icons_class} ${getClassName("Music")}`}
        onClick={() => handleClick(10, "Music")}
      >
        <img src={music_icon} alt={altImg} />
        <span>Music</span>
      </div>
      <div
        className={`${icons_class} ${getClassName("Gaming")}`}
        onClick={() => handleClick(20, "Gaming")}
      >
        <img src={gaming_icon} alt={altImg} />
        <span>Gaming</span>
      </div>
    </div>
  );
};
