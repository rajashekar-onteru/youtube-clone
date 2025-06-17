import "../Feed/Feed.scss";
import { VideoCard } from "./VideoCard";
export const Feed = ({ expand }) => {
  return (
    <div
      className={
        expand ? "sidebar-expand scroll-container" : "scroll-container"
      }
    >
      <VideoCard />
    </div>
  );
};
