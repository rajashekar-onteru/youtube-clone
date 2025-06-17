import Play_Video from "./Play_Video";
import "../Video/Video.scss";
import { Recommended } from "../Recommended/Recommended";
import { useParams } from "react-router-dom";
import { videosData } from "../Feed/FeedData";
import { VideoFallback } from "../../Fallbacks/Video_Fallback";
import { useApp } from "../../../ContextAPI/ContextProvider";

export const Video = () => {
  const { videoId } = useParams(); // ✅ Get ID from URL
  const item = videosData?.find((v) => v?.id?.toString() === videoId);
  const { expand } = useApp();
  return (
    <div
      className={expand ? "sidebar-expand play-container" : "play-container"}
    >
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
