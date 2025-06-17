import { Navbar } from "../../Navbar/Navbar";
import { Sidebar } from "../../Sidebar/Sidebar";
import { Feed } from "../Feed/Feed";
import "../Home/Home.scss";
export const Home = ({ expand, setExpand }) => {
  return (
    <div className="home">
      <Sidebar expand={expand} />
      <Feed expand={expand} />
    </div>
  );
};
