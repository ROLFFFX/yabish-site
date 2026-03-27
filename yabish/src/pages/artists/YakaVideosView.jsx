import { Box, Typography } from "@mui/material";
import React from "react";

// =============================================================================
// Placeholder — add video imports + VideoCard components here when ready
// (follow the same pattern as GodVideosView.jsx)
// =============================================================================
export default function YakaVideosView() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "120px",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Anton, sans-serif",
          fontSize: "1rem",
          letterSpacing: "3px",
          color: "rgba(255,255,255,0.3)",
          textTransform: "uppercase",
        }}
      >
        COMING SOON
      </Typography>
    </Box>
  );
}
