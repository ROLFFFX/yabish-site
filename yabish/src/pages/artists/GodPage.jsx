import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import YABISHLogo from "../../assets/YABISHlogo.png";
import godBgImage from "../../assets/pics/99godbg.webp";

export default function GodPage() {
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
      <TopLeft></TopLeft>
      <Box
        sx={{
          height: "100%",
          width: "60%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Title Section */}
        <Box
          sx={{
            height: "20%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center", // Center content horizontally
            position: "relative", // Allow absolute positioning for the "Back" button
          }}
        >
          {/* Back Button */}
          <Button
            onClick={() => {
              // Add your navigation logic here
              console.log("Back button clicked");
            }}
            sx={{
              position: "absolute", // Position the button absolutely
              left: 0, // Align to the left within the container
              color: "white",
              fontSize: "20px",
              fontFamily: "Anton, sans-serif",
            }}
          >
            Back
          </Button>

          {/* Title */}
          <Typography
            sx={{
              color: "red", // Make 99GOD red
              fontFamily: "Anton, sans-serif",
              fontSize: "50px", // Increase font size for prominence
              textAlign: "center",
            }}
          >
            99GOD
          </Typography>
        </Box>

        {/* Words Section */}
        <Box
          sx={{
            height: "60%",
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
        </Box>

        {/* Footer Section */}
        <Box
          sx={{
            height: "20%",
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
      <img
        src={YABISHLogo}
        alt="YABISH Logo"
        style={{
          width: "10%",
          height: "auto",
          marginBottom: "2rem",
          marginLeft: -25,
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
