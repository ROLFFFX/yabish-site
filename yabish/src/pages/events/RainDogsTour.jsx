import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import YABISHLogo from "../../assets/YABISHlogo.png";
import bgvideo from "../../assets/bgvideo.webm";

const rg_tour_poster =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/2b0e2bae-d7d7-489d-4006-9773f6129e00/public";

export default function RainDogsTour() {
  const navigate = useNavigate();
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
      }}
    >
      <video
        src={bgvideo}
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1,
        }}
      />
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
            onClick={() => navigate("/events")}
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
            YaBish Presents.|2025 Rain Dogs CHINA TOUR
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
              src={rg_tour_poster}
              alt="rain dogs tour poster"
              style={{ width: "40%", height: "auto" }}
            ></img>
          </Box>
          <Typography
            sx={{
              color: "white",
              fontFamily: "Antonio, sans-serif",
              fontSize: "18px",
              textAlign: "center",
            }}
          >
            {/* <br /> */}
            Poster By Kyra Han
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
                text: "Spotify",
                url: "https://open.spotify.com/artist/12DUKVqy5ry0UYK6lJtAMO?si=Rpj_cYgRSl2KS3DrpfNeEw",
              },

              { text: "Youtube", url: "https://www.youtube.com/@raindogs9971" },
              {
                text: "Instagram",
                url: "https://www.instagram.com/raindogs._/",
              },
              {
                text: "WangYiYun",
                url: "https://music.163.com/#/artist?id=794144",
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
            Rain Dogs are an electronic post punk trio from Melbourne,
            Australia. Their first self-titled EP, a synth heavy, gothic
            production was released in 2021 to underground acclaim.
            <br />
            <br />
            An elusive band, Rain Dogs' rare live show is known for its haunting
            mood and atmosphere, producing a sound reminiscent of Suicide and
            Depeche Mode. In 2024 they have released three new singles: Nights
            are Lonely, More than Desire, and Disintegrate, from an upcoming
            album which is set to be released in 2025.
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontFamily: "Glow Sans SC Compressed, sans-serif",
              fontSize: "18px",
            }}
          >
            Rain Dogs 是⼀⽀来⾃澳⼤利亚墨尔本的电⼦后朋克三⼈组。他们的⾸张同名
            EP 是⼀⾸合成器重⾦属、哥特⻛格的⾳乐，于 2021
            年发⾏，在地下⾳乐界⼴受好评。
            <br />
            <br />
            Rain Dogs
            是⼀⽀难以捉摸的乐队，他们罕⻅的现场表演以其令⼈难以忘怀的情绪和氛围⽽闻名，其声⾳让⼈想起
            Suicide 和 Depeche Mode。 <br />
            <br />
            2024 年，他们发⾏了三⾸新单曲：《Nights are Lonely》、《More than
            Desire》和《Disintegrate》，这些单曲来⾃即将于 2025 年发⾏的专辑。
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontFamily: "Anton, sans-serif",
              fontSize: "18px",
            }}
          >
            <br />
            购票Tickets
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontFamily: "Antonio, sans-serif",
              fontSize: "18px",
            }}
          >
            <span style={{ fontWeight: "bold" }}>
              2025 Rain Dogs CHINA TOUR
            </span>{" "}
            <br />
            02/21周五Fri（嘉宾GUEST：黑甜一枕） 杭州HANGZHOU·酒球会9club
            <br />
            02/22周六Sat（嘉宾GUEST：UNTERWASSER在水下）
            <br />
            上海SHANGHAI·育音堂SpecTers 02/23周日Sun（嘉宾GUEST：Taiga）
            <br />
            成都CHENGDU·NUSPACE
          </Typography>
          {/* <Box sx={{ display: "flex", justifyContent: "center" }} padding={4}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/MqhJ0vXH9hM?si=QIZ3ZA_fmDrpCYGI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </Box>
          <Box padding={2}>
            <RainDogsPics />
          </Box> */}
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

function TopLeft() {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: "2%",
          left: "2%",
          height: "30%",
          backgroundColor: "transparent",
          zIndex: 2000,
          padding: "1rem",
        }}
      >
        {/* Logo img */}
        <motion.div whileHover={{ scale: 1.1 }}>
          <img
            src={YABISHLogo}
            alt="YABISH Logo"
            style={{
              width: "110px",
              height: "auto",
              marginBottom: "1rem",
              marginLeft: -10,
            }}
            onClick={() => {
              navigate("/home");
            }}
          />
        </motion.div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          {/* Artists Router */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            onClick={() => {
              navigate("/artist");
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontFamily: "Anton, sans-serif",
                fontSize: "30px",
                transition: "color 0.3s ease-in-out",
                "&:hover": {
                  color: "#ff0000",
                },
                userSelect: "none",
              }}
            >
              Artists
            </Typography>
          </motion.div>
          {/* Events Route */}
          <motion.div whileHover={{ scale: 1.1 }}>
            <Typography
              sx={{
                color: "white",
                fontFamily: "Anton, sans-serif",
                fontSize: "30px",
                transition: "color 0.3s ease-in-out",
                "&:hover": {
                  color: "#ff0000",
                },
                userSelect: "none",
                textDecoration: "underline",
              }}
            >
              Events
            </Typography>
          </motion.div>
          {/* About Route */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            onClick={() => {
              navigate("/about");
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontFamily: "Anton, sans-serif",
                fontSize: "30px",
                transition: "color 0.3s ease-in-out",
                "&:hover": {
                  color: "#ff0000",
                },
                userSelect: "none",
              }}
            >
              About
            </Typography>
          </motion.div>
        </Box>
      </Box>
      <Button
        variant="outlined"
        sx={{
          position: "absolute",
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
          zIndex: 200,
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontFamily: "Anton, sans-serif",
            fontSize: "16px",
            transition: "color 0.2s ease-in-out",
            "&:hover": {
              color: "#ff0000",
            },
          }}
          onClick={() =>
            window.open("https://www.instagram.com/yabish.yabish/", "_blank")
          }
        >
          INSTAGRAM
        </Typography>
      </Button>
    </>
  );
}

const Image1 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/8a7f06bd-e829-4e52-687b-f5914e5bb100/public";
const Image2 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/0df94c94-6a94-4277-0020-90c8bdea4700/public";
const Image3 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/00bcbcab-bb71-4f2b-e27b-6f32f984e500/public";
const Image4 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/cca96bef-18f4-429a-28a8-12ef08114b00/public";
const Image5 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/60191fd2-061e-4d77-1f95-3d3bfe698400/public";
const Image6 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/9f5b77b7-128d-457b-4de9-dfbb903c6d00/public";

function shuffleArray(array) {
  return array;
  // return array.sort(() => Math.random() - 0.5);
}

function RainDogsPics() {
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
