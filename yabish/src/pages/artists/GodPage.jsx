import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import YABISHLogo from "../../assets/YABISHlogo.png";
// import godBgImage from "../../assets/pics/99godbg.webp";
// import Image1 from "../../assets/pics/godpage/01.webp";
// import Image2 from "../../assets/pics/godpage/02.webp";
// import Image3 from "../../assets/pics/godpage/03.webp";
// import Image4 from "../../assets/pics/godpage/04.webp";
// import Image5 from "../../assets/pics/godpage/05.webp";
// import Image6 from "../../assets/pics/godpage/06.webp";
// import Image7 from "../../assets/pics/godpage/07.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const godBgImage =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/f78c74d3-5d2d-4010-dcff-ab015c463000/public";

const Image1 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/462aef0a-9382-4dfd-1672-cfd4da578b00/public";
const Image2 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/4d078758-e626-4b8e-72d7-d77ac5f95400/public";
const Image3 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/61869b68-9966-411b-262d-f177c61f2400/public";
const Image4 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/ce115e64-71f6-4954-db1d-c7aa97f9ea00/public";
const Image5 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/eebc5280-a249-4098-aa83-f105ad405100/public";
const Image6 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/43eb7849-f340-48ae-b8a0-9b224ed0d600/public";
const Image7 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/363821e1-694c-409a-0189-512ac81d5f00/public";

export default function GodPage() {
  const navigate = useNavigate();
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
            99GOD
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
              { text: "Youtube", url: "https://www.youtube.com/@99god19" },
              {
                text: "Apple music",
                url: "https://music.apple.com/cn/artist/99-god/1530452342",
              },
              { text: "Instagram", url: "https://www.instagram.com/_99god_/" },
              {
                text: "Spotify",
                url: "https://open.spotify.com/artist/1fSNmkI8lKMFVMU2Y4hpgi?si=thjriNdTQfGEDfLL9y5_AA",
              },
              {
                text: "WangYiYun",
                url: "https://music.163.com/#/artist?id=31511662",
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
        </Box>

        {/* Words Section */}
        <Box
          sx={{
            height: "100%",
            overflowY: "auto",
            padding: "1rem",
            zIndex: 10,
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontFamily: "Antonio, sans-serif",
              fontSize: "18px",
            }}
          >
            Hailing from Shanghai, 99 God is an anomaly of sorts: his
            distinctively deep and gritty vocal delivery hypnotizes listeners
            over a signature new school Trap sound; while laid-back, raspy
            melodic lines floating over Neo-soul-influenced-beats display
            significant depth in his long-time music venture in the heart of
            Hip-Hop: Brooklyn, New York. <br />
            <br />
            As one of the most successful independent artists from China, 99 God
            took off a career right after his first single - “UFO” - in 2021.
            Since then, the 99 God phenomenon roamed the Chinese Internet,
            generating a whopping 400,000 followers on the streaming platform
            NetEase Music. <br />
            <br />
            2023 marked 99’s new chapter, while a two-year-old single - “Bodega”
            - blew up in Japan overnight through social media, and eventually
            charted #1 on Japan’s viral hot 100s, racking up 2.6 million streams
            and over 200 thousand monthly listeners on Spotify in 2023.
            Following up, 99 joined forces with Riot Games to produce the
            leading track for Valorant’s first Chinese agent release -
            "Renegade", solidifying his momentum abroad; the collaboration ends
            up Billboard-nominated under the "Best music supervision in a
            trailer - video game & interactive" award. <br />
            <br />
            Over three years of consistent hit releases made 99 God one of East
            Asia’s most memorable voices in rap music, while it also prepared
            him the ability to creating unique moments for an audience on the
            global stage.The 2024 mini tour added a dazzling chapter to 99 God's
            already sizzling music career.
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontFamily: "Glow Sans SC Compressed, sans-serif",
              fontSize: "18px",
            }}
          >
            <br />
            来自上海，现居美国纽约，结合标志性的磁性嗓音和new school
            Trap风格，他的说唱作品给听众带来独特体验。常年居住布鲁克林深耕音乐的经历也给了99的音乐一层Neo-soul
            影响，丰富的节奏与laid-back的旋律融于一体。
            <br />
            <br /> 99
            God在国内成功的独立音乐人生涯始于他在2021年推出的首支单曲《UFO》。作品发布后，99
            God开始在互联网上现象级地爆火，让他在短短两年中就在网易云音乐上收获了40万粉丝。
            <br />
            <br />
            2023年标志着99
            God的新篇章。99两年前的单曲《Bodega》在日本社交媒体上一夜走红，2023年10月登上了日本热门播放榜单的第一名，在Spotify上获得了260万次播放，并吸引了20万多名月度听众。随后他与拳头游戏合作，为《瓦洛兰特--无畏契约》登陆国服的首位中国游戏角色制作了主打曲《Renegade》。本曲在Spotify和YouTube上再次冲上热门榜，均获得百万级的播放量，巩固了99在海外的势头。这首合作也出现在拳头游戏的预告片中，拿到了美国知名杂志Billboard公告牌的提名，奖项为“年度最佳预告片音乐监制--游戏与交互媒体”。
            <br />
            <br />
            三年来，99
            God持续推出热单，帮助他成为来自东亚最具特色的歌手之一。同时，不断成长的个人能力也为他在全球平台上创造辉煌做好了准备。2024年，99
            God的首个个人巡演「九十九」为他炙手可热的音乐生涯增添了璀璨的一页。
          </Typography>
          <Box padding={2}>
            <GodPics />
          </Box>
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
            width: "150px",
            height: "auto",
            marginBottom: "1rem",
            marginLeft: -25,
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
  return array.sort(() => Math.random() - 0.5);
}

function GodPics() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
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
  ]);

  return (
    <div
      className="slider-container"
      style={{ width: "100%", margin: "0 auto", padding: "1rem 0" }}
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{
                width: "100%",
                height: "300px", // Set a fixed height
                objectFit: "cover", // Ensure images are cropped to fill the height
                borderRadius: "10px",
                padding: "10px", // Add padding between slides
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
