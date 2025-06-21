import Play_Video from "./Play_Video";
import "../Video/Video.scss";
import { Recommended } from "../Recommended/Recommended";
import { useApp } from "../../../ContextAPI/ContextProvider";

export const Video = () => {
  const { expand } = useApp();
  return (
    <div
      className={
        expand
          ? "play-container-on-expand-sidebar play-container"
          : "play-container"
      }
    >
      <>
        <Play_Video />
        <Recommended />
      </>
    </div>
  );
};
