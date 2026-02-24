import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { useRef } from "react";
import TopBarMobile from "../../utils/TopBarMobile";
import TopLeft from "../../utils/TopLeft";
// import BGVideo from "../BGVideo"; // Ensure this path is correct if you use it

// --- Placeholder Images ---
const releasesData = [
  {
    id: 1,
    artist: "破地獄Scattered Purgatory",
    title: "無奈",
    date: "DEC 08, 2025",
    cover:
      "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/3c94813f-17d5-492b-9c84-183c655e7200/public",
    links: [{ label: "NETEASE", url: "https://music.163.com/" }],
    tracks: ["無奈"],
  },
  {
    id: 2,
    artist: "Yaka",
    title: "JUNGLE +",
    date: "NOV 13, 2025",
    cover:
      "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/5a345212-4151-43c9-2478-a5eaf4d78500/public",
    links: [
      { label: "SPOTIFY", url: "https://spotify.com" },
      { label: "NETEASE", url: "https://music.163.com/" },
      { label: "APPLE MUSIC", url: "https://music.apple.com" },
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
    id: 3,
    artist: "破地獄Scattered Purgatory",
    title: "DIASPORA",
    date: "NOV 11, 2025",
    cover:
      "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/82fd3277-caca-44f5-f37a-b1404cd18a00/public",
    links: [{ label: "NETEASE", url: "https://music.163.com/" }],
    tracks: ["Diaspora"],
  },
  {
    id: 4,
    artist: "99 God",
    title: "飞(FEY)1999",
    date: "JUL 04, 2025",
    cover:
      "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/f2d2d3de-9773-4b1f-0f04-11a65d25e400/public",
    links: [
      { label: "SPOTIFY", url: "https://spotify.com" },
      { label: "NETEASE", url: "https://music.163.com/" },
      { label: "APPLE MUSIC", url: "https://music.apple.com" },
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
  {
    id: 5,
    artist: "Rain Dogs",
    title: "HIGH SPEED",
    date: "JUN 24, 2025",
    cover:
      "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/f16a7684-0b12-4b9a-fbc0-e7644fc55f00/public",
    links: [{ label: "NETEASE", url: "https://music.163.com/" }],
    tracks: ["High Speed"],
  },
  {
    id: 6,
    artist: "Rain Dogs",
    title: "DISINTEGRATE",
    date: "APR 23, 2025",
    cover:
      "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/70dd2a52-6b8f-4ad4-ae19-fe23b7d1c600/public",
    links: [{ label: "NETEASE", url: "https://music.163.com/" }],
    tracks: ["Disintegrate"],
  },
  {
    id: 7,
    artist: "99 God",
    title: "BODEGA (feat.PAIN)(Remix)",
    date: "MAR 15, 2025",
    cover:
      "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/af8f7544-1de3-448e-0e94-198def770400/public",
    links: [
      { label: "SPOTIFY", url: "https://spotify.com" },
      { label: "APPLE MUSIC", url: "https://music.apple.com" },
    ],
    tracks: ["Bodega(feat.PAIN)(Remix)"],
  },
  {
    id: 8,
    artist: "Rain Dogs",
    title: "MORE THAN DESIRE",
    date: "AUG 03, 2023",
    cover:
      "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/93422ebb-4b72-4f25-4036-53e8901d5200/public",
    links: [{ label: "NETEASE", url: "https://music.163.com/" }],
    tracks: ["More Than Desire"],
  },
  {
    id: 9,
    artist: "Rain Dogs",
    title: "NIGHTS ARE LONELY",
    date: "FEB 10, 2023",
    cover:
      "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/7585b422-8cc0-4727-21db-b3e5fec70100/public",
    links: [{ label: "NETEASE", url: "https://music.163.com/" }],
    tracks: ["Nights Are Lonely"],
  },
  {
    id: 10,
    artist: "Rain Dogs",
    title: "RAIN DOGS",
    date: "JAN 27, 2021",
    cover:
      "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/459c0c0e-ab70-4da5-80de-9b862057eb00/public",
    links: [{ label: "NETEASE", url: "https://music.163.com/" }],
    tracks: [
      "Perilous Woman",
      "Catacomb Eyes",
      "Venus In Furs",
      "Sanguino",
      "Italy",
    ],
  },
];

// #######################################################################
// 1. RELEASE SLOT
// #######################################################################
function ReleaseSlot({ data }) {
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        // CHANGED: Aligns items to the top (text aligned with top of cover)
        alignItems: "flex-start",
        justifyContent: "center",
        // CHANGED: Reduced gap slightly for tighter feel
        gap: isMobile ? "2rem" : "2.5rem",
        width: isMobile ? "80%" : "70%",
        maxWidth: "1300px",
        // CHANGED: Reduced margin bottom to fit more on screen
        marginBottom: "3.5rem",
      }}
    >
      {/* --- LEFT: Album Art --- */}
      <Box
        component={motion.div}
        whileHover={{ scale: 1.02 }}
        sx={{
          // CHANGED: Reduced width from 300px to 240px for desktop
          width: isMobile ? "100%" : "240px",
          maxWidth: "300px",
          flexShrink: 0,
          margin: isMobile ? "0 auto" : 0,
        }}
      >
        <img
          src={data.cover}
          alt={data.title}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </Box>

      {/* --- RIGHT: Info & Details --- */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          color: "white",
          width: "100%",
          // CHANGED: Added slight padding top if image needs offset, or keep 0 for strict top alignment
          paddingTop: isMobile ? "0" : "0",
        }}
      >
        {/* 1. Artist Name (Anton) */}
        <Typography
          sx={{
            fontFamily: "Anton, sans-serif",
            // CHANGED: Reduced font size (was 2rem)
            fontSize: isMobile ? "1.2rem" : "1.4rem",
            lineHeight: 1,
            textTransform: "uppercase",
            marginBottom: "0.25rem",
            color: "rgba(255,255,255,0.8)",
            letterSpacing: "1px",
          }}
        >
          {data.artist}
        </Typography>

        {/* 2. Album Title (Anton) */}
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Anton, sans-serif",
            textTransform: "uppercase",
            color: "white",
            // CHANGED: Reduced font size (was 3.5rem)
            fontSize: isMobile ? "2rem" : "2.8rem",
            lineHeight: 0.9,
            marginBottom: "0.75rem",
            cursor: "default",
            letterSpacing: "1px",
          }}
        >
          {data.title}
        </Typography>

        {/* 3. Meta Row: Date (Left) | Buttons (Right) */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: "1rem", // Reduced from 1.5rem
            borderBottom: "2px solid white",
            paddingBottom: "0.75rem",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Anton, sans-serif",
              fontSize: "1rem", // Reduced from 1.2rem
              color: "white",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            {data.date}
          </Typography>

          {/* Buttons Group */}
          <Box sx={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {data.links &&
              data.links.map((linkItem, idx) => (
                <Button
                  key={idx}
                  variant="outlined"
                  onClick={() => window.open(linkItem.url, "_blank")}
                  sx={{
                    borderColor: "white",
                    color: "white",
                    fontFamily: "Anton, sans-serif",
                    fontSize: "12px", // Slightly smaller
                    padding: "2px 12px",
                    borderRadius: "0",
                    height: "26px", // Reduced height
                    letterSpacing: "1px",
                    "&:hover": {
                      backgroundColor: "white",
                      color: "black",
                      borderColor: "white",
                    },
                  }}
                >
                  {linkItem.label}
                </Button>
              ))}
          </Box>
        </Box>

        {/* 4. Tracklist Header */}
        <Typography
          sx={{
            fontFamily: "Anton, sans-serif",
            fontSize: "1.1rem",
            textTransform: "uppercase",
            marginBottom: "0.25rem",
            letterSpacing: "1px",
          }}
        >
          TRACKLIST ({data.tracks.length.toString().padStart(2, "0")})
        </Typography>

        {/* 5. Tracklist Table (Scrollable) */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            // CHANGED: Reduced max-height to keep overall slot smaller
            maxHeight: "180px",
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-track": {
              background: "rgba(255,255,255,0.1)",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "rgba(255,255,255,0.5)",
            },
          }}
        >
          {/* Track Rows */}
          {data.tracks.map((track, idx) => (
            <Box
              key={idx}
              sx={{
                display: "flex",
                paddingY: "0.35rem", // Slightly tighter padding
                borderBottom: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              {/* index */}
              <Typography
                sx={{
                  width: "35px",
                  fontFamily: "Anton, sans-serif",
                  fontSize: "0.9rem",
                  color: "rgba(255,255,255,0.7)",
                  letterSpacing: "1px",
                }}
              >
                {(idx + 1).toString().padStart(2, "0")}
              </Typography>
              {/* song name */}
              <Typography
                sx={{
                  fontFamily: "Anton, sans-serif",
                  fontSize: "0.9rem",
                  color: "white",
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

// #######################################################################
// 2. MAIN PAGE
// #######################################################################
export default function ReleasePage() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const contentRef = useRef();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: "black",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Video (Commented out as per your snippet) */}
      {/* <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
         <BGVideo />
      </Box> */}

      {/* Navigation */}
      {isMobile ? <TopBarMobile /> : <TopLeft />}

      {/* Main Scroll Container */}
      <Box
        ref={contentRef}
        sx={{
          position: "relative",
          zIndex: 5,
          width: "100%",
          height: "100vh",
          overflowY: "auto",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
          paddingBottom: "5rem",
        }}
      >
        {/* Spacer */}
        <Box sx={{ minHeight: isMobile ? "15vh" : "15vh" }} />

        {/* Content Area */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            // Gap handled by margins in slots, or here if needed
            gap: "0rem",
          }}
        >
          {releasesData.map((item) => (
            <ReleaseSlot key={item.id} data={item} />
          ))}
        </Box>
      </Box>

      {/* Instagram Button - HIDDEN ON MOBILE */}
      {!isMobile && (
        <Button
          variant="outlined"
          sx={{
            position: "fixed",
            bottom: "2%",
            left: "2%",
            color: "white",
            padding: "0.5rem 1rem",
            fontFamily: "Anton, sans-serif",
            fontSize: "20px",
            borderRadius: "5px",
            borderColor: "white",
            "&:hover": {
              backgroundColor: "transparent",
              borderColor: "#ff0000",
            },
            zIndex: 10,
          }}
          onClick={() =>
            window.open("https://www.instagram.com/yabish.yabish/", "_blank")
          }
        >
          <Typography
            sx={{
              color: "white",
              fontFamily: "Anton, sans-serif",
              fontSize: "16px",
              transition: "color 0.2s ease-in-out",
              "&:hover": { color: "#ff0000" },
            }}
          >
            INSTAGRAM
          </Typography>
        </Button>
      )}
    </Box>
  );
}
