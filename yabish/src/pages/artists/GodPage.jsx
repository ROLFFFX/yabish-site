import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import TopLeft from "../../utils/TopLeft";
import TopLeftMobile from "../../utils/TopLeftMobile";

import video1 from "../../assets/godvideo/compressed_godvideo1.webm";
import video2 from "../../assets/godvideo/compressed_godvideo2.webm";
import video3 from "../../assets/godvideo/compressed_godvideo3.webm";
import video4 from "../../assets/godvideo/compressed_godvideo4.webm";
import video5 from "../../assets/godvideo/compressed_godvideo5.webm";

const godBgImage =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/f78c74d3-5d2d-4010-dcff-ab015c463000/public";

const fey1999 = {
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
};

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

const sectionHeaderSx = {
  color: "white",
  fontFamily: "Anton, sans-serif",
  fontSize: "28px",
  letterSpacing: "2px",
  borderBottom: "2px solid white",
  paddingBottom: "0.25rem",
  marginBottom: "1rem",
  marginTop: "2rem",
  width: "100%",
};

const tracklistBoxSx = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  maxHeight: "180px",
  overflowY: "auto",
  "&::-webkit-scrollbar": { width: "4px" },
  "&::-webkit-scrollbar-track": { background: "rgba(255,255,255,0.1)" },
  "&::-webkit-scrollbar-thumb": { background: "rgba(255,255,255,0.5)" },
};

const videoStyle = {
  width: "auto",
  height: "auto",
  maxWidth: "100%",
  objectFit: "cover",
  borderRadius: "10px",
  padding: "10px",
};

// ─── Release Card ─────────────────────────────────────────────────────────────
function ReleaseCard({ isMobile }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "flex-start",
        gap: isMobile ? "1.5rem" : "2.5rem",
        width: "100%",
      }}
    >
      {/* Cover */}
      <Box
        sx={{
          width: isMobile ? "100%" : "200px",
          maxWidth: isMobile ? "300px" : "200px",
          flexShrink: 0,
        }}
      >
        <img
          src={fey1999.cover}
          alt={fey1999.title}
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
          width: "100%",
        }}
      >
        {/* Title */}
        <Typography
          sx={{
            fontFamily: "Anton, sans-serif",
            fontSize: isMobile ? "2rem" : "2.8rem",
            lineHeight: 0.95,
            marginBottom: "0.75rem",
            letterSpacing: "1px",
          }}
        >
          {fey1999.title}
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
            paddingBottom: "0.75rem",
            marginBottom: "1rem",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Anton, sans-serif",
              fontSize: "1rem",
              letterSpacing: "1px",
            }}
          >
            {fey1999.date}
          </Typography>

          <Box sx={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {fey1999.links.map((link, idx) => (
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
                  height: "26px",
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
            fontSize: "1rem",
            letterSpacing: "1px",
            marginBottom: "0.25rem",
          }}
        >
          TRACKLIST ({fey1999.tracks.length.toString().padStart(2, "0")})
        </Typography>

        {/* Tracklist */}
        <Box sx={tracklistBoxSx}>
          {fey1999.tracks.map((track, idx) => (
            <Box
              key={idx}
              sx={{
                display: "flex",
                paddingY: "0.3rem",
                borderBottom: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <Typography
                sx={{
                  width: "35px",
                  fontFamily: "Anton, sans-serif",
                  fontSize: "0.85rem",
                  color: "rgba(255,255,255,0.7)",
                  letterSpacing: "1px",
                }}
              >
                {(idx + 1).toString().padStart(2, "0")}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Anton, sans-serif",
                  fontSize: "0.85rem",
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

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function GodPage() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

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
          height: "100vh",
          width: "100vw",
          backgroundColor: "black",
          backgroundImage: `url(${godBgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Dark overlay */}
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

        <Box sx={{ zIndex: 2000 }}>
          <TopLeftMobile />
        </Box>

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
          {/* Title + social links */}
          <Box
            sx={{
              height: "30%",
              width: "calc(100% - 110px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              left: "110px",
            }}
          >
            <Typography
              sx={{
                color: "red",
                fontFamily: "Anton, sans-serif",
                fontSize: "50px",
                textAlign: "center",
              }}
              mt={4}
            >
              99 GOD
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "0.5rem",
                marginTop: "1rem",
                marginLeft: "1rem",
                marginRight: "1rem",
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
                    fontSize: "12px",
                    whiteSpace: "nowrap",
                    "&:hover": { borderColor: "red", color: "red" },
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
          </Box>

          {/* Scrollable content */}
          <Box
            sx={{
              height: "100%",
              overflowY: "auto",
              padding: "2rem",
              zIndex: 10,
              marginTop: 5,
              marginBottom: 1,
            }}
          >
            {/* Bio EN */}
            <Typography
              sx={{
                color: "white",
                fontFamily: "Antonio, sans-serif",
                fontSize: "18px",
              }}
            >
              Hailing from Shanghai and splitting time between China and New
              York – 99 God is an anomaly in Chinese Hip-Hop. With a
              distinctively deep, gritty vocal style, he blends new school Trap
              beats with Neo-soul-infused melodic lines, reflecting his
              long-honed craft. Emerging as a top independent artist, his 2019
              debut "UFO" went viral, followed by collaborations with NINEONE
              and Al Rocco. His 2021 track "Bodega" blew up in Japan in 2023,
              and he later crafted Valorant's "Renegade" (Billboard-nominated),
              completed two solo tours (2024–2025), and released his debut
              mixtape "FEY1999" in 2025, solidifying his cross-border status.
            </Typography>

            {/* Bio CN */}
            <Typography
              sx={{
                color: "white",
                fontFamily: "Glow Sans SC Compressed, sans-serif",
                fontSize: "18px",
                marginTop: "1.5rem",
              }}
            >
              来自上海、常年往返中美的99
              God，是华语嘻哈场景的异类力量。他以独特深沉的磁性嗓音，融合新派Trap节奏与Neo-soul慵懒旋律，尽显深耕音乐的厚度。作为顶尖独立音乐人，2019年首单《UFO》爆红，后与乃万、Al
              Rocco等合作；2023年旧作《Bodega》登顶日本 viral
              榜，为《无畏契约》创作的《Renegade》获 Billboard
              提名。2024-2025年完成两轮个人巡演，推出首张Mixtape《飞1999》，稳固跨文化嘻哈力量地位。
            </Typography>

            {/* Releases */}
            <Typography sx={sectionHeaderSx}>RELEASES</Typography>
            <ReleaseCard isMobile={true} />

            {/* Videos */}
            <Typography sx={sectionHeaderSx}>VIDEOS</Typography>
            <Box mt={"-0.5rem"}>
              <GodVidsMobile />
            </Box>

            {/* Booking */}
            <Box
              sx={{
                display: "inline-flex",
                gap: "0.5rem",
                flexWrap: "wrap",
                marginTop: "1.5rem",
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
          </Box>

          {/* Instagram button */}
          <Button
            variant="outlined"
            sx={{
              position: "absolute",
              bottom: "2%",
              left: "2%",
              zIndex: 2000,
              color: "white",
              padding: "0.5rem 1rem",
              fontSize: "20px",
              borderRadius: "5px",
              borderColor: "white",
              "&:hover": { backgroundColor: "black", borderColor: "#ff0000" },
            }}
            onClick={() =>
              window.open(
                "https://www.instagram.com/yabish.yabish/",
                "_blank"
              )
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

          {/* Footer */}
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
              © YABISH 2025
            </Typography>
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
        backgroundImage: `url(${godBgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Dark overlay */}
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
        {/* Title + back button + social links */}
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
          <Button
            onClick={() => navigate("/artist")}
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

          <Typography
            sx={{
              color: "red",
              fontFamily: "Anton, sans-serif",
              fontSize: "50px",
              textAlign: "center",
            }}
          >
            99 GOD
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
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
                  fontSize: "14px",
                  "&:hover": { borderColor: "red", color: "red" },
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        </Box>

        {/* Scrollable content */}
        <Box
          sx={{
            height: "100%",
            overflowY: "auto",
            padding: "1rem",
            zIndex: 10,
          }}
        >
          {/* Bio EN */}
          <Typography
            sx={{
              color: "white",
              fontFamily: "Antonio, sans-serif",
              fontSize: "18px",
            }}
          >
            Hailing from Shanghai and splitting time between China and New York
            – 99 God is an anomaly in Chinese Hip-Hop. With a distinctively
            deep, gritty vocal style, he blends new school Trap beats with
            Neo-soul-infused melodic lines, reflecting his long-honed craft.
            Emerging as a top independent artist, his 2019 debut "UFO" went
            viral, followed by collaborations with NINEONE and Al Rocco. His
            2021 track "Bodega" blew up in Japan in 2023, and he later crafted
            Valorant's "Renegade" (Billboard-nominated), completed two solo
            tours (2024–2025), and released his debut mixtape "FEY1999" in
            2025, solidifying his cross-border status.
          </Typography>

          {/* Bio CN */}
          <Typography
            sx={{
              color: "white",
              fontFamily: "Glow Sans SC Compressed, sans-serif",
              fontSize: "18px",
              marginTop: "1.5rem",
            }}
          >
            来自上海、常年往返中美的99
            God，是华语嘻哈场景的异类力量。他以独特深沉的磁性嗓音，融合新派Trap节奏与Neo-soul慵懒旋律，尽显深耕音乐的厚度。作为顶尖独立音乐人，2019年首单《UFO》爆红，后与乃万、Al
            Rocco等合作；2023年旧作《Bodega》登顶日本 viral
            榜，为《无畏契约》创作的《Renegade》获 Billboard
            提名。2024-2025年完成两轮个人巡演，推出首张Mixtape《飞1999》，稳固跨文化嘻哈力量地位。
          </Typography>

          {/* Releases */}
          <Typography sx={sectionHeaderSx}>RELEASES</Typography>
          <ReleaseCard isMobile={false} />

          {/* Videos */}
          <Typography sx={sectionHeaderSx}>VIDEOS</Typography>
          <Box mt={"-2rem"}>
            <GodVids />
          </Box>

          {/* Booking */}
          <Box
            sx={{
              display: "inline-flex",
              gap: "0.5rem",
              flexWrap: "wrap",
              marginTop: "1.5rem",
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
        </Box>

        {/* Instagram button */}
        <Button
          variant="outlined"
          sx={{
            position: "absolute",
            bottom: "2%",
            left: "2%",
            zIndex: 2000,
            color: "white",
            padding: "0.5rem 1rem",
            fontSize: "20px",
            borderRadius: "5px",
            borderColor: "white",
            "&:hover": { backgroundColor: "black", borderColor: "#ff0000" },
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

        {/* Footer */}
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
            © YABISH 2025
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

// ─── Video Carousels ──────────────────────────────────────────────────────────
const videos = [video1, video2, video3, video4, video5];

function GodVids() {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: false,
    slidesToShow: 3,
    speed: 400,
  };

  return (
    <div
      className="slider-container"
      style={{ width: "95%", margin: "0 auto", padding: "1rem 0" }}
    >
      <Slider {...settings}>
        {videos.map((src, index) => (
          <div key={index}>
            <video
              src={src}
              autoPlay
              muted
              loop
              playsInline
              style={videoStyle}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

function GodVidsMobile() {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: false,
    slidesToShow: 1.5,
    speed: 400,
  };

  return (
    <div
      className="slider-container"
      style={{ width: "95%", margin: "0 auto", padding: "1rem 0" }}
    >
      <Slider {...settings}>
        {videos.map((src, index) => (
          <div key={index}>
            <video
              src={src}
              autoPlay
              muted
              loop
              playsInline
              style={videoStyle}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
