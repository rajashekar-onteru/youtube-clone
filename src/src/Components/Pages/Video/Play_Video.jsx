import "../Video/Play_Video.scss";
import like from "../../../assets/play_video/like.svg";
import dislike from "../../../assets/play_video/dislike.svg";
import share from "../../../assets/play_video/share.svg";
import profile from "../../../assets/play_video/profile.jpg";

import { altImg } from "../../../assets/altImg.js";
import { videosData } from "../Feed/FeedData.js";

const Play_Video = ({ videoId }) => {
  const item = videosData.find((v) => v?.id?.toString() === videoId);

  if (!item) return <div>Video not found</div>;

  return (
    <div className="play-video">
      <div className="video-section">
        <video className="video-class" controls autoPlay src={item?.video} />
        <h2>{item.title}</h2>
        <div className="play-video-info">
          <p>
            {item.views} &nbsp; &bull; {item.age}
          </p>
          <div>
            <span>
              <img src={like} alt={altImg} />
              1499
            </span>
            <span>
              <img src={dislike} alt={altImg} />
              14
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
          src={item.logo || profile}
          className="publisher_img"
          alt={altImg}
        />
        <div>
          <p>{item.channel || "Rajasekhar O"}</p>
          <span>1M&nbsp; Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="video-description">
        <p>
          Explore the wild like never before — where every frame tells a story.
        </p>
        <p>
          Subscribe {item.channel || "our"} for breathtaking wildlife adventures
          and unforgettable moments ....
        </p>
      </div>
    </div>
  );
};

export default Play_Video;
