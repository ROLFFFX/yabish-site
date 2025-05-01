import React from "react";
import bgvideo from "../assets/bgvideo.webm";

const BGVideo = () => {
  return (
    <video
      src={bgvideo}
      autoPlay
      muted
      loop
      playsInline
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: 0,
      }}
    />
  );
};

export default BGVideo;
