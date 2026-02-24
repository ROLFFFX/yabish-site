import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

// =============================================================================
// RELEASE DATA — add new entries here, most recent first
// =============================================================================
const releases = [
  {
    id: 1,
    title: "JUNGLE +",
    date: "NOV 13, 2025",
    cover:
      "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/5a345212-4151-43c9-2478-a5eaf4d78500/public",
    links: [
      {
        label: "SPOTIFY",
        url: "https://open.spotify.com/album/07Mny5tM3oXYRu2wDszOua?si=hvjroDC8QAuQ1G-s7osNvw",
      },
      {
        label: "NETEASE",
        url: "https://music.163.com/album?id=350275622&userid=95505343",
      },
    ],
    tracks: [
      "sa ye",
      "save your face",
      "ye huo",
      "cumbia",
      "kidnap",
      "how2dj",
      "rain rain",
      "die 4 / live 4",
      "iu",
      "music n me",
      "gn n go",
    ],
  },

  {
    id: 2,
    title: "¡2busy4u! Jungle Rage *LP",
    date: "FEB 2024",
    cover:
      "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/8eb3ae31-5b92-430c-5a6a-e3ce37318700/public",
    links: [
      {
        label: "SPOTIFY",
        url: "https://open.spotify.com/album/115vM5wpmT04GbCKjV124l?si=5zgthueDQBC-G4swDYRJpw",
      },
      {
        label: "APPLE MUSIC",
        url: "https://music.apple.com/cn/album/2busy4u-jungle-rage-lp/1730415177?l=en-GB",
      },
      {
        label: "NETEASE",
        url: "https://music.163.com/album?id=184937854&userid=95505343",
      },
    ],
    tracks: [
      "我從山中來*PROJECT1: JUNGLE RAGE",
      "鉻*EVERYTHING CHROME",
      "我認不出你*PEW< CANT RECOGNIZE YOU",
      "雲端上*ABOVE THE CLOUDS FREESTYLE",
      "今天沒回家*SHANGHAIED",
      "舊相識*SHE AN OLD FRIEND< COME OVER",
      "高橋盾*UNDERCOVER",
      "蘇州河*SUZHOU RIVER",
      "海底兩萬里_間奏*NEMO INTERLUDE",
      "愚人節*STOOOOPID FREESTYLE + 暫停布魯克林*TIMEOUT BROOKLYN",
      "里約熱內盧*RIO",
      "一種方式*A WAY< FAR AWAY",
      "聽著王菲我飄浮在空中*FAYE WONG< IM FLOATING",
      "痤疮工作室*ACNE< ACNE STUDIOS",
      "滿意退場*¿SATISFIED?",
    ],
  },

  // ---------------------------------------------------------------------------
  // TEMPLATE — copy/paste the block below for each new release
  // ---------------------------------------------------------------------------
  // {
  //   id: 3,
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
export default function YakaReleasesView() {
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
