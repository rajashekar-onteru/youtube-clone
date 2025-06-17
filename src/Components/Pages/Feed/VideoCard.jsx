import { videosData } from "./FeedData";
import { altImg } from "../../../assets/altImg";
import { Link } from "react-router-dom";
export const VideoCard = () => {
  return (
    <>
      {videosData.map((video) => (
        <div className="video-container" key={video.id}>
          <Link className="video-classname" to={`/video/${video.id}`}>
            <div className="thumbnail-class">
              <img className="thumbnails" src={video.image} alt={altImg} />
              <div className="overlay">
                <div className="play-icon">▶</div>
                <div className="play-text">Play</div>
              </div>
            </div>
            <span className="video-duration">{video.duration}</span>
          </Link>
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
