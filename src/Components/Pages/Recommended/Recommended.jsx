import { VideoCard } from "../Feed/VideoCard";
import "../Feed/Feed.scss";
import "../Video/Video.scss";
import { useApp } from "../../../ContextAPI/ContextProvider";
export const Recommended = () => {
  const { expand } = useApp();
  return (
    <div
      className={
        expand ? "video-on-expand-sidebar scroll-container" : "scroll-container"
      }
    >
      <VideoCard />
    </div>
  );
};
