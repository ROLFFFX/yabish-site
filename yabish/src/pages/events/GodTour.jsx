import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import YABISHLogo from "../../assets/YABISHlogo.png";
// import Image1 from "../../assets/pics/raindogs-events/01.webp";
// import Image2 from "../../assets/pics/raindogs-events/02.webp";
// import Image3 from "../../assets/pics/raindogs-events/03.webp";
// import Image4 from "../../assets/pics/raindogs-events/04.webp";

import video1 from "../../assets/god_tour_video/compressed_godtourvideo1.webm";
import video2 from "../../assets/god_tour_video/compressed_godtourvideo2.webm";
import video3 from "../../assets/god_tour_video/compressed_godtourvideo3.webm";
import BGVideo from "../BGVideo";

const Image1 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/cc028117-5e85-43ee-6369-47f14b10b400/public";
const Image2 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/3fef9a69-f322-4122-9a57-a8086a1ee700/public";
const Image3 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/e66df46e-28a3-4d20-00b3-a3d193578300/public";
const Image4 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/3b1c1e91-04c4-47e2-fb1f-e7a211887a00/public";

const Image5 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/48efd322-a573-4223-bc72-6e74be1db800/public";
const Image6 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/0e29f6c7-accf-4130-d0c0-82a211cdd900/public";
const Image7 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/f56d68f3-a3c1-4e50-7cdc-7356b9650f00/public";
const Image8 =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/392b8d8c-5724-40e8-d892-0405ba3dd400/public";

export default function GodTour() {
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
              height: "40%",
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
                fontFamily: "Glow Sans SC Compressed, sans-serif",
                fontSize: "35px",
                textAlign: "center",
              }}
            >
              国际化的说唱新星
              <span style={{ fontFamily: "Anton, sans-serif" }}>99 God</span>
              首次个人巡演！
              <br />
              <span style={{ fontFamily: "Anton, sans-serif" }}>2024 Tour</span>
              「九十九」
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
            <Typography
              sx={{
                color: "white",
                fontFamily: "Antonio, sans-serif",
                fontSize: "18px",
              }}
            >
              The 2024 mini tour added a dazzling chapter to 99 God's already
              sizzling music career. Promoted by North Nose Production and
              managed by YaBish, this tour spanned four major cities in China,
              drawing in large crowds and elevating his musical allure to new
              heights. Each performance was an audiovisual feast, with his
              signature deep voice cutting through the air, perfectly paired
              with cutting-edge Trap beats, leaving audiences immersed in his
              world long after the last note faded.
              <br />
              <br />
              During the tour, 99 God used his music to narrate the story of his
              years spent honing his craft in Brooklyn, New York, blending the
              smooth melodies of Neo-soul with his powerful rap delivery,
              creating a unique and captivating atmosphere. Whether on the fiery
              stage or in behind-the-scenes interactions with fans, 99 God
              exuded the maturity and confidence of a seasoned artist.
              <br />
              <br />
              This successful tour not only reaffirmed his influence in the
              Chinese music scene but also opened up more possibilities for
              international collaborations. Much like his work with Riot Games
              on "Renegade," this tour has become a memorable milestone in his
              career. As his fanbase continues to grow, 99 God is steadily
              rising as a shining star on the global music stage.
              <br />
              <br />
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontFamily: "Glow Sans SC Compressed, sans-serif",
                fontSize: "18px",
              }}
            >
              2024年，99
              God的首个个人巡演为他炙手可热的音乐生涯增添了璀璨的一页。这场由North
              Nose
              Production主办、YaBish艺人经纪公司策划的巡演横跨六大城市，不仅吸引了大批粉丝，更将他的音乐魅力推向了新的高度。每一场演出都是一场视听盛宴，他标志性的深沉嗓音穿透力十足，与新潮节奏的完美结合，让观众沉浸在他的音乐世界中，久久无法忘怀。
              <br />
              <br />
              巡演期间，99
              God通过音乐讲述了他在纽约布鲁克林深耕多年的故事，将Neo-soul的柔和旋律与他充满力量的说唱相融合，打造出独特的音乐氛围。无论是在热情似火的舞台上，还是在幕后与粉丝的互动中，99
              God都展现出了他作为一位音乐艺术家的成熟与自信。
              <br />
              <br />
              这次巡演的成功不仅再次印证了他在国内音乐圈的影响力，更为他开辟了更多国际合作的可能。就如同他与拳头游戏合作的《Renegade》那样，这次巡演也成为了他职业生涯中一个值得铭记的里程碑。随着粉丝群体的不断壮大，99
              God正一步步走向全球舞台，成为音乐界一颗冉冉升起的新星。
              <br />
            </Typography>

            <Box>
              <GodTourPicsMobile />
            </Box>
            <Box mt={"-2.5rem"} sx={{ zIndex: 2000 }}>
              <GodTourVidsMobile />
            </Box>
            <Typography
              sx={{
                color: "white",
                fontFamily: "Glow Sans SC Compressed, sans-serif",
                fontSize: "16px",
              }}
            >
              上海MAO Livehouse08/04（GUEST-直火帮FEEZY）&08/09After Party
              in@HUSH <br />
              杭州酒球会08/11（GUEST-Dough Boy）
              <br />
              成都正火6号馆08/17（GUEST-Melo&MENGZI）&After Party in@PH_CHENGDU
              <br />
              深圳MAO Livehouse08/24（GUEST-B.C.W） <br />
              广州MAO Livehouse08/2（GUEST-卡西恩Cacien）5&After Party in@CLUB29
              <br />
              台北THE WALL Livehouse08/29（GUEST-BCW&AsiaBoy禁药王）
              <br />
              <br />
              统筹制作Production:North Nose Production <br />
              巡演经理/制作统筹Tour Manager:宋越/毛毛 <br />
              灯光工程师Lighting Engineer:阿彻/哲先 <br />
              影像骑士Visual Jockey:Ludar@YaBish <br />
              VJ制作Production:Kyra/Tage <br />
              巡演助理Tour Assistant:Yaka@YaBish/Ludar@YaBish
              <br /> 巡演海报制作Tour Poster:JACKBOI
              <br />
              <br />
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
              fontFamily: "Glow Sans SC Compressed, sans-serif",
              fontSize: "40px",
              textAlign: "center",
            }}
          >
            国际化的说唱新星
            <span style={{ fontFamily: "Anton, sans-serif" }}>99 God</span>
            首次个人巡演！
            <br />
            <span style={{ fontFamily: "Anton, sans-serif" }}>2024 Tour</span>
            「九十九」
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
          <Typography
            sx={{
              color: "white",
              fontFamily: "Antonio, sans-serif",
              fontSize: "18px",
            }}
          >
            The 2024 mini tour added a dazzling chapter to 99 God's already
            sizzling music career. Promoted by North Nose Production and managed
            by YaBish, this tour spanned four major cities in China, drawing in
            large crowds and elevating his musical allure to new heights. Each
            performance was an audiovisual feast, with his signature deep voice
            cutting through the air, perfectly paired with cutting-edge Trap
            beats, leaving audiences immersed in his world long after the last
            note faded.
            <br />
            <br />
            During the tour, 99 God used his music to narrate the story of his
            years spent honing his craft in Brooklyn, New York, blending the
            smooth melodies of Neo-soul with his powerful rap delivery, creating
            a unique and captivating atmosphere. Whether on the fiery stage or
            in behind-the-scenes interactions with fans, 99 God exuded the
            maturity and confidence of a seasoned artist.
            <br />
            <br />
            This successful tour not only reaffirmed his influence in the
            Chinese music scene but also opened up more possibilities for
            international collaborations. Much like his work with Riot Games on
            "Renegade," this tour has become a memorable milestone in his
            career. As his fanbase continues to grow, 99 God is steadily rising
            as a shining star on the global music stage.
            <br />
            <br />
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontFamily: "Glow Sans SC Compressed, sans-serif",
              fontSize: "18px",
            }}
          >
            2024年，99
            God的首个个人巡演为他炙手可热的音乐生涯增添了璀璨的一页。这场由North
            Nose
            Production主办、YaBish艺人经纪公司策划的巡演横跨六大城市，不仅吸引了大批粉丝，更将他的音乐魅力推向了新的高度。每一场演出都是一场视听盛宴，他标志性的深沉嗓音穿透力十足，与新潮节奏的完美结合，让观众沉浸在他的音乐世界中，久久无法忘怀。
            <br />
            <br />
            巡演期间，99
            God通过音乐讲述了他在纽约布鲁克林深耕多年的故事，将Neo-soul的柔和旋律与他充满力量的说唱相融合，打造出独特的音乐氛围。无论是在热情似火的舞台上，还是在幕后与粉丝的互动中，99
            God都展现出了他作为一位音乐艺术家的成熟与自信。
            <br />
            <br />
            这次巡演的成功不仅再次印证了他在国内音乐圈的影响力，更为他开辟了更多国际合作的可能。就如同他与拳头游戏合作的《Renegade》那样，这次巡演也成为了他职业生涯中一个值得铭记的里程碑。随着粉丝群体的不断壮大，99
            God正一步步走向全球舞台，成为音乐界一颗冉冉升起的新星。
            <br />
          </Typography>

          <Box>
            <GodTourPics />
          </Box>
          <Box mt={"-2.5rem"} sx={{ zIndex: 2000 }}>
            <GodTourVids />
          </Box>
          <Typography
            sx={{
              color: "white",
              fontFamily: "Glow Sans SC Compressed, sans-serif",
              fontSize: "16px",
            }}
          >
            上海MAO Livehouse08/04（GUEST-直火帮FEEZY）&08/09After Party in@HUSH{" "}
            <br />
            杭州酒球会08/11（GUEST-Dough Boy）
            <br />
            成都正火6号馆08/17（GUEST-Melo&MENGZI）&After Party in@PH_CHENGDU
            <br />
            深圳MAO Livehouse08/24（GUEST-B.C.W） <br />
            广州MAO Livehouse08/2（GUEST-卡西恩Cacien）5&After Party in@CLUB29
            <br />
            台北THE WALL Livehouse08/29（GUEST-BCW&AsiaBoy禁药王）
            <br />
            <br />
            统筹制作Production:North Nose Production <br />
            巡演经理/制作统筹Tour Manager:宋越/毛毛 <br />
            灯光工程师Lighting Engineer:阿彻/哲先 <br />
            影像骑士Visual Jockey:Ludar@YaBish <br />
            VJ制作Production:Kyra/Tage <br />
            巡演助理Tour Assistant:Yaka@YaBish/Ludar@YaBish
            <br /> 巡演海报制作Tour Poster:JACKBOI
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

function shuffleArray(array) {
  return array;
  // return array.sort(() => Math.random() - 0.5);
}

function GodTourPics() {
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

function GodTourVids() {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: false,
    centerPadding: "120px",
    slidesToShow: 3,
    speed: 400,
  };

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
        <div key={5}>
          <video
            src={video1}
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              borderRadius: "10px",
              padding: "10px",
            }}
          />
        </div>
        <div key={6}>
          <video
            src={video2}
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              borderRadius: "10px",
              padding: "10px",
            }}
          />
        </div>
        <div key={7}>
          <video
            src={video3}
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              borderRadius: "10px",
              padding: "10px",
            }}
          />
        </div>
      </Slider>
    </div>
  );
}

function GodTourPicsMobile() {
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

function GodTourVidsMobile() {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: false,
    centerPadding: "120px",
    slidesToShow: 1.5,
    speed: 400,
  };

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
        <div key={5}>
          <video
            src={video1}
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              borderRadius: "10px",
              padding: "10px",
            }}
          />
        </div>
        <div key={6}>
          <video
            src={video2}
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              borderRadius: "10px",
              padding: "10px",
            }}
          />
        </div>
        <div key={7}>
          <video
            src={video3}
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              borderRadius: "10px",
              padding: "10px",
            }}
          />
        </div>
      </Slider>
    </div>
  );
}
