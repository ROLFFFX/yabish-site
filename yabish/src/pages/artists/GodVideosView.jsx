import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

import video6 from "../../assets/godvideo/compressed_godvideo6.webm";
import video7 from "../../assets/godvideo/compressed_godvideo7.webm";

const videos = [video6, video7];

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
        flexDirection: isMobile ? "column" : "row",
        gap: "1rem",
        width: "100%",
      }}
    >
      {videos.map((src, index) => (
        <Box key={index} sx={{ flex: 1 }}>
          <video
            src={src}
            autoPlay
            muted
            loop
            playsInline
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </Box>
      ))}
    </Box>
  );
}
