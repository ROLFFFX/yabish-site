import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

// =============================================================================
// RELEASE DATA — add new entries here, most recent first
// =============================================================================
const releases = [
  {
    id: 1,
    title: "飞(FEY)1999",
    date: "JUL 04, 2025",
    cover:
      "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/f2d2d3de-9773-4b1f-0f04-11a65d25e400/public",
    links: [
      {
        label: "SPOTIFY",
        url: "https://open.spotify.com/artist/1fSNmkI8lKMFVMU2Y4hpgi?si=thjriNdTQfGEDfLL9y5_AA",
      },
      {
        label: "NETEASE",
        url: "https://music.163.com/#/artist?id=31511662",
      },
      {
        label: "APPLE MUSIC",
        url: "https://music.apple.com/cn/artist/99-god/1530452342",
      },
    ],
    tracks: [
      "沪(HU)Skit",
      "飞(FEY)1999",
      "Le Baron",
      "Pollen Allergy",
      "JOJO",
      "2223334445555",
      "Wigwam",
      "BACK TO YOU",
      "一团火(FIRE)",
    ],
  },

  // ---------------------------------------------------------------------------
  // TEMPLATE — copy/paste the block below for each new release
  // ---------------------------------------------------------------------------
  // {
  //   id: 2,
  //   title: "",
  //   date: "",                          // e.g. "MAR 15, 2025"
  //   cover: "",                         // Cloudflare image URL
  //   links: [
  //     { label: "SPOTIFY",     url: "" },
  //     { label: "NETEASE",     url: "" },
  //     { label: "APPLE MUSIC", url: "" },
  //     { label: "YOUTUBE",     url: "" },  // add/remove as needed
  //   ],
  //   tracks: [
  //     "Track 1",
  //     "Track 2",
  //   ],
  // },
];

// =============================================================================
// RELEASE SLOT
// =============================================================================
function ReleaseSlot({ data, isMobile }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "flex-start",
        gap: isMobile ? "1.5rem" : "2rem",
        width: "100%",
        marginBottom: "3.5rem",
      }}
    >
      {/* Cover art */}
      <Box
        component={motion.div}
        whileHover={{ scale: 1.02 }}
        sx={{
          width: isMobile ? "100%" : "300px",
          flexShrink: 0,
        }}
      >
        <img
          src={data.cover}
          alt={data.title}
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </Box>

      {/* Info */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          color: "white",
        }}
      >
        {/* Title */}
        <Typography
          sx={{
            fontFamily: "Anton, sans-serif",
            fontSize: isMobile ? "1.8rem" : "2.4rem",
            lineHeight: 0.95,
            textTransform: "uppercase",
            letterSpacing: "1px",
            marginBottom: "0.6rem",
          }}
        >
          {data.title}
        </Typography>

        {/* Date + streaming buttons */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderBottom: "2px solid white",
            paddingBottom: "0.6rem",
            marginBottom: "0.75rem",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Anton, sans-serif",
              fontSize: "0.9rem",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            {data.date}
          </Typography>

          <Box sx={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
            {data.links.map((link, idx) => (
              <Button
                key={idx}
                variant="outlined"
                onClick={() => window.open(link.url, "_blank")}
                sx={{
                  borderColor: "white",
                  color: "white",
                  fontFamily: "Anton, sans-serif",
                  fontSize: "11px",
                  padding: "2px 10px",
                  borderRadius: "0",
                  height: "24px",
                  letterSpacing: "1px",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "black",
                    borderColor: "white",
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        </Box>

        {/* Tracklist header */}
        <Typography
          sx={{
            fontFamily: "Anton, sans-serif",
            fontSize: "0.85rem",
            letterSpacing: "1px",
            textTransform: "uppercase",
            marginBottom: "0.2rem",
            color: "rgba(255,255,255,0.7)",
          }}
        >
          TRACKLIST ({data.tracks.length.toString().padStart(2, "0")})
        </Typography>

        {/* Tracklist rows */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            maxHeight: "180px",
            overflowY: "auto",
            "&::-webkit-scrollbar": { width: "4px" },
            "&::-webkit-scrollbar-track": {
              background: "rgba(255,255,255,0.08)",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "rgba(255,255,255,0.4)",
            },
          }}
        >
          {data.tracks.map((track, idx) => (
            <Box
              key={idx}
              sx={{
                display: "flex",
                paddingY: "0.25rem",
                borderBottom: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <Typography
                sx={{
                  width: "32px",
                  fontFamily: "Anton, sans-serif",
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.5)",
                  letterSpacing: "1px",
                  flexShrink: 0,
                }}
              >
                {(idx + 1).toString().padStart(2, "0")}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Anton, sans-serif",
                  fontSize: "0.8rem",
                  letterSpacing: "1px",
                }}
              >
                {track}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

// =============================================================================
// MAIN EXPORT
// =============================================================================
export default function GodReleasesView() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      {releases.map((release) => (
        <ReleaseSlot key={release.id} data={release} isMobile={isMobile} />
      ))}
    </Box>
  );
}
