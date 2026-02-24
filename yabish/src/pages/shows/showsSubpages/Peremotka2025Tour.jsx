import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopLeft from "../../../utils/TopLeft";
import TopBarMobile from "../../../utils/TopBarMobile";
// import BGVideo from "../../BGVideo";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

// PLACEHOLDER IMAGES - Replace with actual Peremotka assets
const peremotka_poster =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/3a7e4b17-d605-4af5-907b-d68a88a69d00/public";

export default function Peremotka2025Tour() {
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
              YaBish&FLOWSONIX PRES.
              <br />
              「PEREMOTKA 2025 CHINA TOUR」
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
                src={peremotka_poster}
                alt="Peremotka tour poster"
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
              POSTER BY THX_047
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
                  url: "https://open.spotify.com/artist/3AwNBhYb8tZmJ5m0VIKHp2?si=i82bnTDORnGTSWXDBk_zUw",
                },
                {
                  text: "YOUTUBE",
                  url: "https://www.youtube.com/@peremotka_band",
                },
                {
                  text: "NETEASE CLOUD MUSIC",
                  url: "https://music.163.com/#/artist?id=13021419",
                },
                {
                  text: "INSTAGRAM",
                  url: "https://www.instagram.com/peremotka_band/",
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
              Peremotka, a band formed in 2015, consists of vocalists Oleg
              Lopaev and Nikita Mukhlynin, who met at Yekaterinburg University
              as mathematics students. Their transition to music began with
              campus performances. Bassist Pavel Shtondenko later joined the
              band, drawing inspiration from Vysotsky and Bruce Lee. Their early
              style leaned towards traditional rock, but later, influenced by
              other Russian bands, they shifted towards new wave.
              <br />
              <br />
              They gained recognition with their 2017 album "Ночь эпохи" (Night
              of the Times), and their 2020 album "Начало прекрасной дружбы"
              (The Beginning of a Beautiful Friendship) propelled them to
              stardom.
              <br />
              <br />
              They toured China in 2024 for the first time, and returned to the
              Strawberry Music Festival in 2025.
              <br />
              <br />
              In November 2025, PEREMOTKA celebrated their 10th anniversary with
              a new album, "Зелёный луч" (Green Light), started new tour. They
              traveled to six cities in China, joining forces with the
              Yekaterinburg-based new wave band Сова (Owl) as guest performers
              throughout the tour. Their blend of Russian coolness and
              gentleness brought the echoes of Yekaterinburg to those autumn
              nights.
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontFamily: "Glow Sans SC Compressed, sans-serif",
                fontSize: "18px",
              }}
            >
              <br />
              Перемотка (Peremotka) 倒带乐队成立于2015年，主唱Oleg Lopaev
              和Nikita Mukhlynin
              在叶卡捷琳堡大学结识，两人作为同属数学系学生，因校内演出开始转型为音乐人，后来贝斯手Pavel
              Shtondenko加入，以维索茨基和李小龙作为跨界灵感，早期风格偏向传统摇滚，后受俄罗斯其他乐队影响转向新浪潮。
              <br />
              <br />
              2017年发布专辑《Ночь
              эпохи》(时代之夜)被大家熟知，2020年发布专辑《Начало прекрасной
              дружбы》(美好友谊的开端)从此开始走红。
              <br />
              <br />
              2024年进来到中国演出，广受好评，2025再度登上草莓音乐节。
              <br />
              <br />
              2025年11月，PEREMOTKA迎来十周年，以全新专辑《Зелёный
              луч》（绿光）开启新一轮巡演。他们走过中国六座城市携手同样来自叶卡捷琳堡的新浪潮乐队Сова（鸮），作为巡演的全站嘉宾，融合俄系的冷冽与温柔，把叶卡捷琳堡的回声带向那些秋天的夜晚。
              <br />
              <br />
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <PeremotkaPicCarouselMobile />
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
                2025 PEREMOTKA CHINA TOUR DATES:
              </span>
              <br />
              <br />
              14,NOV - SHANGHAI - VAS ear
              <br />
              15,NOV - HANGZHOU - CH8 LIVEHOUSE
              <br />
              18,NOV - BEIJING - OMNISPACE
              <br />
              20,NOV - CHENGDU - NUSPACE
              <br />
              21,NOV - SHENZHEN - BO LIVE
              <br />
              22,NOV - GUANGZHOU - MAO LIVEHOUSE
              <br />
              <br />
              <span
                style={{ fontFamily: "Glow Sans SC Compressed, sans-serif" }}
              >
                统筹制作Production: YaBish&FLOWSONIX
                <br />
                巡演经理Tour Manager: 垃圾王/Ricardo/Ludar
                <br />
                摄影Photographer: mooncardsss / 杂色 / 度丧春梦Tout Simplement /
                平舟度川 / smallred
                <br />
                海报Poster: bonnie_x47
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
            YaBish&FLOWSONIX PRES.
            <br />
            「PEREMOTKA 2025 CHINA TOUR」
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
              src={peremotka_poster}
              alt="Peremotka tour poster"
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
            POSTER BY THX_047
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
                url: "https://open.spotify.com/artist/3AwNBhYb8tZmJ5m0VIKHp2?si=i82bnTDORnGTSWXDBk_zUw",
              },
              {
                text: "YOUTUBE",
                url: "https://www.youtube.com/@peremotka_band",
              },
              {
                text: "NETEASE CLOUD MUSIC",
                url: "https://music.163.com/#/artist?id=13021419",
              },
              {
                text: "INSTAGRAM",
                url: "https://www.instagram.com/peremotka_band/",
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
            Peremotka, a band formed in 2015, consists of vocalists Oleg Lopaev
            and Nikita Mukhlynin, who met at Yekaterinburg University as
            mathematics students. Their transition to music began with campus
            performances. Bassist Pavel Shtondenko later joined the band,
            drawing inspiration from Vysotsky and Bruce Lee. Their early style
            leaned towards traditional rock, but later, influenced by other
            Russian bands, they shifted towards new wave.
            <br />
            <br />
            They gained recognition with their 2017 album "Ночь эпохи" (Night of
            the Times), and their 2020 album "Начало прекрасной дружбы" (The
            Beginning of a Beautiful Friendship) propelled them to stardom.
            <br />
            <br />
            They toured China in 2024 for the first time, and returned to the
            Strawberry Music Festival in 2025.
            <br />
            <br />
            In November 2025, PEREMOTKA celebrated their 10th anniversary with a
            new album, "Зелёный луч" (Green Light), started new tour. They
            traveled to six cities in China, joining forces with the
            Yekaterinburg-based new wave band Сова (Owl) as guest performers
            throughout the tour. Their blend of Russian coolness and gentleness
            brought the echoes of Yekaterinburg to those autumn nights.
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontFamily: "Glow Sans SC Compressed, sans-serif",
              fontSize: "18px",
            }}
          >
            <br />
            Перемотка (Peremotka) 倒带乐队成立于2015年，主唱Oleg Lopaev 和Nikita
            Mukhlynin
            在叶卡捷琳堡大学结识，两人作为同属数学系学生，因校内演出开始转型为音乐人，后来贝斯手Pavel
            Shtondenko加入，以维索茨基和李小龙作为跨界灵感，早期风格偏向传统摇滚，后受俄罗斯其他乐队影响转向新浪潮。
            <br />
            <br />
            2017年发布专辑《Ночь
            эпохи》(时代之夜)被大家熟知，2020年发布专辑《Начало прекрасной
            дружбы》(美好友谊的开端)从此开始走红。
            <br />
            <br />
            2024年进来到中国演出，广受好评，2025再度登上草莓音乐节。
            <br />
            <br />
            2025年11月，PEREMOTKA迎来十周年，以全新专辑《Зелёный
            луч》（绿光）开启新一轮巡演。他们走过中国六座城市携手同样来自叶卡捷琳堡的新浪潮乐队Сова（鸮），作为巡演的全站嘉宾，融合俄系的冷冽与温柔，把叶卡捷琳堡的回声带向那些秋天的夜晚。
            <br />
            <br />
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <PeremotkaPicCarouselDesktop />
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
              2025 PEREMOTKA CHINA TOUR DATES:
            </span>
            <br />
            <br />
            14,NOV - SHANGHAI - VAS ear
            <br />
            15,NOV - HANGZHOU - CH8 LIVEHOUSE
            <br />
            18,NOV - BEIJING - OMNISPACE
            <br />
            20,NOV - CHENGDU - NUSPACE
            <br />
            21,NOV - SHENZHEN - BO LIVE
            <br />
            22,NOV - GUANGZHOU - MAO LIVEHOUSE
            <br />
            <br />
            <span style={{ fontFamily: "Glow Sans SC Compressed, sans-serif" }}>
              统筹制作Production: YaBish&FLOWSONIX
              <br />
              巡演经理Tour Manager: 垃圾王/Ricardo/Ludar
              <br />
              摄影Photographer: mooncardsss / 杂色 / 度丧春梦Tout Simplement /
              平舟度川 / smallred
              <br />
              海报Poster: bonnie_x47
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

const Image1 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/1ad0584e-e20d-40e1-9ac9-4726de66c500/public";
const Image2 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/ad234e94-358d-4b1f-73b2-e4130be54500/public";
const Image3 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/fa362317-4099-4200-a60e-cc0af1302100/public";
const Image4 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/cac24792-3561-4d6b-a9dd-848f8a9ae900/public";
const Image5 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/4a58e353-fab5-41db-9384-5423dd273200/public";
const Image6 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/2f56ec68-4010-4d8c-6132-f3e9081a0200/public";
const Image7 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/6a9bc83b-b6d1-4630-4660-5cbe91679b00/public";
const Image8 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/7e8d0b25-4ae0-4072-fac0-70da5896fd00/public";
const Image9 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/4ef7d3dd-2000-473e-6db3-78e9c2456800/public";
const Image10 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/0217dfbf-6bc7-4eed-e959-abbb9e9e9f00/public";
const Image11 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/d3bb36f1-5d3b-48f8-3d7c-0551650bb600/public";
const Image12 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/980ae66b-968f-4e3c-5f7b-28d64d767100/public";
const Image13 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/341af7d9-f428-4778-4831-e89ecc854000/public";
const Image14 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/8ec39c04-8d9f-4f34-bfd5-0c86a335a100/public";
const Image15 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/ade7220e-afdf-4f29-cbeb-70ed68ce2700/public";
const Image16 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/06861bf4-2a5f-4b8a-dd92-70678fa37a00/public";
const Image17 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/786f6f19-4dfe-4b39-c6ec-5c9f832dcf00/public";
const Image18 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/3ece1bfb-e533-4314-5860-04dca5974b00/public";
const Image19 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/1f9c84f2-7262-4af7-69f5-110f2550d900/public";
const Image20 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/4c9b91f0-b239-4cbb-4de9-d338aebbc000/public";

function PeremotkaPics() {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: false,
    centerPadding: "120px",
    slidesToShow: 3,
    speed: 400,
  };

  const images = shuffleArray([Image1, Image2, Image3, Image4, Image5, Image6]);

  return (
    <div
      className="slider-container"
      style={{
        width: "100%",
        margin: "0 auto",
        padding: "1rem 0",
        // overflow: "hidden", // Prevent default scrolling
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

function shuffleArray(array) {
  return array;
  // return array.sort(() => Math.random() - 0.5);
}

function PeremotkaPicCarouselDesktop() {
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
    Image18,
    Image19,
    Image20,
  ]);

  return (
    <div
      className="slider-container"
      style={{
        width: "95%",
        margin: "0 auto",
        padding: "1rem 0",
        // overflow: "hidden", // Prevent default scrolling
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

function PeremotkaPicCarouselMobile() {
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
    Image18,
    Image19,
    Image20,
  ]);

  return (
    <div
      className="slider-container"
      style={{
        width: "95%",
        margin: "0 auto",
        padding: "1rem 0",
        // overflow: "hidden", // Prevent default scrolling
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
