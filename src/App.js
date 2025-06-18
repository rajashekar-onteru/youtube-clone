import { createContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Components/Pages/Home/Home";
import { Video } from "./Components/Pages/Video/Video";
import { VideoFallback } from "./Components/Fallbacks/Video_Fallback";
import { NotFound } from "./Components/Fallbacks/Not_Found";
import { Sidebar } from "./Components/Sidebar/Sidebar";
export const AppContext = createContext();

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:videoId" element={<Video />} />
        <Route path="/video" element={<VideoFallback />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
