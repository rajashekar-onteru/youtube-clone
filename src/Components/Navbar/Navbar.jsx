import "../Navbar/Navbar.scss";
import youtube_icon from "../../assets/navbar_logos/youtube_logo.svg";
import hamburger_icon from "../../assets/navbar_logos/hamburger.svg";
import search_icon from "../../assets/navbar_logos/search_icon.svg";
import mic_icon from "../../assets/navbar_logos/mic_icon.svg";
import settings_icon from "../../assets/navbar_logos/settings_icon.svg";
import profile_icon from "../../assets/navbar_logos/profile_icon.svg";
import { altImg } from "../../assets/altImg.js";
import { Link } from "react-router-dom";

export const Navbar = ({ expand, setExpand }) => {
  return (
    <div className="navbar">
      <div className="youtube-header">
        <div className="first-section">
          <img
            src={hamburger_icon}
            className="hamburger-menu"
            onClick={() => {
              setExpand(!expand);
            }}
            alt={altImg}
          />
          <Link to="/">
            <img src={youtube_icon} className="youtube-icon" alt={altImg} />
          </Link>
        </div>
        <div className="middle-section">
          <div className="search-div">
            <input type="text" className="search-bar" placeholder="Search" />
            <button className="search-icon">
              <img src={search_icon} alt={altImg} />
            </button>
            <button className="mic-icon">
              <img src={mic_icon} alt={altImg} />
            </button>
          </div>
        </div>
        <div className="last-section">
          <div>
            <img
              src={settings_icon}
              style={{ cursor: "pointer" }}
              alt={altImg}
            />
          </div>
          <div className="profile-section">
            <img src={profile_icon} alt={altImg} />
            <a
              href="https://accounts.google.com/ServiceLogin?service=youtube&amp;uilel=3&amp;passive=true&amp;continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252Fresults%253Fsearch_query%253Dgst%252Bregistration&amp;hl=en&amp;ec=65620"
              rel="nofollow"
              className="sign-in-link"
            >
              Sign in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
