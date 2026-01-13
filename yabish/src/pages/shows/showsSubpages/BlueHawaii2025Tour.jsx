import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopLeft from "../../../utils/TopLeft";
import TopLeftMobile from "../../../utils/TopLeftMobile";
import BGVideo from "../../BGVideo";

// PLACEHOLDER IMAGES - Replace with actual Blue Hawaii assets
const bh_tour_poster =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/65ee5388-4bea-4c24-d467-cc5798308500/public";

export default function BlueHawaiiTour() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // ######################################################### Mobile View
  if (isMobile) {
    return (
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "black",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <BGVideo />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        />
        <TopLeftMobile />
        <Box
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            zIndex: 20,
          }}
        >
          {/* Title Section */}
          <Box
            sx={{
              height: { xs: "60%" },
              width: "calc(100% - 120px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              left: "120px",
            }}
          >
            <Typography
              sx={{
                color: "red",
                fontFamily: "Anton, sans-serif",
                fontSize: "35px",
                textAlign: "center",
              }}
            >
              YaBish Pres.「Blue Hawaii 2025 CHINA TOUR」
            </Typography>
          </Box>
          {/* Words Section */}
          <Box
            sx={{
              height: "100%",
              overflowY: "auto",
              padding: "1rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={bh_tour_poster}
                alt="Blue Hawaii tour poster"
                style={{ width: "40%", height: "auto" }}
              />
            </Box>
            <Typography
              sx={{
                color: "white",
                fontFamily: "Antonio, sans-serif",
                fontSize: "18px",
                textAlign: "center",
              }}
            >
              POSTER BY{" "}
              <Typography
                component="span"
                sx={{
                  color: "white",
                  fontFamily: "Antonio, sans-serif",
                  fontSize: "18px",
                  textDecoration: "underline",
                  cursor: "pointer",
                  transition: "color 0.2s ease-in-out",
                  "&:hover": {
                    color: "#ff0000",
                  },
                }}
                onClick={() =>
                  window.open("https://www.instagram.com/kkyra.han/", "_blank")
                }
              >
                KYRA HAN
              </Typography>
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
                marginTop: "1rem",
                flexWrap: "wrap",
              }}
            >
              {[
                {
                  text: "SPOTIFY",
                  url: "https://open.spotify.com/artist/41y1iPh0WqB7tyGdzyeinZ?si=cV_AXW8nRp6onMLlK6nR2A",
                },
                {
                  text: "NETEASE CLOUD MUSIC",
                  url: "https://music.163.com/#/artist?id=88974",
                },
                {
                  text: "INSTAGRAM",
                  url: "https://www.instagram.com/trubluhawaii/",
                },
              ].map((item, index) => (
                <Button
                  key={index}
                  variant="outlined"
                  onClick={() => window.open(item.url, "_blank")}
                  sx={{
                    color: "white",
                    borderColor: "white",
                    fontFamily: "Anton, sans-serif",
                    fontSize: "14px",
                    "&:hover": {
                      borderColor: "red",
                      color: "red",
                    },
                    cursor: "pointer",
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
            <Typography
              sx={{
                color: "white",
                fontFamily: "Antonio, sans-serif",
                fontSize: "18px",
              }}
            >
              <br />
              Blue Hawaii, an electronic duo from Montreal, Canada, consists of
              vocalist Raphaelle Standell-Preston and producer Agor Kirby.
              <br />
              <br />
              They establish themselves with a highly distinctive dreamlike
              soundscape and meticulously crafted productions, blending the
              coolness of electronic music with the softness of indie pop to
              create a unique sound that is both warm and energetic.
              <br />
              <br />
              From the early, somewhat raw, EP "Blooming Summer" to the mature
              "Tenderness", nominated for the Juno Award for "Electronic Album
              of the Year," Blue Hawaii consistently explores the boundaries of
              "emotion and connection" through their music—synthesizers rise and
              fall like waves, beats layer upon layer, and gentle vocals weave
              together a flowing dreamscape.
              <br />
              <br />
              Music media and critics have also praised them, calling them "an
              important representative of the Montreal electronic pop scene" and
              "the freshest sound in electronic dream pop."
              <br />
              <br />
              In 2025, YaBish brought them to China for the first time with a
              three-city tour.
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontFamily: "Glow Sans SC Compressed, sans-serif",
                fontSize: "18px",
              }}
            >
              <br />
              来自加拿大蒙特利尔的电子双人组 Blue Hawaii，由主唱 Raphaelle
              Standell-Preston 与制作人Agor Kirby搭档而成。
              <br />
              <br />
              他们以极具辨识度的梦幻声景和细腻到极致的制作立足，在电子乐的冷峻与独立流行的柔软之间，揉出了既有温度又有能量的独特声响。
              <br />
              <br />
              从早期 EP《Blooming Summer》的青涩，到入围 Juno 奖 “年度电子专辑”
              的《Tenderness》的成熟，Blue Hawaii 始终用音乐探索 “情绪与连接”
              的边界 ——
              合成器如海浪起伏，节拍层层叠叠，温柔人声穿梭其间，共同织就一场流动的梦境。
              <br />
              <br />
              音乐媒体与评论人也不吝称赞，称他们是
              “蒙特利尔电子流行场景的重要代表”，是
              “电子梦幻流行里最清新的那缕声线”。
              <br />
              <br />
              2025，YaBish将他们首次带来了中国进行了三城巡演。
              <br />
              <br />
            </Typography>

            <Typography
              sx={{
                color: "white",
                fontFamily: "Antonio, sans-serif",
                fontSize: "16px",
              }}
            >
              <span
                style={{
                  fontWeight: "bold",
                  fontFamily: "Glow Sans SC Compressed, sans-serif",
                }}
              >
                <br />
                2025 Blue Hawaii CHINA TOUR DATES:
              </span>
              <br />
              <br />
              21,NOV - BEIJING - PILLBOX
              <br />
              22,NOV - SHANGHAI - wigwam
              <br />
              28,NOV - CHENGDU - NUART
              <br />
              <br />
              <span
                style={{ fontFamily: "Glow Sans SC Compressed, sans-serif" }}
              >
                统筹制作Production:YaBish
                <br />
                巡演经理Tour Manager:Ludar@YaBish
                <br />
                海报Poster:KYRA HAN
              </span>
            </Typography>
          </Box>

          {/* Footer Section */}
          <Box
            sx={{
              height: "15%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontFamily: "Anton, sans-serif",
                fontSize: "16px",
              }}
            >
              © YABISH 2024
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }

  // ######################################################### Desktop View
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "black",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <BGVideo />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      />
      <TopLeft />
      <Box
        sx={{
          height: "100%",
          width: "60%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          zIndex: 20,
        }}
      >
        {/* Title Section */}
        <Box
          sx={{
            height: "30%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 20,
          }}
        >
          {/* Back Button */}
          <Button
            onClick={() => navigate("/shows")}
            sx={{
              position: "absolute",
              left: 0,
              color: "white",
              fontSize: "20px",
              fontFamily: "Anton, sans-serif",
              zIndex: 20,
            }}
          >
            <ArrowBackIosIcon />
          </Button>
          {/* Title */}
          <Typography
            sx={{
              color: "red",
              fontFamily: "Anton, sans-serif",
              fontSize: "40px",
              textAlign: "center",
            }}
          >
            YaBish Pres.「Blue Hawaii 2025 CHINA TOUR」
          </Typography>
        </Box>

        {/* Words Section */}
        <Box
          sx={{
            height: "100%",
            overflowY: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={bh_tour_poster}
              alt="Blue Hawaii tour poster"
              style={{ width: "40%", height: "auto" }}
            />
          </Box>
          <Typography
            sx={{
              color: "white",
              fontFamily: "Antonio, sans-serif",
              fontSize: "18px",
              textAlign: "center",
            }}
          >
            POSTER BY{" "}
            <Typography
              component="span"
              sx={{
                color: "white",
                fontFamily: "Antonio, sans-serif",
                fontSize: "18px",
                textDecoration: "underline",
                cursor: "pointer",
                transition: "color 0.2s ease-in-out",
                "&:hover": {
                  color: "#ff0000",
                },
              }}
              onClick={() =>
                window.open("https://www.instagram.com/kkyra.han/", "_blank")
              }
            >
              KYRA HAN
            </Typography>
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              marginTop: "1rem",
            }}
          >
            {[
              {
                text: "SPOTIFY",
                url: "https://open.spotify.com/artist/41y1iPh0WqB7tyGdzyeinZ?si=cV_AXW8nRp6onMLlK6nR2A",
              },
              {
                text: "NETEASE CLOUD MUSIC",
                url: "https://music.163.com/#/artist?id=88974",
              },
              {
                text: "INSTAGRAM",
                url: "https://www.instagram.com/trubluhawaii/",
              },
            ].map((item, index) => (
              <Button
                key={index}
                variant="outlined"
                onClick={() => window.open(item.url, "_blank")}
                sx={{
                  color: "white",
                  borderColor: "white",
                  fontFamily: "Anton, sans-serif",
                  fontSize: "14px",
                  "&:hover": {
                    borderColor: "red",
                    color: "red",
                  },
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>
          <Typography
            sx={{
              color: "white",
              fontFamily: "Antonio, sans-serif",
              fontSize: "18px",
            }}
          >
            <br />
            Blue Hawaii, an electronic duo from Montreal, Canada, consists of
            vocalist Raphaelle Standell-Preston and producer Agor Kirby.
            <br />
            <br />
            They establish themselves with a highly distinctive dreamlike
            soundscape and meticulously crafted productions, blending the
            coolness of electronic music with the softness of indie pop to
            create a unique sound that is both warm and energetic.
            <br />
            <br />
            From the early, somewhat raw, EP "Blooming Summer" to the mature
            "Tenderness", nominated for the Juno Award for "Electronic Album of
            the Year," Blue Hawaii consistently explores the boundaries of
            "emotion and connection" through their music—synthesizers rise and
            fall like waves, beats layer upon layer, and gentle vocals weave
            together a flowing dreamscape.
            <br />
            <br />
            Music media and critics have also praised them, calling them "an
            important representative of the Montreal electronic pop scene" and
            "the freshest sound in electronic dream pop."
            <br />
            <br />
            In 2025, YaBish brought them to China for the first time with a
            three-city tour.
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontFamily: "Glow Sans SC Compressed, sans-serif",
              fontSize: "18px",
            }}
          >
            <br />
            来自加拿大蒙特利尔的电子双人组 Blue Hawaii，由主唱 Raphaelle
            Standell-Preston 与制作人Agor Kirby搭档而成。
            <br />
            <br />
            他们以极具辨识度的梦幻声景和细腻到极致的制作立足，在电子乐的冷峻与独立流行的柔软之间，揉出了既有温度又有能量的独特声响。
            <br />
            <br />
            从早期 EP《Blooming Summer》的青涩，到入围 Juno 奖 “年度电子专辑”
            的《Tenderness》的成熟，Blue Hawaii 始终用音乐探索 “情绪与连接”
            的边界 ——
            合成器如海浪起伏，节拍层层叠叠，温柔人声穿梭其间，共同织就一场流动的梦境。
            <br />
            <br />
            音乐媒体与评论人也不吝称赞，称他们是
            “蒙特利尔电子流行场景的重要代表”，是
            “电子梦幻流行里最清新的那缕声线”。
            <br />
            <br />
            2025，YaBish将他们首次带来了中国进行了三城巡演。
            <br />
            <br />
          </Typography>

          <Typography
            sx={{
              color: "white",
              fontFamily: "Antonio, sans-serif",
              fontSize: "16px",
            }}
          >
            <span
              style={{
                fontWeight: "bold",
                fontFamily: "Glow Sans SC Compressed, sans-serif",
              }}
            >
              <br />
              2025 Blue Hawaii CHINA TOUR DATES:
            </span>
            <br />
            <br />
            21,NOV - BEIJING - PILLBOX
            <br />
            22,NOV - SHANGHAI - wigwam
            <br />
            28,NOV - CHENGDU - NUART
            <br />
            <br />
            <span style={{ fontFamily: "Glow Sans SC Compressed, sans-serif" }}>
              统筹制作Production:YaBish
              <br />
              巡演经理Tour Manager:Ludar@YaBish
              <br />
              海报Poster:KYRA HAN
            </span>
          </Typography>
        </Box>

        {/* Footer Section */}
        <Box
          sx={{
            height: "15%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontFamily: "Anton, sans-serif",
              fontSize: "16px",
            }}
          >
            © YABISH 2024
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
