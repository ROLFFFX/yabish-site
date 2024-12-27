import React from "react";
import testVideo from "../assets/pics/yakabgvid.webm"; // Replace with the path to your video file

export default function Test() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <video
        src={testVideo}
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: "80%", // Adjust as needed
          height: "auto", // Maintain aspect ratio
          backgroundColor: "black",
          border: "2px solid white",
        }}
        onError={(e) => console.error("Video Load Error:", e)}
        onLoadedMetadata={() => console.log("Video Loaded Successfully")}
      >
        <p style={{ color: "white" }}>
          Your browser does not support the video tag.
        </p>
      </video>
    </div>
  );
}
