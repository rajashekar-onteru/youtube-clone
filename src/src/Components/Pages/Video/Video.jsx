import Play_Video from "./Play_Video";
import "../Video/Video.scss";
import { Recommended } from "../Recommended/Recommended";
import { useParams } from "react-router-dom";
import { videosData } from "../Feed/FeedData";
import { VideoFallback } from "../../Fallbacks/Video_Fallback";

export const Video = () => {
  const { videoId } = useParams(); // ✅ Get ID from URL
  const item = videosData?.find((v) => v?.id?.toString() === videoId);
  return (
    <div className="play-container">
      {item ? (
        <>
          <Play_Video videoId={videoId} />
          <Recommended />
        </>
      ) : (
        <VideoFallback />
      )}
    </div>
  );
};
