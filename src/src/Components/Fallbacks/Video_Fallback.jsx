import React from "react";
import "./Video_Fallback.scss";
import { Link } from "react-router-dom";

export const VideoFallback = () => {
  return (
    <div className="fallback-container">
      <h1>🎬 Oops! No Video Selected</h1>
      <p>Please select a video from the homepage to start watching.</p>
      <Link to="/" className="back-home">
        🏠 Back to Home
      </Link>
    </div>
  );
};
