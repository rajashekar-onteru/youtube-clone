import { useNavigate, useParams } from "react-router-dom";
import { altImg } from "../../../assets/altImg";
import { useApp } from "../../../ContextAPI/ContextProvider";
import { fetchVideosData, valueConvertor } from "../../../apiData";
import moment from "moment-timezone";
import { useEffect } from "react";
import { FallBackScreen } from "../../Fallbacks/ErrorBoundary";
export const VideoCard = () => {
  const { categoryId = 0, tab = "Home" } = useParams();
  const {
    loading,
    setLoading,
    setVideoId,
    videosData,
    setVideosData,
    setCategoryId,
    setTab,
  } = useApp();
  const navigate = useNavigate();
  const { setExpand } = useApp();

  const handleClick = (id, categoryId) => {
    setLoading(true);
    setTimeout(() => {
      window.scrollTo({ top: 0 });
      setExpand(true);
      setVideoId(id);
      navigate(`/${tab}/video/${categoryId}/${id}`);
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    setCategoryId(parseInt(categoryId));
    setTab(tab);
    fetchVideosData(categoryId, setLoading, setVideosData);
  }, [categoryId]);

  return (
    <>
      {loading ? (
        <div className="video-loading-overlay">
          <div className="video-dots-loader">
            <div className="video-dot"></div>
            <div className="video-dot"></div>
            <div className="video-dot"></div>
          </div>
        </div>
      ) : loading !== true && videosData?.length === 0 ? (
        <FallBackScreen />
      ) : (
        <></>
      )}
      {videosData?.map((video) => (
        <div className="video-container" key={video.id}>
          <div
            className="video-classname"
            onClick={() => handleClick(video?.id, video?.snippet?.categoryId)}
          >
            <div className="thumbnail-class">
              <img
                className="thumbnails"
                src={video?.snippet?.thumbnails?.medium?.url}
                alt={altImg}
              />
              <div className="overlay">
                <div className="play-icon">▶</div>
                <div className="play-text">Play</div>
              </div>
            </div>
            <span className="video-duration">{video.duration}</span>
          </div>
          <div className="video-description">
            <img
              className="channel_image"
              src={video?.snippet?.thumbnails?.default?.url}
              alt={altImg}
            />
            <div className="video-content">
              <p className="video-title">{video?.snippet?.title}</p>
              <div className="video-views">
                <p className="channel">{video?.snippet?.channelTitle}</p>
                <div style={{ display: "flex", gap: "5px" }}>
                  <p>{valueConvertor(video?.statistics?.viewCount)} views</p>
                  <p className="video-age">
                    {moment(video?.snippet?.publishedAt).fromNow()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
