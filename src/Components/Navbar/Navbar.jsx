import "../Navbar/Navbar.scss";
import app_text from "../../assets/navbar_logos/app_text.svg";
import app_logo from "../../assets/navbar_logos/app_logo.svg";
import hamburger_icon from "../../assets/navbar_logos/hamburger.svg";
import search_icon from "../../assets/navbar_logos/search_icon.svg";
import settings_icon from "../../assets/navbar_logos/settings_icon.svg";
import profile_icon from "../../assets/navbar_logos/profile_icon.svg";
import back_arrow from "../../assets/navbar_logos/back_arrow.svg";
import { altImg } from "../../assets/altImg.js";
import { Link } from "react-router-dom";
import { useApp } from "../../ContextAPI/ContextProvider.jsx";
import { useState } from "react";

export const Navbar = () => {
  const {
    expand,
    setExpand,
    isSearchOpen,
    setIsSearchOpen,
    category,
    setVideoId,
    videosData,
  } = useApp();
  const [suggestions, setSuggestions] = useState([]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    const filtered = videosData?.filter((video) =>
      video?.snippet?.title?.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(value ? filtered : []);
    console.log(filtered);
  };

  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func.apply(this, args); // ✅ Use apply to pass correct context and arguments
      }, delay);
    };
  };

  const debouncedHandleSearchChange = debounce(handleSearchChange, 300);
  return (
    <div className="navbar">
      <div className={`youtube-header ${isSearchOpen ? "search-active" : ""}`}>
        <div className="first-section">
          <img
            src={hamburger_icon}
            className="hamburger-menu"
            onClick={() => {
              setExpand(!expand);
            }}
            alt={altImg}
          />
          <Link to="/0">
            <img src={app_logo} className="youtube-icon" alt={altImg} />
            <img src={app_text} className="youtube-icon" alt={altImg} />
          </Link>
        </div>
        <div className="middle-section">
          {isSearchOpen && (
            <img
              onClick={() => setIsSearchOpen(false)}
              src={back_arrow}
              className="back-arrow"
              alt={altImg}
            />
          )}
          <div className="search-div">
            <input
              type="text"
              className="search-bar"
              placeholder="Search"
              onChange={debouncedHandleSearchChange}
            />
            <button
              className="search-icon"
              onClick={() => setIsSearchOpen(true)}
            >
              <img src={search_icon} alt={altImg} />
            </button>
            {/* <button className="mic-icon">
              <img src={mic_icon} alt={altImg} />
            </button> */}
            <div className="suggestions-list">
              {suggestions.length > 0 && (
                <ul style={{ paddingLeft: "10px" }}>
                  {suggestions.map((item) => (
                    <li
                      key={item.id}
                      className="suggestion-item"
                      onClick={() => {
                        setVideoId(item.id);
                        window.location.replace(
                          `/video/${category}/${item.id}`
                        ); // Reload the page to reset the search input
                        setIsSearchOpen(false);
                        setSuggestions([]);
                      }}
                    >
                      {item?.snippet?.title}
                    </li>
                  ))}
                </ul>
              )}{" "}
            </div>
          </div>
          {/* 🔽 Suggestions Dropdown */}
        </div>
        <div className="last-section">
          <div className="settings">
            <img
              src={settings_icon}
              style={{ cursor: "pointer", height: "20px" }}
              alt={altImg}
            />
          </div>
          <div className="profile-section">
            <img src={profile_icon} alt={altImg} />
            <a
              href="https://accounts.google.com/ServiceLogin?service=youtube"
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
