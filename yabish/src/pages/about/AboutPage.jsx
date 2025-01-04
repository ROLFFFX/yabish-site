import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import YABISHLogo from "../..//assets/YABISHlogo.png";
import { useNavigate } from "react-router-dom";
import bgvideo from "../../assets/bgvideo.webm";

export default function AboutPage() {
  return (
    <Box
      style={{
        height: "100vh",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
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
      <TopLeft></TopLeft>
      <Box
        sx={{
          height: "70%", // Box height
          width: "55%", // Box width
          backgroundColor: "transparent", // Slightly transparent background
          overflowY: "auto", // Scrollable vertically
          overflowX: "hidden", // No horizontal scrolling
          padding: "1rem", // Add padding inside the box
          color: "white", // Text color
          zIndex: 2,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Glow Sans SC Compressed, sans-serif",
            fontSize: "18px",
          }}
        >
          <span style={{ fontFamily: "Glow Sans SC Compressed, sas-serif" }}>
            YaBish
          </span>
          是一家充满活力的音乐厂牌，专注于推广艺人进行在地化发展，合作艺人包括
          <span style={{ fontFamily: "Antonio, sas-serif" }}>99 God</span>和
          <span style={{ fontFamily: "Antonio, sas-serif" }}>Yaka</span>
          。我们致力于帮助全球潜力无限的地赏与地下艺人获得更多关注。
          <br />
          音乐的力量在于连接不同文化，通过跨越地域的艺术表达，打造无界限的创意共同体。
          <br />
          <br />
        </Typography>
        <Typography
          sx={{
            fontFamily: "Antonio, sans-serif",
            fontSize: "18px",
          }}
        >
          YaBish is a dynamic music label dedicated to promoting artists'
          localization, working with talents like 99 God and Yaka. We strive to
          help both mainstream and underground artists worldwide gain more
          recognition. <br />
          The power of music lies in connecting diverse cultures, creating a
          boundless creative community through cross-regional artistic
          expression. <br />
          <br />
          <br />
          CONTACT <br />
          Artist Booking/Management: yabish.prod@gmail.com <br />
          <br />
          FOLLOW ME <br />
          YABISH
        </Typography>
      </Box>
      {/* footer text */}
      <Box
        sx={{
          position: "absolute",
          bottom: "2%",
          textAlign: "center",
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
          {/* about route */}
          <motion.div whileHover={{ scale: 1.1 }}>
            <Typography
              sx={{
                color: "white",
                fontFamily: "Anton, sans-serif",
                fontSize: "30px",
                transition: "color 0.3s ease-in-out",
                "&:hover": {
                  color: "#ff0000",
                  userSelect: "none",
                },
                textDecoration: "underline",
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
            window.open("https://www.instagram.com/yabishunion/", "_blank")
          }
        >
          INSTAGRAM
        </Typography>
      </Button>
    </>
  );
}
