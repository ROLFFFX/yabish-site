import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
    text: "NetEase Music",
    url: "https://music.163.com/#/artist?id=32992079",
  },
  {
    text: "QQMusic",
    url: "https://c6.y.qq.com/base/fcgi-bin/u?__=tqJG5DkWzGkH",
  },
];

const bioEN = `Hailing from Shanghai, China, Yaka is an independent artist whose work operates at the margins of Electronic music, Hip-Hop, and Mandarin pop. Drawing rhythmic frameworks and textures from Jungle, Techno, Tribal, and bass music, he centers his sound around chopped-up breakbeats and re-contextualized Chinese sampling, embedding hip-hop's pulse into dense, high-energy dance structures. The result is a psychedelic, rhythm-driven sonic jungle with an East-Asian sensibility, now recognized by fans as Jungle Rage.

Since 2024, Yaka has gradually emerged across underground music scenes in China and the United States. After relocating to Brooklyn with his team, he expanded his practice through ambitious collaborative projects and dynamic live performances. His debut album, ¡2busy4u! Jungle Rage LP, was widely acclaimed by Chinese critics and subculture media as a defining underground release, celebrated for its raw energy and highly stylized collage approach.

Beyond his solo work, Yaka has contributed to music production for Riot Games' VALORANT and China's leading Pop Rap artists, including GAI. He co-founded the creative collective 99 God and performed on stadium-scale stages such as Innersect Festival in Changzhou. His international appearances include a live set for @visla.fm in Seoul, performances curated by Tokyo-based subculture platform @sabukaru.online in Shanghai, and the full premiere recording of his new album at an NTS Radio-supported event in New York's Chinatown.

In November 2025, Yaka surprise-released JUNGLE+. Moving away from the overt aggression of his earlier work, the album strips back the externalized "rage," focusing on emotional depth in sampling and structural tension. Within a nuanced dancefloor logic, JUNGLE+ foregrounds personal narrative and internal momentum. Since its release, the album has received widespread attention and multiple nominations, including: Best Electronic/Dance Album at NetEase Music's Indie Original Music Awards, Best Album/Best Produced Album/Best Cross-Genre Hip-Hop Album at the China Rap Music Awards, and Best Electronic Album at the 5th HOPICO Music Awards.`;

const bioCN = `Yaka 是来自上海的独立音乐人，其创作游走于电子音乐、Hip-Hop 与华语流行的交接地带。他从 Jungle、Techno、Tribal 与 Bass Music 中提炼节奏与质感，以碎拍鼓点和再语境化的采样为核心，将 Hip-Hop 的脉搏注入高密度舞曲结构之中，形成一种带有东方感知的迷幻丛林声响体系——Jungle Rage。

自 2024 年起，Yaka 以这一声音语言在中美地下音乐场景逐渐崭露头角。随团队迁居纽约布鲁克林，他通过跨界合作与活力十足的现场演出不断拓展创作实践。其个人专辑《¡2busy4u! Jungle Rage LP》凭借极端能量与高度风格化的拼贴手法，被多家国内乐评与亚文化媒体评为年度专辑及地下制作的重要样本。

在跨界合作方面，Yaka 曾为说唱歌手 GAI 、拳头游戏《VALORANT 无畏契约》以及多位国内主流说唱歌手参与音乐制作；同时与 99 God 组建创意团队，并登上 Innersect 音乐节体育场舞台。国际演出包括首尔 visla.fm 的线上直播 live set、东京亚文化媒体 sabukaru.online 在上海策划的现场演出，以及纽约 NTS Radio 支持的大地舞厅活动中对新专辑《JUNGLE+》的完整首演录制。

2025 年 11 月，Yaka 无预警发布专辑《JUNGLE+》。相较前作的直接攻击性，该作品有意抽离 "Rage" 的外放表达，将重心转向采样的情绪密度与结构张力，在更内敛的舞池逻辑中呈现个人叙事。专辑发布后获得多项关注与提名，包括网易云音乐硬地原创榜「最佳电子 / 舞曲专辑」，中文说唱音乐奖「年度专辑」「年度制作」「最佳说唱融合专辑」、第五届HOPICO音乐奖「年度最佳电子专辑」等。`;

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
            <Box sx={{ width: "100%", marginBottom: "1.5rem", overflow: "hidden", maxHeight: "55vh" }}>
              <img
                src={artistPhoto}
                alt="Yaka"
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
                  alt="Yaka"
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
              {/* Artist name + social links */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                  marginBottom: "1.5rem",
                  flexShrink: 0,
                  flexWrap: "wrap",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontFamily: "Anton, sans-serif",
                    fontSize: "64px",
                    lineHeight: 0.9,
                  }}
                >
                  YAKA
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
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
