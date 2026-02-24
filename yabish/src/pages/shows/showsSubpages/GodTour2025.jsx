import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import TopLeft from "../../../utils/TopLeft";
import TopBarMobile from "../../../utils/TopBarMobile";
// import BGVideo from "../../BGVideo";

// PLACEHOLDER IMAGE - Replace with actual 99 God Tour Poster
const god_tour_poster =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/964e103a-15d2-48fd-536f-e1a0aa16bf00/public";

export default function GodTour2025() {
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
        {/* <BGVideo /> */}
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
        <TopBarMobile />
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
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "5rem",
              paddingBottom: "1rem",
              paddingLeft: "1rem",
              paddingRight: "1rem",
            }}
          >
            <Typography
              sx={{
                color: "red",
                fontFamily: "Anton, sans-serif",
                fontSize: "35px",
                textAlign: "center",
                lineHeight: 1.2,
              }}
            >
              99 God
              <br />
              「飞1999」2025新专辑巡演
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
                src={god_tour_poster}
                alt="99 God tour poster"
                style={{ width: "40%", height: "auto" }}
              />
            </Box>

            <Typography
              sx={{
                color: "white",
                fontFamily: "Antonio, sans-serif",
                fontSize: "18px",
              }}
            >
              <br />
              In 2024, 99 God successfully completed his first national tour as
              an independent artist, meeting his fans up close for the first
              time and adding a brilliant chapter to his already thriving music
              career.
              <br />
              <br />
              In 2025, 99 God returned with his debut mixtape "FEY1999" and
              embarked on his second self-titled album tour!
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontFamily: "Glow Sans SC Compressed, sans-serif",
                fontSize: "18px",
              }}
            >
              <br />
              2024年，99
              God顺利完成了作为独立音乐人以来的第一轮全国巡演，第一次和粉丝们近距离见面，为他炙手可热的音乐生涯增添了璀璨的一页。
              <br />
              <br />
              2025年，99
              God带着首张Mixtape「飞1999」回归，并开启了他的第二次专辑同名巡演！
              <br />
              <br />
            </Typography>

            {/* Carousel */}
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <GodTourPicCarouselMobile />
            </Box>

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
                2025 99 God TOUR DATES:
              </span>
              <br />
              <br />
              01,AUG - SHANGHAI - VAS ear
              <br />
              02,AUG - HANGZHOU - 9 CLUB
              <br />
              15,AUG - BEIJING - 乐空间
              <br />
              16,AUG - TIANJIN - 琉璃SPACE
              <br />
              22,AUG - WUHAN - ThreeLive
              <br />
              23,AUG - NANJING - 1701 Live House
              <br />
              22,AUG - XIAMEN - RealLive And Books
              <br />
              22,AUG - SHENZHEN - HOU LIVE
              <br />
              <br />
              <span
                style={{ fontFamily: "Glow Sans SC Compressed, sans-serif" }}
              >
                巡演主办Tour Arranger：North Nose Production & YaBish
                <br />
                舞台制作Production：North Nose Production
                <br />
                舞台设计：咕咕鸡 & 柱（NNP CREW）
                <br />
                影像骑士Visual Jockey: 柱
                <br />
                VJ制作Production: 达思奕 / Kyra / Tage
                <br />
                DJ：kongbb
                <br />
                巡演经理Tour Manager：Jordan & 宋越
                <br />
                摄影Photographer：Lucky_J / BeUlove / 度丧春梦Tout Simplement /
                jing / NyxIris- & 耿耿
                <br />
                艺人经纪：Ludar@YaBish
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
      {/* <BGVideo /> */}
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
              lineHeight: 1.2,
            }}
          >
            99 God
            <br />
            「飞1999」2025新专辑巡演
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
              src={god_tour_poster}
              alt="99 God tour poster"
              style={{ width: "40%", height: "auto" }}
            />
          </Box>

          <Typography
            sx={{
              color: "white",
              fontFamily: "Antonio, sans-serif",
              fontSize: "18px",
            }}
          >
            <br />
            In 2024, 99 God successfully completed his first national tour as an
            independent artist, meeting his fans up close for the first time and
            adding a brilliant chapter to his already thriving music career.
            <br />
            <br />
            In 2025, 99 God returned with his debut mixtape "FEY1999" and
            embarked on his second self-titled album tour!
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontFamily: "Glow Sans SC Compressed, sans-serif",
              fontSize: "18px",
            }}
          >
            <br />
            2024年，99
            God顺利完成了作为独立音乐人以来的第一轮全国巡演，第一次和粉丝们近距离见面，为他炙手可热的音乐生涯增添了璀璨的一页。
            <br />
            <br />
            2025年，99
            God带着首张Mixtape「飞1999」回归，并开启了他的第二次专辑同名巡演！
            <br />
            <br />
          </Typography>

          {/* Carousel */}
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <GodTourPicCarouselDesktop />
          </Box>

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
              2025 99 God TOUR DATES:
            </span>
            <br />
            <br />
            01,AUG - SHANGHAI - VAS ear
            <br />
            02,AUG - HANGZHOU - 9 CLUB
            <br />
            15,AUG - BEIJING - 乐空间
            <br />
            16,AUG - TIANJIN - 琉璃SPACE
            <br />
            22,AUG - WUHAN - ThreeLive
            <br />
            23,AUG - NANJING - 1701 Live House
            <br />
            22,AUG - XIAMEN - RealLive And Books
            <br />
            22,AUG - SHENZHEN - HOU LIVE
            <br />
            <br />
            <span style={{ fontFamily: "Glow Sans SC Compressed, sans-serif" }}>
              巡演主办Tour Arranger：North Nose Production & YaBish
              <br />
              舞台制作Production：North Nose Production
              <br />
              舞台设计：咕咕鸡 & 柱（NNP CREW）
              <br />
              影像骑士Visual Jockey: 柱
              <br />
              VJ制作Production: 达思奕 / Kyra / Tage
              <br />
              DJ：kongbb
              <br />
              巡演经理Tour Manager：Jordan & 宋越
              <br />
              摄影Photographer：Lucky_J / BeUlove / 度丧春梦Tout Simplement /
              jing / NyxIris- & 耿耿
              <br />
              艺人经纪：Ludar@YaBish
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

// ######################################################### Images & Carousel
// Replace with actual 99 God tour images
const Image1 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/27c3dc28-e317-455e-5c38-532a4acc6f00/public";
const Image2 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/9da526af-b79b-4eff-ed98-01ab14564e00/public";
const Image3 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/2f1660d0-580f-46ac-0f87-f4e1cfde7d00/public";
const Image4 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/285cf12a-c91c-4ce5-d6e0-992bb290e000/public";
const Image5 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/94669730-d0a7-4bee-b18d-226bb3f60400/public";
const Image6 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/f6e0c066-9f6e-40cc-f38b-da8ac049d900/public";
const Image7 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/4515c36a-b978-4494-8f75-ef7171596300/public";
const Image8 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/fdb67365-2790-4353-88ee-3a6800793500/public";
const Image9 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/a82c1608-26d8-420f-c9fc-969e8a930400/public";
const Image10 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/50c0f728-2dfa-4fbb-436f-9d0024255300/public";
const Image11 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/22234388-0cbc-415a-03be-5b92eee0c600/public";
const Image12 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/f7942a34-a1fe-46b1-d823-e5e5d1132200/public";
const Image13 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/0089056e-7ada-45ca-50ca-1b0cf604c600/public";
const Image14 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/1152b713-19ae-423e-a0e6-ca4b697dcf00/public";
const Image15 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/24f0510f-03d7-4211-bf68-c7b084f42000/public";
const Image16 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/9d24d727-2306-4e9e-a843-3e09ff57bf00/public";
const Image17 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/4a9939c5-b65e-4a52-2d64-4ec47e66f800/public";

function shuffleArray(array) {
  return array;
}

function GodTourPicCarouselDesktop() {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: false,
    centerPadding: "120px",
    slidesToShow: 3,
    speed: 400,
  };

  const images = shuffleArray([
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
    Image12,
    Image13,
    Image14,
    Image15,
    Image16,
    Image17,
  ]);

  return (
    <div
      className="slider-container"
      style={{
        width: "95%",
        margin: "0 auto",
        padding: "1rem 0",
      }}
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "10px",
                padding: "10px",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

function GodTourPicCarouselMobile() {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: false,
    centerPadding: "120px",
    slidesToShow: 1.5,
    speed: 400,
  };

  const images = shuffleArray([
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
    Image12,
    Image13,
    Image14,
    Image15,
    Image16,
    Image17,
  ]);

  return (
    <div
      className="slider-container"
      style={{
        width: "95%",
        margin: "0 auto",
        padding: "1rem 0",
      }}
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "10px",
                padding: "10px",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
