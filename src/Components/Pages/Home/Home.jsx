import { Navbar } from "../../Navbar/Navbar";
import { Sidebar } from "../../Sidebar/Sidebar";
import { Feed } from "../Feed/Feed";
import "../Home/Home.scss";
export const Home = () => {
  return (
    <div className="home">
      <Feed />
    </div>
  );
};
