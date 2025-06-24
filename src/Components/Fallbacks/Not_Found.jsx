import React from "react";
import { Link } from "react-router-dom";
import "./Not_Found.scss";

export const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1>🚫 404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/Home/0" className="back-home">
        🏠 Back to Home
      </Link>
    </div>
  );
};
