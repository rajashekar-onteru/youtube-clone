import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { videosData } from "./FeedData";
import { altImg } from "../../../assets/altImg";
import { useApp } from "../../../ContextAPI/ContextProvider";
export const VideoCard = () => {
  const { loading, setLoading } = useApp();
  const navigate = useNavigate();

  const handleClick = (videoId) => {
    setLoading(true);
    setTimeout(() => {
      window.scrollTo({ top: 0 });
      navigate(`/video/${videoId}`);
      setLoading(false);
    }, 500);
  };

  return (
    <>
      {loading && (
        <div className="video-loading-overlay">
          <div className="video-dots-loader">
            <div className="video-dot"></div>
            <div className="video-dot"></div>
            <div className="video-dot"></div>
          </div>
        </div>
      )}
      {videosData.map((video) => (
        <div className="video-container" key={video.id}>
          <div
            className="video-classname"
            onClick={() => handleClick(video.id)}
          >
            <div className="thumbnail-class">
              <img className="thumbnails" src={video.image} alt={altImg} />
              <div className="overlay">
                <div className="play-icon">▶</div>
                <div className="play-text">Play</div>
              </div>
            </div>
            <span className="video-duration">{video.duration}</span>
          </div>
          <div className="video-description">
            <img className="channel_image" src={video.logo} alt={altImg} />
            <div className="video-content">
              <p className="video-title">{video.title}</p>
              <p className="channel">{video.channel}</p>
              <div className="vedio-views">
                <p>{video.views}</p>
                <p className="video-age">{video.age}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
