import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import YABISHLogo from "../../assets/YABISHlogo.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const yakabg =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/c82c466f-6202-4717-24db-409afc75cb00/public";
const Image1 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/8cfd66f3-8962-40a2-b7b6-f1af5696d300/public";
const Image2 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/84b30ee5-1770-4bf9-3a8f-f23ea22b3f00/public";
const Image4 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/bd0b29d3-2bd4-4921-e347-e99e0d036000/public";
const Image5 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/74cbe2b9-190a-41ea-8667-dcca854c4000/public";
const Image6 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/08c72ca0-4dee-418f-2ad9-33943a22da00/public";

export default function YakaPage() {
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
          backgroundImage: `url(${yakabg})`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
          {/* Title Section */}
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
            {/* Title */}
            <Typography
              sx={{
                color: "red",
                fontFamily: "Anton, sans-serif",
                fontSize: "50px",
                textAlign: "center",
              }}
              mt={4}
            >
              YAKA
            </Typography>

            {/* Buttons Section */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap", // Enables wrapping of buttons
                justifyContent: "center", // Aligns buttons to the left
                gap: "0.5rem", // Spacing between buttons
                marginTop: "1rem",
                marginLeft: "1rem",
                marginRight: "1rem",
              }}
            >
              {[
                {
                  text: "Instagram",
                  url: "https://www.instagram.com/yakayakayaka___/",
                },
                {
                  text: "Spotify",
                  url: "https://open.spotify.com/artist/4fODbCHhX4Q2ro3O5CyrSA?si=rmEL7sYIQuKzqZlGELBveg",
                },
                {
                  text: "Apple Music",
                  url: "https://music.apple.com/cn/artist/yaka/1519813408",
                },
                { text: "Youtube", url: "https://www.youtube.com/@yaka2047" },

                {
                  text: "WangYiYun",
                  url: "https://music.163.com/#/artist?id=32992079",
                },
                {
                  text: "QQMusic",
                  url: "https://c6.y.qq.com/base/fcgi-bin/u?__=tqJG5DkWzGkH",
                },
                {
                  text: "tiktok",
                  url: "https://www.tiktok.com/@yakayakayaka___",
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
                    fontSize: "12px",
                    whiteSpace: "nowrap", // Prevents wrapping of button text
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
          </Box>

          {/* Words Section */}
          <Box
            sx={{
              height: "100%",
              overflowY: "auto",
              padding: "1rem",
              zIndex: 10,
              marginTop: 5,
              marginBottom: 1,
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontFamily: "Antonio, sans-serif",
                fontSize: "18px",
              }}
            >
              Artist, producer, and multi-disciplinary creative from Shanghai,
              Yaka began to emerge in the underground music scenes of both China
              and America this year with his signature style: Jungle Rage. At
              just 21 years old, Yaka's musical journey began in the Atlanta
              Hip-Hop scene. Immersed in the musical environment, he grew up
              with extensive experience in Hip-Hop production and performance
              early on. In 2022, Yaka returned to his hometown and moved between
              cities such as Shanghai and Chengdu, engaging in the mainstream
              music industry as an in-house producer, while remaining active in
              the underground. Yaka’s experiences performing in clubs and party
              venues further led him to the unique energy: combining the spirit
              of Trap from Atlanta, the rhythms from Jungle, Techno, and Tribal
              rave music, and sampling melodies from East-Asian classic folk
              songs, ultimately forming Jungle Rage:
              <br />
              <br />
              <span
                style={{
                  display: "block", // Make the span block-level to apply width
                  width: "80%",
                  margin: "0 auto", // Center-align the block within the parent
                }}
              >
                Jungle represents the UK breakbeat dance music Yaka grew
                accustomed to as a DJ, also representing the original music
                rhythms from various East Asian jungle tribes that he samples;
                <br />
                <br />
                Rage represents the branch of Trap music style that emerged in
                Atlanta while Yaka lived there - a similar energy he brings to
                the crowd on the dance floor during his performances.
              </span>
              <br />
              In 2023, Yaka gained more recognition in the industry: in
              Shanghai, he participated in the “Rap of China” TV show as a music
              producer and commentator; produced music for famous Chinese rapper
              GAI and the Chinese launch of the video game, "Valorant", for Riot
              Games; and formed a creative collective with 99 God whilst they
              participated in stadium-sized performances at the Changzhou
              Innersect Music Festival. In early 2024, Yaka moved to Brooklyn,
              New York to collaboratively work on creative projects and
              performed there. In February, he released a full-length album
              “¡2busy4u! Jungle Rage *LP,” critically acclaimed by some Chinese
              domestic music/sub-culture media outlets as the best-produced
              underground album of 2024 so far, contributing his influence on
              and off stage to the Hip-Hop/club music culture in Asia.
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontFamily: "Glow Sans SC Compressed, sans-serif",
                fontSize: "18px",
              }}
            >
              <br />
              Yaka 在今年以其标志性的Jungle
              Rage风格开始在中美两国的地下音乐场景崭露头角。年仅21岁，Yaka的音乐生涯始于他在亚特兰大时参与的当地嘻哈音乐场景。从小的耳濡目染使他早早的获得了充分的制作和演出经验。22年辍学之后，Yaka回到家乡，辗转于上海、成都等城市，从事过主流音乐产业中的编曲制作，同时以不同身份活跃于地下音乐场景。在俱乐部派对演出的经历也让Yaka进一步发掘出属于自己的音乐能量：结合了来自亚特兰大的Trap精神，生长于Jungle、Techno、Tribal等俱乐部的锐舞土壤，再采样本土文化中的华语金曲旋律，最终形成了Jungle
              Rage：
              <br />
              <br />
              <span
                style={{
                  display: "block", // Make the span block-level to apply width
                  width: "80%",
                  margin: "0 auto", // Center-align the block within the parent
                }}
              >
                Jungle即丛林--代表源自英国牙买加移民文化的碎拍舞曲、也代表Yaka采样的各种丛林部落中的原生音乐节奏型；
                <br />
                <br />
                Rage即狂热--这是一种在亚特兰大新兴起的Trap音乐风格分支、也代表Yaka演出时为舞池中参与者们带来与众不同的能量。
              </span>
              <br />
              2023年，Yaka获得了更多来自主流音乐圈内的赏识：在上海《中文说唱巅峰对决》现场录制了音乐制作的评审；为国内知名说唱歌手GAI与拳头游戏出品的《Valorant无畏契约》登陆国服担任音乐制作；与99
              God组建创意团队，并以艺人的身份参加了常州 Innersect
              音乐节上体育场规模的演出，为他在国内打开了众多合作机会的窗口。2024年初，Yaka和团队移居纽约布鲁克林共同制作多个创意项目，并在当地举办演出；年初发布的个人专辑《¡2busy4u!
              Jungle Rage
              *LP》也被众多国内乐评与亚文化自媒体誉为2024迄今为止的地下年度最佳制作专辑，致力于为亚洲的嘻哈/俱乐部音乐文化做出台前与台后的贡献。
            </Typography>
            <Box padding={2}>
              <YakaPicCarouselMobile />
            </Box>
            <Typography
              sx={{
                color: "white",
                fontFamily: "Glow Sans SC Compressed, sans-serif",
                fontSize: "18px",
              }}
            >
              shot by：Kove Quan
              <br />
              <br />
            </Typography>
            <Box
              sx={{
                display: "inline-flex",
                gap: "0.5rem",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontFamily: "Glow Sans SC Compressed, sans-serif",
                  fontSize: "18px",
                }}
              >
                Artist Booking/Management:
              </Typography>
              <Typography
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
                  window.open("mailto:yabish.prod@gmail.com", "_blank")
                }
              >
                yabish.prod@gmail.com
              </Typography>
            </Box>
          </Box>
          {/* Bottom-Left Button */}
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
              "&:hover": {
                backgroundColor: "black",
                borderColor: "#ff0000",
              },
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
                "&:hover": {
                  color: "#ff0000",
                },
              }}
            >
              INSTAGRAM
            </Typography>
          </Button>

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
        backgroundImage: `url(${yakabg})`,
        backgroundSize: "cover",
        backgroundPosition: "center 40%",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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

          {/* Title */}
          <Typography
            sx={{
              color: "red",
              fontFamily: "Anton, sans-serif",
              fontSize: "50px",
              textAlign: "center",
            }}
          >
            YAKA
          </Typography>

          {/* Buttons Section */}
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
                text: "Instagram",
                url: "https://www.instagram.com/yakayakayaka___/",
              },
              {
                text: "Spotify",
                url: "https://open.spotify.com/artist/4fODbCHhX4Q2ro3O5CyrSA?si=rmEL7sYIQuKzqZlGELBveg",
              },
              {
                text: "Apple Music",
                url: "https://music.apple.com/cn/artist/yaka/1519813408",
              },
              { text: "Youtube", url: "https://www.youtube.com/@yaka2047" },

              {
                text: "WangYiYun",
                url: "https://music.163.com/#/artist?id=32992079",
              },
              {
                text: "QQMusic",
                url: "https://c6.y.qq.com/base/fcgi-bin/u?__=tqJG5DkWzGkH",
              },

              {
                text: "tiktok",
                url: "https://www.tiktok.com/@yakayakayaka___",
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
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "6rem",
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
        </Box>

        {/* Words Section */}
        <Box
          sx={{
            height: "100%",
            overflowY: "auto",
            padding: "1rem",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontFamily: "Antonio, sans-serif",
              fontSize: "18px",
            }}
          >
            Artist, producer, and multi-disciplinary creative from Shanghai,
            Yaka began to emerge in the underground music scenes of both China
            and America this year with his signature style: Jungle Rage. At just
            21 years old, Yaka's musical journey began in the Atlanta Hip-Hop
            scene. Immersed in the musical environment, he grew up with
            extensive experience in Hip-Hop production and performance early on.
            In 2022, Yaka returned to his hometown and moved between cities such
            as Shanghai and Chengdu, engaging in the mainstream music industry
            as an in-house producer, while remaining active in the underground.
            Yaka’s experiences performing in clubs and party venues further led
            him to the unique energy: combining the spirit of Trap from Atlanta,
            the rhythms from Jungle, Techno, and Tribal rave music, and sampling
            melodies from East-Asian classic folk songs, ultimately forming
            Jungle Rage:
            <br />
            <br />
            <span
              style={{
                display: "block", // Make the span block-level to apply width
                width: "80%",
                margin: "0 auto", // Center-align the block within the parent
              }}
            >
              Jungle represents the UK breakbeat dance music Yaka grew
              accustomed to as a DJ, also representing the original music
              rhythms from various East Asian jungle tribes that he samples;
              <br />
              <br />
              Rage represents the branch of Trap music style that emerged in
              Atlanta while Yaka lived there - a similar energy he brings to the
              crowd on the dance floor during his performances.
            </span>
            <br />
            In 2023, Yaka gained more recognition in the industry: in Shanghai,
            he participated in the “Rap of China” TV show as a music producer
            and commentator; produced music for famous Chinese rapper GAI and
            the Chinese launch of the video game, "Valorant", for Riot Games;
            and formed a creative collective with 99 God whilst they
            participated in stadium-sized performances at the Changzhou
            Innersect Music Festival. In early 2024, Yaka moved to Brooklyn, New
            York to collaboratively work on creative projects and performed
            there. In February, he released a full-length album “¡2busy4u!
            Jungle Rage *LP,” critically acclaimed by some Chinese domestic
            music/sub-culture media outlets as the best-produced underground
            album of 2024 so far, contributing his influence on and off stage to
            the Hip-Hop/club music culture in Asia.
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontFamily: "Glow Sans SC Compressed, sans-serif",
              fontSize: "18px",
            }}
          >
            <br />
            Yaka 在今年以其标志性的Jungle
            Rage风格开始在中美两国的地下音乐场景崭露头角。年仅21岁，Yaka的音乐生涯始于他在亚特兰大时参与的当地嘻哈音乐场景。从小的耳濡目染使他早早的获得了充分的制作和演出经验。22年辍学之后，Yaka回到家乡，辗转于上海、成都等城市，从事过主流音乐产业中的编曲制作，同时以不同身份活跃于地下音乐场景。在俱乐部派对演出的经历也让Yaka进一步发掘出属于自己的音乐能量：结合了来自亚特兰大的Trap精神，生长于Jungle、Techno、Tribal等俱乐部的锐舞土壤，再采样本土文化中的华语金曲旋律，最终形成了Jungle
            Rage：
            <br />
            <br />
            <span
              style={{
                display: "block", // Make the span block-level to apply width
                width: "80%",
                margin: "0 auto", // Center-align the block within the parent
              }}
            >
              Jungle即丛林--代表源自英国牙买加移民文化的碎拍舞曲、也代表Yaka采样的各种丛林部落中的原生音乐节奏型；
              <br />
              <br />
              Rage即狂热--这是一种在亚特兰大新兴起的Trap音乐风格分支、也代表Yaka演出时为舞池中参与者们带来与众不同的能量。
            </span>
            <br />
            2023年，Yaka获得了更多来自主流音乐圈内的赏识：在上海《中文说唱巅峰对决》现场录制了音乐制作的评审；为国内知名说唱歌手GAI与拳头游戏出品的《Valorant无畏契约》登陆国服担任音乐制作；与99
            God组建创意团队，并以艺人的身份参加了常州 Innersect
            音乐节上体育场规模的演出，为他在国内打开了众多合作机会的窗口。2024年初，Yaka和团队移居纽约布鲁克林共同制作多个创意项目，并在当地举办演出；年初发布的个人专辑《¡2busy4u!
            Jungle Rage
            *LP》也被众多国内乐评与亚文化自媒体誉为2024迄今为止的地下年度最佳制作专辑，致力于为亚洲的嘻哈/俱乐部音乐文化做出台前与台后的贡献。
          </Typography>
          <Box padding={2}>
            <YakaPicCarousel />
          </Box>
          <Typography
            sx={{
              color: "white",
              fontFamily: "Glow Sans SC Compressed, sans-serif",
              fontSize: "18px",
            }}
          >
            shot by：Kove Quan
            <br />
            <br />
          </Typography>
          <Box
            sx={{
              display: "inline-flex",
              gap: "0.5rem",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontFamily: "Glow Sans SC Compressed, sans-serif",
                fontSize: "18px",
              }}
            >
              Artist Booking/Management:
            </Typography>
            <Typography
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
                window.open("mailto:yabish.prod@gmail.com", "_blank")
              }
            >
              yabish.prod@gmail.com
            </Typography>
          </Box>
        </Box>
        {/* Bottom-Left Button */}
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
            "&:hover": {
              backgroundColor: "black",
              borderColor: "#ff0000",
            },
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
              "&:hover": {
                color: "#ff0000",
              },
            }}
          >
            INSTAGRAM
          </Typography>
        </Button>

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
    <Box
      sx={{
        position: "absolute",
        top: "2%",
        left: "2%",
        zIndex: 2,
        padding: "1rem",
      }}
    >
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
        <motion.div
          whileHover={{ scale: 1.1 }}
          onClick={() => navigate("/artist")}
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
            Artists
          </Typography>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
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
            }}
          >
            Events
          </Typography>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          onClick={() => navigate("/about")}
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
  );
}

// For image carousel

function shuffleArray(array) {
  return array;
  // return array.sort(() => Math.random() - 0.5);
}

function YakaPicCarousel() {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: false,
    speed: 400,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1496,
        settings: {
          slidesToShow: 3.5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const images = shuffleArray([Image1, yakabg, Image4, Image5, Image6]);

  return (
    <div
      className="slider-container"
      style={{
        width: "100%",
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

function YakaPicCarouselMobile() {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: false,
    centerPadding: "120px",
    slidesToShow: 1.5,
    speed: 400,
  };

  const images = shuffleArray([Image1, yakabg, Image4, Image5, Image6]);

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
                maxWidth: "100%",
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

function TopLeftMobile() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        position: "absolute",
        top: "2%",
        left: "2%",
        zIndex: 2000,
        padding: "1rem",
      }}
    >
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
        <Box onClick={() => navigate("/artist")}>
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
            Artists
          </Typography>
        </Box>
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
            }}
          >
            Events
          </Typography>
        </Box>
        <Box onClick={() => navigate("/about")}>
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
  );
}
