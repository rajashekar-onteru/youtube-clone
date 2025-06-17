import { useApp } from "../../../ContextAPI/ContextProvider";
import "../Feed/Feed.scss";
import { VideoCard } from "./VideoCard";
export const Feed = () => {
  const { expand } = useApp();
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
