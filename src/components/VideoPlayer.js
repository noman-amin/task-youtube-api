import React from "react";
import "./Videoplayer.css";

const Videoplayer = ({ videoId }) => {
  if (!videoId) {
    return (
      <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}>
        Please Search a video :)
      </p>
    );
  }
  return (
    <iframe
      title={videoId}
      className="video-iframe"
      src={`https://www.youtube.com/embed/${videoId}`}
    />
  );
};

export default Videoplayer;
