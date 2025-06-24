import "../Navbar/Navbar.scss";
import app_text from "../../assets/navbar_logos/app_text.svg";
import app_logo from "../../assets/navbar_logos/app_logo.svg";
import hamburger_icon from "../../assets/navbar_logos/hamburger.svg";
import search_icon from "../../assets/navbar_logos/search_icon.svg";
import profile_icon from "../../assets/navbar_logos/profile_icon.svg";
import back_arrow from "../../assets/navbar_logos/back_arrow.svg";
import { altImg } from "../../assets/altImg.js";
import { Link } from "react-router-dom";
import { useApp } from "../../ContextAPI/ContextProvider.jsx";
import { useEffect, useState } from "react";
import { useDebounce } from "../../apiData.js";

export const Navbar = () => {
  const {
    expand,
    setExpand,
    isSearchOpen,
    setIsSearchOpen,
    setVideoId,
    tab,
    videosData,
  } = useApp();
  const [suggestions, setSuggestions] = useState([]);
  const [searchValue, setSearchValue] = useState();

  const handleSearchChange = (e) => {
    const value = e.target.value;
    dispatchSearchDebounce(value);
  };

  const dispatchSearchDebounce = useDebounce((value) => {
    setSearchValue(value);
  }, 500);

  useEffect(() => {
    const filtered = videosData?.filter((video) =>
      video?.snippet?.title?.toLowerCase().includes(searchValue?.toLowerCase())
    );
    setSuggestions(searchValue ? filtered : []);
    // fetchVideosBySearch(searchValue, setSuggestions);
  }, [searchValue]);
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
          <Link to={`/Home/0`}>
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
              onChange={handleSearchChange}
            />
            <button
              className="search-icon"
              onClick={() => setIsSearchOpen(true)}
            >
              <img src={search_icon} alt={altImg} />
            </button>
            <div className="suggestions-list">
              {suggestions?.length > 0 && (
                <ul style={{ paddingLeft: "10px" }}>
                  {suggestions?.map((item) => (
                    <li
                      key={item.id}
                      className="suggestion-item"
                      onClick={() => {
                        setVideoId(item.id);
                        window.location.replace(
                          `/${tab}/video/${item?.snippet?.categoryId}/${item.id}`
                        ); // Reload the page to reset the search input
                        setIsSearchOpen(false);
                        setSuggestions([]);
                        setSearchValue();
                      }}
                    >
                      {item?.snippet?.title}
                    </li>
                  ))}
                </ul>
              )}{" "}
            </div>
          </div>
        </div>
        <div className="last-section">
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
