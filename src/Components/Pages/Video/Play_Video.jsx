import "../Video/Play_Video.scss";
import like from "../../../assets/play_video/like.svg";
import dislike from "../../../assets/play_video/dislike.svg";
import share from "../../../assets/play_video/share.svg";

import { altImg } from "../../../assets/altImg.js";
import { useApp } from "../../../ContextAPI/ContextProvider.jsx";
import { useEffect, useState } from "react";
import ExpandableText, {
  fetchChannelInfo,
  fetchVideoById,
  valueConvertor,
} from "../../../apiData.js";
import { useParams } from "react-router-dom";
import moment from "moment-timezone";

const Play_Video = () => {
  const { categoryId, videoId } = useParams();
  const { isSearchOpen, setIsSearchOpen, setCategory } = useApp();
  const [videoInfo, setVideoInfo] = useState({});
  const [channelInfo, setChannelInfo] = useState();

  useEffect(() => {
    setCategory(parseInt(categoryId));
    fetchVideoById(videoId, setVideoInfo);
    return () => {
      setIsSearchOpen(false);
    };
  }, [videoId]);

  useEffect(() => {
    fetchChannelInfo(setChannelInfo, videoInfo);
  }, [videoInfo]);

  return (
    <div
      className={`play-video ${
        isSearchOpen ? "play-video-on-search-active" : ""
      }`}
    >
      <div className="video-section">
        <iframe
          className="video-class"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <h2>{videoInfo?.snippet?.title}</h2>
        <div className="play-video-info">
          <p>
            {valueConvertor(videoInfo?.statistics?.viewCount)} views &bull;{" "}
            {moment(videoInfo?.snippet?.publishedAt).fromNow()}
          </p>
          <div className="play-video-actions">
            <span>
              <img src={like} alt={altImg} />
              {valueConvertor(videoInfo?.statistics?.likeCount)}
            </span>
            <span>
              <img src={dislike} alt={altImg} />
              {videoInfo?.statistics?.favoriteCount}
            </span>
            <span>
              <img src={share} alt={altImg} />
              Share
            </span>
          </div>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img
          src={
            channelInfo
              ? channelInfo?.snippet?.thumbnails?.medium?.url
              : videoInfo?.snippet?.thumbnails?.medium?.url
          }
          className="publisher_img"
          alt={altImg}
        />
        <div>
          <p>{videoInfo?.snippet?.channelTitle}</p>
          <span>
            {valueConvertor(channelInfo?.statistics?.subscriberCount) || "1M"}
            &nbsp; Subscribers
          </span>
        </div>
        <button className="subscribe">Subscribe</button>
      </div>
      <div className="video-description">
        <ExpandableText text={videoInfo?.snippet?.description} />
      </div>
    </div>
  );
};

export default Play_Video;
