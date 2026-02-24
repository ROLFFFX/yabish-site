import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { Box, IconButton, Slider, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

import video6 from "../../assets/godvideo/compressed_godvideo6.webm";
import video7 from "../../assets/godvideo/compressed_godvideo7.webm";

// previewTime: seconds into the video to use as the still thumbnail
const videos = [
  { src: video6, title: "POLLEN ALLERGY", previewTime: 4 },
  { src: video7, title: "沪(HU) SKIT", previewTime: 3 },
];

// =============================================================================
// SINGLE VIDEO CARD
// =============================================================================
function VideoCard({ src, title, previewTime = 2, width = "100%" }) {
  const videoRef = useRef(null);
  const seekingRef = useRef(false); // prevent timeupdate from fighting drag

  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // 0–100
  const [muted, setMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Seek to preview frame once metadata is ready (shows a still instead of black)
  const handleLoadedMetadata = () => {
    const v = videoRef.current;
    if (v) v.currentTime = previewTime;
  };

  // Sync fullscreen icon with browser state
  useEffect(() => {
    const onFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  // Keep playing state in sync if video ends (loop is off)
  const handleVideoPlay = () => setPlaying(true);
  const handleVideoPause = () => setPlaying(false);

  const handleTimeUpdate = () => {
    if (seekingRef.current) return;
    const v = videoRef.current;
    if (v && v.duration) setProgress((v.currentTime / v.duration) * 100);
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    playing ? v.pause() : v.play();
  };

  const toggleSound = () => setMuted((m) => !m);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      videoRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const handleSliderChange = (_, value) => {
    seekingRef.current = true;
    setProgress(value);
    const v = videoRef.current;
    if (v && v.duration) v.currentTime = (value / 100) * v.duration;
  };

  const handleSliderChangeCommitted = () => {
    seekingRef.current = false;
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
          muted={muted}
          loop
          playsInline
          onLoadedMetadata={handleLoadedMetadata}
          onPlay={handleVideoPlay}
          onPause={handleVideoPause}
          onTimeUpdate={handleTimeUpdate}
          style={{ width: "100%", height: "auto", display: "block" }}
        />

        {/* Controls bar — always slightly visible, full on hover */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            display: "flex",
            alignItems: "center",
            gap: "0.1rem",
            padding: "1.2rem 0.5rem 0.35rem",
            background:
              "linear-gradient(to top, rgba(0,0,0,0.82) 0%, transparent 100%)",
            opacity: hovered ? 1 : 0.35,
            transition: "opacity 0.25s ease",
          }}
        >
          {/* Play / Pause */}
          <IconButton
            onClick={togglePlay}
            size="small"
            sx={{
              color: "white",
              padding: "3px",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.15)" },
            }}
          >
            {playing ? (
              <PauseIcon sx={{ fontSize: 17 }} />
            ) : (
              <PlayArrowIcon sx={{ fontSize: 17 }} />
            )}
          </IconButton>

          {/* Progress slider */}
          <Slider
            size="small"
            value={progress}
            onChange={handleSliderChange}
            onChangeCommitted={handleSliderChangeCommitted}
            sx={{
              flex: 1,
              mx: "0.3rem",
              color: "white",
              height: 2,
              padding: "10px 0",
              "& .MuiSlider-thumb": {
                width: 10,
                height: 10,
                transition: "none",
                "&:hover, &.Mui-focusVisible": {
                  boxShadow: "0 0 0 6px rgba(255,255,255,0.16)",
                },
              },
              "& .MuiSlider-track": { border: "none", transition: "none" },
              "& .MuiSlider-rail": { opacity: 0.35 },
            }}
          />

          {/* Muted label */}
          {muted && (
            <Typography
              sx={{
                fontFamily: "Anton, sans-serif",
                fontSize: "8px",
                letterSpacing: "1.5px",
                color: "rgba(255,255,255,0.55)",
                userSelect: "none",
                mr: "0.15rem",
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
              padding: "3px",
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
              padding: "3px",
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
          previewTime={video.previewTime}
          width={isMobile ? "100%" : "60%"}
        />
      ))}
    </Box>
  );
}
