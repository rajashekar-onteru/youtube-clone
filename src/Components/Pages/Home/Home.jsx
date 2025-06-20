import "../Home/Home.scss";
import "../Feed/Feed.scss";
import { useApp } from "../../../ContextAPI/ContextProvider";
import { VideoCard } from "../Feed/VideoCard";
export const Home = () => {
  const { expand } = useApp();
  return (
    <div className="home">
      <div
        className={
          expand ? "sidebar-expand scroll-container" : "scroll-container"
        }
      >
        <VideoCard />
      </div>
    </div>
  );
};
