import { createContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Components/Pages/Home/Home";
import { Video } from "./Components/Pages/Video/VideoPage";
import { NotFound } from "./Components/Fallbacks/Not_Found";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import ErrorBoundary from "./Components/Fallbacks/ErrorBoundary";
export const AppContext = createContext();

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:tab/:categoryId" element={<Home />} />
          <Route path="/:tab/video/:categoryId/:videoId" element={<Video />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
