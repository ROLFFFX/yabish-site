import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { Box, IconButton, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

import video6 from "../../assets/godvideo/compressed_godvideo6.webm";
import video7 from "../../assets/godvideo/compressed_godvideo7.webm";

const videos = [
  { src: video6, title: "POLLEN ALLERGY" },
  { src: video7, title: "沪(HU) SKIT" },
];

// =============================================================================
// SINGLE VIDEO CARD
// =============================================================================
function VideoCard({ src, title, width = "100%" }) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Keep fullscreen icon in sync with actual browser state
  useEffect(() => {
    const onFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  const toggleSound = () => setMuted((m) => !m);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      videoRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <Box sx={{ width, display: "flex", flexDirection: "column" }}>
      {/* Title */}
      <Typography
        sx={{
          fontFamily: "Anton, sans-serif",
          fontSize: "1rem",
          letterSpacing: "2px",
          textTransform: "uppercase",
          color: "white",
          marginBottom: "0.4rem",
        }}
      >
        {title}
      </Typography>

      {/* Video + overlay wrapper */}
      <Box
        sx={{ position: "relative", lineHeight: 0 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <video
          ref={videoRef}
          src={src}
          autoPlay
          muted={muted}
          loop
          playsInline
          style={{ width: "100%", height: "auto", display: "block" }}
        />

        {/* Gradient + controls — fade in on hover */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "0.1rem",
            padding: "0.6rem 0.5rem 0.4rem",
            background:
              "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.25s ease",
            pointerEvents: hovered ? "auto" : "none",
          }}
        >
          {/* Muted label */}
          {muted && (
            <Typography
              sx={{
                fontFamily: "Anton, sans-serif",
                fontSize: "9px",
                letterSpacing: "1.5px",
                color: "rgba(255,255,255,0.6)",
                marginRight: "0.25rem",
                userSelect: "none",
              }}
            >
              MUTED
            </Typography>
          )}

          {/* Sound toggle */}
          <IconButton
            onClick={toggleSound}
            size="small"
            sx={{
              color: "white",
              padding: "4px",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.15)" },
            }}
          >
            {muted ? (
              <VolumeOffIcon sx={{ fontSize: 17 }} />
            ) : (
              <VolumeUpIcon sx={{ fontSize: 17 }} />
            )}
          </IconButton>

          {/* Fullscreen */}
          <IconButton
            onClick={toggleFullscreen}
            size="small"
            sx={{
              color: "white",
              padding: "4px",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.15)" },
            }}
          >
            {isFullscreen ? (
              <FullscreenExitIcon sx={{ fontSize: 17 }} />
            ) : (
              <FullscreenIcon sx={{ fontSize: 17 }} />
            )}
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

// =============================================================================
// MAIN EXPORT
// =============================================================================
export default function GodVideosView() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
        width: "100%",
      }}
    >
      {videos.map((video, index) => (
        <VideoCard
          key={index}
          src={video.src}
          title={video.title}
          width={isMobile ? "100%" : "60%"}
        />
      ))}
    </Box>
  );
}
