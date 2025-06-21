import "../Sidebar/Sidebar.scss";
import home_icon from "../../assets/sidebar_icons/home_icon.svg";
import sports_icon from "../../assets/sidebar_icons/sports_icon.svg";
import music_icon from "../../assets/sidebar_icons/music_icon.svg";
import news_icon from "../../assets/sidebar_icons/news_icon.svg";
import gaming_icon from "../../assets/sidebar_icons/gaming_icon.svg";
import { altImg } from "../../assets/altImg.js";
import { useApp } from "../../ContextAPI/ContextProvider.jsx";
import { Link, useNavigate, useParams } from "react-router-dom";

export const Sidebar = () => {
  const { expand, category, setCategory } = useApp();
  const icons_class = expand
    ? "expanded-sidebar-icons sidebar-icons"
    : "sidebar-icons";

  const navigate = useNavigate();
  const getClassName = (id) => {
    return category === id ? "sidebar-active" : "";
  };

  const handleClick = (category) => {
    setCategory(category);
    navigate(`/${category}`);
    window.scrollTo({ top: 0 });
  };

  return (
    <div className={expand ? "sidebar expanded-sidebar" : "sidebar"}>
      <div
        className={`${icons_class} ${getClassName(0)}`}
        onClick={() => handleClick(0)}
      >
        <img src={home_icon} alt={altImg} />
        Home
      </div>
      <div
        className={`${icons_class} ${getClassName(25)}`}
        onClick={() => handleClick(25)}
      >
        <img src={news_icon} alt={altImg} />
        News
      </div>
      <div
        className={`${icons_class} ${getClassName(17)}`}
        onClick={() => handleClick(17)}
      >
        <img src={sports_icon} alt={altImg} />
        <span>Sports</span>
      </div>
      <div
        className={`${icons_class} ${getClassName(10)}`}
        onClick={() => handleClick(10)}
      >
        <img src={music_icon} alt={altImg} />
        <span>Music</span>
      </div>
      <div
        className={`${icons_class} ${getClassName(20)}`}
        onClick={() => handleClick(20)}
      >
        <img src={gaming_icon} alt={altImg} />
        <span>Gaming</span>
      </div>
    </div>
  );
};
