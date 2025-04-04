import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import YABISHLogo from "../../assets/YABISHlogo.png";
import BGVideo from "../BGVideo";

const rg_tour_poster =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/eef1a360-fa7d-4701-7a32-93b5cf723400/public";
const rg_tour_ticket =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/2790fa6e-f4da-493a-1d21-b82dfdb2bc00/public";

export default function RainDogsTour() {
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
          scrollbarWidth: "none", // Firefox
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
              height: {
                xs: "60%",
              },
              width: "calc(100% - 120px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              left: "120px",
            }}
          >
            {/* Title */}
            <Typography
              sx={{
                color: "red",
                fontFamily: "Anton, sans-serif",
                fontSize: "35px",
                textAlign: "center",
              }}
            >
              YaBish Pres.「2025 Rain Dogs CHINA TOUR」
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
              POSTER BY KYRA HAN
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

                {
                  text: "Youtube",
                  url: "https://www.youtube.com/@raindogs9971",
                },
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
              An elusive band, Rain Dogs' rare live show is known for its
              haunting mood and atmosphere, producing a sound reminiscent of
              Suicide and Depeche Mode. In 2024 they have released three new
              singles: Nights are Lonely, More than Desire, and Disintegrate,
              from an upcoming album which is set to be released in 2025.
              <br />
              <br /> At the beginning of the Year of the Snake in 2025, Rain
              Dogs stepped onto the Chinese stage for the first time, bringing
              their much-anticipated mini tour in China. From Shanghai to
              hangzhou to Chengdu, this band from the southern hemisphere set
              off a new year's music craze with live performances, inviting
              Chinese music fans to experience their unique music charm
              together.
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontFamily: "Glow Sans SC Compressed, sans-serif",
                fontSize: "18px",
              }}
            >
              <br />
              Rain Dogs
              是⼀⽀来⾃澳⼤利亚墨尔本的电⼦后朋克三⼈组。他们的⾸张同名 EP
              是⼀⾸合成器重⾦属、哥特⻛格的⾳乐，于 2021
              年发⾏，在地下⾳乐界⼴受好评。
              <br />
              <br />
              Rain Dogs
              是⼀⽀难以捉摸的乐队，他们罕⻅的现场表演以其令⼈难以忘怀的情绪和氛围⽽闻名，其声⾳让⼈想起
              Suicide 和 Depeche Mode。 <br />
              <br />
              2024 年，他们发⾏了三⾸新单曲：《Nights are Lonely》、《More than
              Desire》和《Disintegrate》，这些单曲来⾃即将于 2025 年发⾏的专辑。
              <br />
              <br />
              在2025蛇年开年之时，Rain
              Dogs首次踏上中国的舞台，带来他们令人期待的中国mini巡演。上海、杭州再到成都，这支来自南半球的乐队以现场演出引爆新年的音乐热潮，邀请了中国的乐迷一起感受他们音乐的独特魅力。
              <br />
              <br />
            </Typography>
            {/* flag: tour pics box */}
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <RainDogsTourPicCarouselMobile />
            </Box>

            <Typography
              sx={{
                color: "white",
                fontFamily: "Glow Sans SC Compressed, sans-serif",
                fontSize: "16px",
              }}
            >
              <span style={{ fontWeight: "bold" }}>
                <br />
                2025 Rain Dogs CHINA TOUR:
              </span>{" "}
              <br />
              <br />
              02/21周五Fri（嘉宾GUEST：
              <Typography
                component="span" // Prevents line break
                sx={{
                  color: "white",
                  fontFamily: "Antonio, sans-serif",
                  textDecoration: "underline",
                  transition: "color 0.2s ease-in-out",
                  fontSize: "16px",
                  "&:hover": {
                    color: "#ff0000",
                  },
                }}
                onClick={() =>
                  window.open(
                    "https://open.spotify.com/artist/3Env07M1XTj7ntZxzavVq9?si=Ezx6RpsZQTOVwlW_facGSw",
                    "_blank"
                  )
                }
              >
                黑甜一枕
              </Typography>
              ） 杭州HANGZHOU·酒球会9club
              <br />
              02/22周六Sat（嘉宾GUEST：
              <Typography
                component="span" // Prevents line break
                sx={{
                  color: "white",
                  fontFamily: "Antonio, sans-serif",
                  textDecoration: "underline",
                  transition: "color 0.2s ease-in-out",
                  fontSize: "16px",
                  "&:hover": {
                    color: "#ff0000",
                  },
                }}
                onClick={() =>
                  window.open(
                    "https://music.163.com/#/artist?id=52196524",
                    "_blank"
                  )
                }
              >
                UNTERWASSER在水下
              </Typography>
              ） 上海SHANGHAI·育音堂SpecTers <br />
              02/23周日Sun（嘉宾GUEST：
              <Typography
                component="span" // Prevents line break
                sx={{
                  color: "white",
                  fontFamily: "Antonio, sans-serif",
                  textDecoration: "underline",
                  transition: "color 0.2s ease-in-out",
                  fontSize: "16px",
                  "&:hover": {
                    color: "#ff0000",
                  },
                }}
                onClick={() =>
                  window.open(
                    "https://open.spotify.com/artist/2HqXQTZQ92lpBQkFgUNRr7?si=z1uNAaARR_Secrl6aVvPSA",
                    "_blank"
                  )
                }
              >
                Taiga
              </Typography>
              ） 成都CHENGDU·NUSPACE
              <br />
              <br />
              统筹制作Production:YaBish <br />
              巡演经理/制作统筹Tour Manager:Ludar@YaBish
              <br />
              成都场摄影师Photographer（CHENGDU）：平舟度川 <br />
              巡演助理Tour Assistant:猪蛋挞 <br />
              <br />
              采访interview： <br />
              <Typography
                component="span" // Prevents line break
                sx={{
                  color: "white",
                  fontFamily: "Antonio, sans-serif",
                  textDecoration: "underline",
                  transition: "color 0.2s ease-in-out",
                  fontSize: "16px",
                  "&:hover": {
                    color: "#ff0000",
                  },
                }}
                onClick={() =>
                  window.open(
                    "https://mp.weixin.qq.com/s/sPEiQFej57h8OF-sh9qDqQ",
                    "_blank"
                  )
                }
              >
                Rain Dogs：在工业质感与浪漫张力之间，探索后朋克的无限可能
              </Typography>
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
            YaBish Pres.「2025 Rain Dogs CHINA TOUR」
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
            POSTER BY KYRA HAN
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

              {
                text: "Youtube",
                url: "https://www.youtube.com/@raindogs9971",
              },
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
            <br />
            <br /> At the beginning of the Year of the Snake in 2025, Rain Dogs
            stepped onto the Chinese stage for the first time, bringing their
            much-anticipated mini tour in China. From Shanghai to Hangzhou to
            Chengdu, this band from the southern hemisphere set off a new year's
            music craze with live performances, inviting Chinese music fans to
            experience their unique music charm together.
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontFamily: "Glow Sans SC Compressed, sans-serif",
              fontSize: "18px",
            }}
          >
            <br />
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
            <br />
            <br />
            在2025蛇年开年之时，Rain
            Dogs首次踏上中国的舞台，带来他们令人期待的中国mini巡演。上海、杭州再到成都，这支来自南半球的乐队以现场演出引爆新年的音乐热潮，邀请了中国的乐迷一起感受他们音乐的独特魅力。
            <br />
            <br />
          </Typography>
          {/* flag: raind dogs tour pics */}
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <RainDogsTourPicCarouselDesktop />
          </Box>

          <Typography
            sx={{
              color: "white",
              fontFamily: "Glow Sans SC Compressed, sans-serif",
              fontSize: "16px",
            }}
          >
            <span style={{ fontWeight: "bold" }}>
              <br />
              2025 Rain Dogs CHINA TOUR:
            </span>{" "}
            <br />
            <br />
            02/21周五Fri（嘉宾GUEST：
            <Typography
              component="span" // Prevents line break
              sx={{
                color: "white",
                fontFamily: "Antonio, sans-serif",
                textDecoration: "underline",
                transition: "color 0.2s ease-in-out",
                fontSize: "16px",
                "&:hover": {
                  color: "#ff0000",
                },
              }}
              onClick={() =>
                window.open(
                  "https://open.spotify.com/artist/3Env07M1XTj7ntZxzavVq9?si=Ezx6RpsZQTOVwlW_facGSw",
                  "_blank"
                )
              }
            >
              黑甜一枕
            </Typography>
            ） 杭州HANGZHOU·酒球会9club
            <br />
            02/22周六Sat（嘉宾GUEST：
            <Typography
              component="span" // Prevents line break
              sx={{
                color: "white",
                fontFamily: "Antonio, sans-serif",
                textDecoration: "underline",
                transition: "color 0.2s ease-in-out",
                fontSize: "16px",
                "&:hover": {
                  color: "#ff0000",
                },
              }}
              onClick={() =>
                window.open(
                  "https://music.163.com/#/artist?id=52196524",
                  "_blank"
                )
              }
            >
              UNTERWASSER在水下
            </Typography>
            ） 上海SHANGHAI·育音堂SpecTers <br />
            02/23周日Sun（嘉宾GUEST：
            <Typography
              component="span" // Prevents line break
              sx={{
                color: "white",
                fontFamily: "Antonio, sans-serif",
                textDecoration: "underline",
                transition: "color 0.2s ease-in-out",
                fontSize: "16px",
                "&:hover": {
                  color: "#ff0000",
                },
              }}
              onClick={() =>
                window.open(
                  "https://open.spotify.com/artist/2HqXQTZQ92lpBQkFgUNRr7?si=z1uNAaARR_Secrl6aVvPSA",
                  "_blank"
                )
              }
            >
              Taiga
            </Typography>
            ） 成都CHENGDU·NUSPACE
            <br />
            <br />
            统筹制作Production:YaBish <br />
            巡演经理/制作统筹Tour Manager:Ludar@YaBish
            <br />
            成都场摄影师Photographer（CHENGDU）：平舟度川 <br />
            巡演助理Tour Assistant:猪蛋挞
            <br />
            <br />
            采访interview： <br />
            <Typography
              component="span" // Prevents line break
              sx={{
                color: "white",
                fontFamily: "Antonio, sans-serif",
                textDecoration: "underline",
                transition: "color 0.2s ease-in-out",
                fontSize: "16px",
                "&:hover": {
                  color: "#ff0000",
                },
              }}
              onClick={() =>
                window.open(
                  "https://mp.weixin.qq.com/s/sPEiQFej57h8OF-sh9qDqQ",
                  "_blank"
                )
              }
            >
              Rain Dogs：在工业质感与浪漫张力之间，探索后朋克的无限可能
            </Typography>
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

function TopLeftMobile() {
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

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          {/* Artists Router */}
          <Box
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
          </Box>
          {/* Events Route */}
          <Box
            onClick={() => {
              navigate("/events");
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
                textDecoration: "underline",
              }}
            >
              Events
            </Typography>
          </Box>
          {/* About Route */}
          <Box
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
          </Box>
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
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/514a36a8-1624-4048-a8ef-881ec4424700/public";
const Image2 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/8dc99841-9e81-4296-c751-9f49ce214e00/public";
const Image3 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/b4541f0c-ec8a-4354-a2ae-55a26d11fc00/public";
const Image4 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/4414477e-9d0a-477a-fb8b-737ec51b1100/public";
const Image5 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/d41b5bf8-4b5a-47dc-2a66-a06093a2cf00/public";
const Image6 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/f2085ded-6ed5-4dcb-30b5-42fbd79b6200/public";
const Image7 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/febde934-54b4-4fa7-bf0d-462868b1f400/public";
const Image8 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/4b949df9-5aa1-4033-3646-c160974c9900/public";
const Image9 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/9205306a-2735-4345-86a9-7a14b2e9bf00/public";
const Image10 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/c031341e-61e6-4901-badb-7739e0cd5000/public";
const Image11 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/a13c6156-3209-4b23-9b3f-8f50762d7300/public";
const Image12 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/aff327bd-5f81-43b0-dbe6-11ec246f0700/public";
const Image13 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/4f93abf9-0743-4eda-63cb-426ae0642400/public";
const Image14 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/2f1ff168-2304-4655-973e-d067fd2f4500/public";
const Image15 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/c571f626-432f-4bf4-7537-efd13b2bd600/public";
const Image16 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/c373d5f9-d491-4150-d122-1b945f466300/public";
const Image17 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/5bb9576a-624e-4510-1eb7-c3503e6a4c00/public";
const Image18 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/e2192a45-42ea-4423-6420-8b629e3dd200/public";
const Image19 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/77fc5a9d-0cb0-4d21-ec03-a98c0289ff00/public";
const Image20 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/eff0f48d-cf03-4ecc-47ef-c56885ddea00/public";
const Image21 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/15923630-203f-4e33-4a77-2e6f7ec92300/public";
const Image22 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/a4aa904e-c99c-409b-d60d-2d4165121f00/public";
const Image23 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/f2c93fe5-537c-456b-68a2-6750412ffb00/public";

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

function shuffleArray(array) {
  return array;
  // return array.sort(() => Math.random() - 0.5);
}

function RainDogsTourPicCarouselDesktop() {
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
    Image21,
    Image22,
    Image23,
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

function RainDogsTourPicCarouselMobile() {
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
    Image21,
    Image22,
    Image23,
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
