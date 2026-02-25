import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import TopLeft from "../../utils/TopLeft";
import TopBarMobile from "../../utils/TopBarMobile";
import YakaReleasesView from "./YakaReleasesView";
import YakaVideosView from "./YakaVideosView";

const artistPhoto =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/85648e3c-6cf4-448d-7b0e-a416002f2300/public";

const socialLinks = [
  { text: "Instagram", url: "https://www.instagram.com/yakayakayaka___/" },
  {
    text: "Spotify",
    url: "https://open.spotify.com/artist/4fODbCHhX4Q2ro3O5CyrSA?si=rmEL7sYIQuKzqZlGELBveg",
  },
  {
    text: "Apple Music",
    url: "https://music.apple.com/cn/artist/yaka/1519813408",
  },
  { text: "YouTube", url: "https://www.youtube.com/@yaka2047" },
  {
    text: "Netease",
    url: "https://music.163.com/#/artist?id=32992079",
  },
  {
    text: "QQMusic",
    url: "https://c6.y.qq.com/base/fcgi-bin/u?__=tqJG5DkWzGkH",
  },
];

const bioEN =
  'Shanghai-born Gen Z artist Yaka continues to define his distinct voice in China\'s underground music scene with new album "JUNGLE +". Blending Jungle, Techno, Bass Music, broken-beat percussion and classic Mandopop samples into Hip-Hop, his sound fuses Eastern hues with untamed jungle rhythms. Rooted in Atlanta\'s hip-hop scene, he honed his craft across Shanghai/Chengdu\'s mainstream and underground circuits post-2022, developing his "Jungle Rage" aesthetic. 2024 saw his debut LP earn critical acclaim (UPEE Top 7 2024), mainstream collaborations (GAI, Valorant), and global performances (Seoul, Tokyo, NYC). "JUNGLE +" deepens his sampling approach—deconstructing Mandopop classics—solidifying his cross-border appeal.';

const bioCN =
  '来自上海的Z世代全能音乐人Yaka，携新专辑《JUNGLE +》深耕华语地下音乐场景。他将Jungle、Techno等电子元素与碎拍鼓点、经典华语采样融入Hip-Hop，打造出兼具东方色彩与迷幻丛林律动的独特风格。其音乐植根亚特兰大嘻哈文化，2022年回国后辗转沪蓉，在主流制作与地下派对中淬炼出"Jungle Rage"美学。2024年首专获UPEE年度第七，受邀为GAI、《无畏契约》制作音乐，足迹遍及首尔、东京、纽约。《JUNGLE +》舍弃Rage元素，以解构重组的采样艺术，彰显跨文化音乐魅力。';

// ─── Tab style helper ─────────────────────────────────────────────────────────
const tabSx = (isActive) => ({
  fontFamily: "Anton, sans-serif",
  fontSize: "22px",
  letterSpacing: "2px",
  color: isActive ? "white" : "rgba(255,255,255,0.35)",
  textDecoration: isActive ? "underline" : "none",
  cursor: "pointer",
  userSelect: "none",
  transition: "color 0.2s ease",
  "&:hover": { color: "white" },
});

// ─── Booking line (shared) ────────────────────────────────────────────────────
function BookingLine() {
  return (
    <Box
      sx={{
        display: "inline-flex",
        gap: "0.5rem",
        flexWrap: "wrap",
        marginTop: "2rem",
        marginBottom: "2rem",
      }}
    >
      <Typography
        sx={{
          color: "white",
          fontFamily: "Antonio, sans-serif",
          fontSize: "16px",
        }}
      >
        Artist Booking/Management:
      </Typography>
      <Typography
        sx={{
          color: "white",
          fontFamily: "Antonio, sans-serif",
          textDecoration: "underline",
          fontSize: "16px",
          cursor: "pointer",
          transition: "color 0.2s ease-in-out",
          "&:hover": { color: "#ff0000" },
        }}
        onClick={() => window.open("mailto:yabish.prod@gmail.com", "_blank")}
      >
        yabish.prod@gmail.com
      </Typography>
    </Box>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function YakaPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeView, setActiveView] = useState("releases");
  const [bioExpanded, setBioExpanded] = useState(false);
  const [photoHeight, setPhotoHeight] = useState(0);
  const photoRef = useRef(null);

  useEffect(() => {
    const measure = () => {
      if (photoRef.current) {
        const cap = Math.round(window.innerHeight * 0.55);
        setPhotoHeight(Math.min(photoRef.current.offsetHeight, cap));
      }
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      measure();
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePhotoLoad = () => {
    if (photoRef.current) {
      const cap = Math.round(window.innerHeight * 0.55);
      setPhotoHeight(Math.min(photoRef.current.offsetHeight, cap));
    }
  };

  // ─── Mobile View ────────────────────────────────────────────────────────────
  if (isMobile) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          width: "100vw",
          backgroundColor: "black",
          position: "relative",
        }}
      >
        <TopBarMobile />

        <Box
          sx={{
            position: "relative",
            zIndex: 10,
            height: "100vh",
            overflowY: "auto",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
            paddingBottom: "5rem",
          }}
        >
          <Box sx={{ padding: "5rem 1.5rem 1rem" }}>
            {/* Portrait photo */}
            <Box sx={{ width: "100%", marginBottom: "1.5rem" }}>
              <img
                ref={photoRef}
                src={artistPhoto}
                alt="Yaka"
                onLoad={handlePhotoLoad}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </Box>

            {/* Title */}
            <Typography
              sx={{
                color: "white",
                fontFamily: "Anton, sans-serif",
                fontSize: "52px",
                lineHeight: 0.9,
                marginBottom: "1rem",
              }}
            >
              YAKA
            </Typography>

            {/* Bio with collapse */}
            <Box sx={{ position: "relative", marginBottom: "0.25rem" }}>
              <Box
                sx={{
                  maxHeight: bioExpanded ? "none" : "180px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontFamily: "Antonio, sans-serif",
                    fontSize: "16px",
                    lineHeight: 1.6,
                    marginBottom: "0.75rem",
                  }}
                >
                  {bioEN}
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    fontFamily: "Glow Sans SC Compressed, sans-serif",
                    fontSize: "16px",
                    lineHeight: 1.6,
                  }}
                >
                  {bioCN}
                </Typography>
                {!bioExpanded && (
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "60px",
                      background:
                        "linear-gradient(to bottom, transparent, black)",
                      pointerEvents: "none",
                    }}
                  />
                )}
              </Box>
              <Typography
                onClick={() => setBioExpanded((p) => !p)}
                sx={{
                  color: "rgba(255,255,255,0.55)",
                  fontFamily: "Anton, sans-serif",
                  fontSize: "12px",
                  letterSpacing: "1px",
                  cursor: "pointer",
                  marginTop: "0.4rem",
                  "&:hover": { color: "white" },
                }}
              >
                {bioExpanded ? "SHOW LESS ↑" : "READ MORE ↓"}
              </Typography>
            </Box>

            {/* Social links */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                marginTop: "1rem",
              }}
            >
              {socialLinks.map((item, index) => (
                <Button
                  key={index}
                  variant="outlined"
                  onClick={() => window.open(item.url, "_blank")}
                  sx={{
                    color: "white",
                    borderColor: "white",
                    fontFamily: "Anton, sans-serif",
                    fontSize: "11px",
                    whiteSpace: "nowrap",
                    padding: "2px 8px",
                    "&:hover": { borderColor: "red", color: "red" },
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>

            {/* Divider */}
            <Box
              sx={{
                height: "1px",
                backgroundColor: "rgba(255,255,255,0.2)",
                margin: "2rem 0 1.5rem",
              }}
            />

            {/* Toggle tabs */}
            <Box sx={{ display: "flex", gap: "2rem", marginBottom: "1.5rem" }}>
              <Typography
                sx={tabSx(activeView === "releases")}
                onClick={() => setActiveView("releases")}
              >
                RELEASES
              </Typography>
              <Typography
                sx={tabSx(activeView === "videos")}
                onClick={() => setActiveView("videos")}
              >
                VIDEOS
              </Typography>
            </Box>

            {activeView === "releases" ? (
              <YakaReleasesView />
            ) : (
              <YakaVideosView />
            )}

            <BookingLine />
          </Box>
        </Box>
      </Box>
    );
  }

  // ─── Desktop View ───────────────────────────────────────────────────────────
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "black",
        position: "relative",
      }}
    >
      <TopLeft />

      <Box
        sx={{
          position: "relative",
          zIndex: 10,
          height: "100vh",
          overflowY: "auto",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
          paddingBottom: "5rem",
        }}
      >
        <Box
          sx={{
            width: "70%",
            margin: "0 auto",
            paddingTop: "6rem",
          }}
        >
          {/* ── Upper section: two columns ── */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "3rem",
              alignItems: "flex-start",
            }}
          >
            {/* Left: portrait photo */}
            <Box sx={{ width: "38%", flexShrink: 0, overflow: "hidden", maxHeight: "55vh" }}>
              <img
                ref={photoRef}
                src={artistPhoto}
                alt="Yaka"
                onLoad={handlePhotoLoad}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </Box>

            {/* Right: info column */}
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                height:
                  photoHeight > 0 && !bioExpanded ? `${photoHeight}px` : "auto",
                overflow: "hidden",
              }}
            >
              {/* Artist name */}
              <Typography
                sx={{
                  color: "white",
                  fontFamily: "Anton, sans-serif",
                  fontSize: "64px",
                  lineHeight: 0.9,
                  marginBottom: "1.5rem",
                  flexShrink: 0,
                }}
              >
                YAKA
              </Typography>

              {/* Bio */}
              <Box
                sx={{
                  flex: 1,
                  overflow: "hidden",
                  position: "relative",
                  minHeight: 0,
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontFamily: "Antonio, sans-serif",
                    fontSize: "17px",
                    lineHeight: 1.65,
                    marginBottom: "1rem",
                  }}
                >
                  {bioEN}
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    fontFamily: "Glow Sans SC Compressed, sans-serif",
                    fontSize: "17px",
                    lineHeight: 1.65,
                  }}
                >
                  {bioCN}
                </Typography>

                {/* Gradient fade when collapsed */}
                {!bioExpanded && photoHeight > 0 && (
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "80px",
                      background:
                        "linear-gradient(to bottom, transparent, black)",
                      pointerEvents: "none",
                    }}
                  />
                )}
              </Box>

              {/* Read More / Show Less */}
              {photoHeight > 0 && (
                <Typography
                  onClick={() => setBioExpanded((p) => !p)}
                  sx={{
                    color: "rgba(255,255,255,0.55)",
                    fontFamily: "Anton, sans-serif",
                    fontSize: "13px",
                    letterSpacing: "1px",
                    cursor: "pointer",
                    flexShrink: 0,
                    marginTop: "0.5rem",
                    marginBottom: "1rem",
                    "&:hover": { color: "white" },
                  }}
                >
                  {bioExpanded ? "SHOW LESS ↑" : "READ MORE ↓"}
                </Typography>
              )}

              {/* Social links — pinned to bottom */}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.75rem",
                  flexShrink: 0,
                  marginTop: "auto",
                }}
              >
                {socialLinks.map((item, index) => (
                  <Button
                    key={index}
                    variant="outlined"
                    onClick={() => window.open(item.url, "_blank")}
                    sx={{
                      color: "white",
                      borderColor: "white",
                      fontFamily: "Anton, sans-serif",
                      fontSize: "13px",
                      "&:hover": { borderColor: "red", color: "red" },
                    }}
                  >
                    {item.text}
                  </Button>
                ))}
              </Box>
            </Box>
          </Box>

          {/* Divider */}
          <Box
            sx={{
              height: "1px",
              backgroundColor: "rgba(255,255,255,0.2)",
              marginTop: "3rem",
              marginBottom: "2rem",
            }}
          />

          {/* Toggle tabs */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "3rem",
              marginBottom: "2rem",
            }}
          >
            <Typography
              sx={tabSx(activeView === "releases")}
              onClick={() => setActiveView("releases")}
            >
              RELEASES
            </Typography>
            <Typography
              sx={tabSx(activeView === "videos")}
              onClick={() => setActiveView("videos")}
            >
              VIDEOS
            </Typography>
          </Box>

          {activeView === "releases" ? (
            <YakaReleasesView />
          ) : (
            <YakaVideosView />
          )}

          <BookingLine />
        </Box>
      </Box>
    </Box>
  );
}
