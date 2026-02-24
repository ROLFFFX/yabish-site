import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import TopLeft from "../../utils/TopLeft";
import TopBarMobile from "../../utils/TopBarMobile";
import GodReleasesView from "./GodReleasesView";
import GodVideosView from "./GodVideosView";

const artistPhoto =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/1adb38f6-b568-479c-5717-ac7120130c00/public";

const socialLinks = [
  { text: "Instagram", url: "https://www.instagram.com/_99god_/" },
  {
    text: "Spotify",
    url: "https://open.spotify.com/artist/1fSNmkI8lKMFVMU2Y4hpgi?si=thjriNdTQfGEDfLL9y5_AA",
  },
  {
    text: "Apple Music",
    url: "https://music.apple.com/cn/artist/99-god/1530452342",
  },
  { text: "YouTube", url: "https://www.youtube.com/@99god19" },
  { text: "Netease", url: "https://music.163.com/#/artist?id=31511662" },
  {
    text: "QQMusic",
    url: "https://c6.y.qq.com/base/fcgi-bin/u?__=YAJ3eRkWzeOb",
  },
];

const bioEN =
  'Hailing from Shanghai and splitting time between China and New York \u2013 99 God is an anomaly in Chinese Hip-Hop. With a distinctively deep, gritty vocal style, he blends new school Trap beats with Neo-soul-infused melodic lines, reflecting his long-honed craft. Emerging as a top independent artist, his 2019 debut \u201cUFO\u201d went viral, followed by collaborations with NINEONE and Al Rocco. His 2021 track \u201cBodega\u201d blew up in Japan in 2023, and he later crafted Valorant\u2019s \u201cRenegade\u201d (Billboard-nominated), completed two solo tours (2024\u20132025), and released his debut mixtape \u201cFEY1999\u201d in 2025, solidifying his cross-border status.';

const bioCN =
  "\u6765\u81EA\u4E0A\u6D77\u3001\u5E38\u5E74\u5F80\u8FD4\u4E2D\u7F8E\u768499 God\uFF0C\u662F\u534E\u8BED\u55BB\u54C8\u573A\u666F\u7684\u5F02\u7C7B\u529B\u91CF\u3002\u4ED6\u4EE5\u72EC\u7279\u6DF1\u6C89\u7684\u78C1\u6027\u5D13\u97F3\uFF0C\u878D\u5408\u65B0\u6D3ETrap\u8282\u594F\u4E0ENeo-soul\u6175\u61D2\u65CB\u5F8B\uFF0C\u5C3D\u663E\u6DF1\u8015\u97F3\u4E50\u7684\u539A\u5EA6\u3002\u4F5C\u4E3A\u9876\u5C16\u72EC\u7ACB\u97F3\u4E50\u4EBA\uFF0C2019\u5E74\u9996\u5355\u300AUFO\u300B\u7206\u7EA2\uFF0C\u540E\u4E0E\u4E43\u4E07\u3001Al Rocco\u7B49\u5408\u4F5C\uFF1B2023\u5E74\u65E7\u4F5C\u300ABodega\u300B\u767B\u9876\u65E5\u672C viral \u699C\uFF0C\u4E3A\u300A\u65E0\u754F\u5951\u7EA6\u300B\u521B\u4F5C\u7684\u300ARenegade\u300B\u83B7 Billboard \u63D0\u540D\u30022024-2025\u5E74\u5B8C\u6210\u4E24\u8F6E\u4E2A\u4EBA\u5DE1\u6F14\uFF0C\u63A8\u51FA\u9996\u5F20Mixtape\u300A\u98DE1999\u300B\uFF0C\u7A33\u56FA\u8DE8\u6587\u5316\u55BB\u54C8\u529B\u91CF\u5730\u4F4D\u3002";

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
        onClick={() =>
          window.open("mailto:yabish.prod@gmail.com", "_blank")
        }
      >
        yabish.prod@gmail.com
      </Typography>
    </Box>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function GodPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeView, setActiveView] = useState("releases");
  const [bioExpanded, setBioExpanded] = useState(false);
  const [photoHeight, setPhotoHeight] = useState(0);
  const photoRef = useRef(null);

  useEffect(() => {
    const measure = () => {
      if (photoRef.current) setPhotoHeight(photoRef.current.offsetHeight);
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
    if (photoRef.current) setPhotoHeight(photoRef.current.offsetHeight);
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

        {/* Scrollable content */}
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
                alt="99 God"
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
              99 GOD
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
                {bioExpanded ? "SHOW LESS \u2191" : "READ MORE \u2193"}
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

            {/* Active view */}
            {activeView === "releases" ? (
              <GodReleasesView />
            ) : (
              <GodVideosView />
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

      {/* Scrollable content */}
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
            <Box sx={{ width: "38%", flexShrink: 0 }}>
              <img
                ref={photoRef}
                src={artistPhoto}
                alt="99 God"
                onLoad={handlePhotoLoad}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </Box>

            {/* Right: info column */}
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                // Height matches photo when collapsed; auto when expanded
                height:
                  photoHeight > 0 && !bioExpanded
                    ? `${photoHeight}px`
                    : "auto",
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
                99 GOD
              </Typography>

              {/* Bio — fills remaining vertical space, overflows hidden */}
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

                {/* Gradient fade at bottom when collapsed */}
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

              {/* Read More / Show Less — only after photo has loaded */}
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
                  {bioExpanded ? "SHOW LESS \u2191" : "READ MORE \u2193"}
                </Typography>
              )}

              {/* Social links — pinned to bottom via marginTop:auto */}
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

          {/* Active view */}
          {activeView === "releases" ? <GodReleasesView /> : <GodVideosView />}

          <BookingLine />
        </Box>
      </Box>

      <InstagramButton />
    </Box>
  );
}
