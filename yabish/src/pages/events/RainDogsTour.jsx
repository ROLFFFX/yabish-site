import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import YABISHLogo from "../../assets/YABISHlogo.png";
import bgvideo from "../../assets/bgvideo.webm";

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
            COMING!!!YaBish Presents.01 <br />
            2025YaBish
            <span style={{ fontFamily: "Glow Sans SC Compressed, sans-serif" }}>
              开年呈现
            </span>
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
          <Box padding={4}>
            <iframe
              src="https://open.spotify.com/embed/artist/12DUKVqy5ry0UYK6lJtAMO?utm_source=generator&theme=0"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </Box>
          <Typography
            sx={{
              color: "white",
              fontFamily: "Glow Sans SC Compressed, sans-serif",
              fontSize: "18px",
            }}
          >
            Rain Dogs 是⼀⽀来⾃澳⼤利亚墨尔本的电⼦后朋克三⼈组。他们的⾸张同名
            EP 是⼀⾸合成器重⾦属、哥特⻛格的⾳乐，于 2021
            年发⾏，在地下⾳乐界⼴受好评。 Rain Dogs
            是⼀⽀难以捉摸的乐队，他们罕⻅的现场表演以其令⼈难以忘怀的情绪和氛围⽽闻名，其声⾳让⼈想起
            Suicide 和 Depeche Mode。2024 年，他们发⾏了三⾸新单曲：Nights are
            Lonely, More than Desire和Disintegrate，这些单曲来⾃即将于 2025
            年发⾏的专辑。
            <br />
            <br />
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontFamily: "Antonio, sans-serif",
              fontSize: "18px",
            }}
          >
            Rain Dogs are an electronic post punk trio from Melbourne,
            Australia. Their first self-titled EP, a synth heavy, gothic
            production was released in 2021 to underground acclaim. An elusive
            band, Rain Dogs' rare live show is known for its haunting mood and
            atmosphere, producing a sound reminiscent of Suicide and Depeche
            Mode. <br />
            <br />
            In 2024 they have released three new singles: Nights are Lonely,
            More than Desire, and Disintegrate, from an upcoming album which is
            set to be released in 2025.
            <br />
            <br />
            HANGZHOU <br />
            SHANGHAI <br />
            CHENGDU
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }} padding={4}>
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
              textDecoration: "underline",
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
