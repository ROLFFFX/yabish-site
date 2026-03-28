import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  { text: "NetEase Music", url: "https://music.163.com/#/artist?id=31511662" },
  {
    text: "QQMusic",
    url: "https://c6.y.qq.com/base/fcgi-bin/u?__=YAJ3eRkWzeOb",
  },
];

const bioEN = `Hailing from Shanghai and splitting his time between China and New York City, 99 God is an anomaly in the Hip-Hop scene. His distinctively deep, gritty vocal delivery captivates listeners over signature new school Trap beats, while his laid-back, raspy melodic lines floating on Neo-soul–influenced production reveal the depth of an artist who has long cultivated his craft in the heart of Hip-Hop.

As one of the most successful independent artists to emerge from China, 99 God launched his career with his debut single "UFO" in 2019. The track went viral across Chinese internet platforms, and soon after, he collaborated with artists such as NINEONE, Al Rocco, Lil Andy, and Cassian, quickly amassing over 400,000 followers on NetEase Music.

2023 marked a new chapter for 99 God. His two-year-old single "Bodega" unexpectedly blew up on Japanese social media, reaching #1 on Japan's Viral Hot 100 chart and earning 2.6 million streams on Spotify while boosting his monthly listeners to over 200,000. Riding this momentum, he teamed up with Riot Games to produce "Renegade," the theme song for Valorant's first Chinese agent. The collaboration not only resonated globally but also earned a Billboard nomination for Best Music Supervision in a Trailer – Video Game & Interactive.

In 2024, 99 God completed his first solo tour, "Ninety-Nine," with guest appearances from PSY.P, Melo, Mengzi, Feezy, B.C.W., Dough Boy, and AsiaBoy.

In 2025, he returned with his highly anticipated debut mixtape "FEY1999" and launched his second solo tour under the same name, further cementing his place as a cross-border force in contemporary Hip-Hop.`;

const bioCN = `来自上海，并常年往返于中国上海与美国纽约两地的 99 God，是华语嘻哈场景中的一股异类力量。凭借独特而深沉的磁性嗓音，他在新派Trap节奏上为听众带来催眠般的感染力；同时，融合Neo-soul影响的慵懒旋律线条，又展现出他长期深耕布鲁克林音乐氛围所积累的厚度与质感。

作为中国最成功的独立音乐人之一，99 God 的职业生涯始于2019年推出的首支单曲《UFO》。这首作品迅速在国内互联网上掀起现象级热潮，此后他与乃万、Al Rocco、小安迪、卡西恩等歌手合作，仅两年时间便在网易云音乐上收获了超过40万粉丝。

2023年，99 God迎来全新篇章。他在两年前发布的单曲《Bodega》突然于日本社交媒体爆红，登顶日本 Viral Hot 100 热门榜单，并在Spotify上斩获260万次播放，月度听众突破20万。随后，他与拳头游戏合作，为《无畏契约》（Valorant）国服首位中国特工打造主题曲《Renegade》，该合作不仅在全球范围内引发热议，还获得美国《Billboard》公告牌"年度最佳预告片音乐监制——游戏与交互媒体"提名。

2024年，他完成了首个个人巡演「九十九」，并邀请PSY.P、Melo、孟子、Feezy、B.C.W.、Dough Boy、AsiaBoy等多位知名嘉宾助阵。

2025年，99 God带着首张全新Mixtape《飞1999》重磅回归，并于当年8月开启了同名个人巡演，再次巩固了其作为跨文化嘻哈力量的独特地位。`;

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
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [activeView, setActiveView] = useState("releases");
  const [bioExpanded, setBioExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
                src={artistPhoto}
                alt="99 God"
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
                    whiteSpace: "pre-line",
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
                    whiteSpace: "pre-line",
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
          {/* Back button row */}
          <Button
            onClick={() => navigate("/artist")}
            sx={{
              color: "white",
              fontFamily: "Anton, sans-serif",
              fontSize: "20px",
              letterSpacing: "1px",
              minWidth: 0,
              padding: "4px 8px",
              marginBottom: "1rem",
              "&:hover": { color: "#ff0000" },
            }}
          >
            <ArrowBackIosIcon sx={{ fontSize: "20px", mr: "2px" }} />
            BACK
          </Button>

          {/* ── Upper section: two columns ── */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "3rem",
              alignItems: "stretch",
              height: "55vh",
            }}
          >
            {/* Left: portrait photo */}
            <Box sx={{ width: "38%", flexShrink: 0, height: "100%" }}>
              <Box sx={{ overflow: "hidden", height: "100%" }}>
                <img
                  src={artistPhoto}
                  alt="99 God"
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                />
              </Box>
            </Box>

            {/* Right: info column */}
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                height: "100%",
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
                  marginBottom: "0.75rem",
                  flexShrink: 0,
                }}
              >
                99 GOD
              </Typography>

              {/* Social links — below artist name */}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  flexShrink: 0,
                  marginBottom: "1rem",
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

              {/* Bio — scrollable, fills remaining column height */}
              <Box
                sx={{
                  flex: 1,
                  minHeight: 0,
                  overflowY: "auto",
                  scrollbarWidth: "thin",
                  scrollbarColor: "rgba(255,255,255,0.3) transparent",
                  "&::-webkit-scrollbar": { width: "4px" },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "rgba(255,255,255,0.3)",
                    borderRadius: "2px",
                  },
                  "&::-webkit-scrollbar-track": { background: "transparent" },
                  paddingRight: "0.5rem",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontFamily: "Antonio, sans-serif",
                    fontSize: "17px",
                    lineHeight: 1.65,
                    marginBottom: "1rem",
                    whiteSpace: "pre-line",
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
                    whiteSpace: "pre-line",
                  }}
                >
                  {bioCN}
                </Typography>
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
    </Box>
  );
}
