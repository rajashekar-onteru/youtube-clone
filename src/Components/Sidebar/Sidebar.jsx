import "../Sidebar/Sidebar.scss";
import shorts from "../../assets/sidebar_icons/shorts.svg";
import home_icon from "../../assets/sidebar_icons/home_icon.svg";
import subscriptions_icon from "../../assets/sidebar_icons/subscriptions_icon.svg";
import your_info_icon from "../../assets/sidebar_icons/your_info_icon.svg";
import downloads_icon from "../../assets/sidebar_icons/downloads_icon.svg";
import { altImg } from "../../assets/altImg.js";
import { useApp } from "../../ContextAPI/ContextProvider.jsx";
import { Link } from "react-router-dom";
export const Sidebar = () => {
  const { expand } = useApp();
  const icons_class = expand ? "expanded-sidebar-icons" : "sidebar-icons";
  return (
    <div className={expand ? "sidebar expanded-sidebar" : "sidebar"}>
      <Link to="/" className="your-info-icon">
        <div className={icons_class}>
          <img src={home_icon} alt={altImg} />
          Home
        </div>
      </Link>
      <div className={icons_class}>
        <img src={shorts} alt={altImg} />
        <span>Shorts</span>
      </div>
      <div className={icons_class}>
        <img src={subscriptions_icon} alt={altImg} />
        <span>Subscriptions</span>
      </div>
      <a
        href="https://accounts.google.com/ServiceLogin?service=youtube&amp;uilel=3&amp;passive=true&amp;continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252Fresults%253Fsearch_query%253Dgst%252Bregistration&amp;hl=en&amp;ec=65620"
        rel="nofollow"
        className="your-info-icon"
      >
        <div className={icons_class}>
          <img src={your_info_icon} alt={altImg} />
          You
        </div>
      </a>
      <div className={icons_class}>
        <img src={downloads_icon} alt={altImg} />
        <span>Downloads</span>
      </div>
    </div>
  );
};
