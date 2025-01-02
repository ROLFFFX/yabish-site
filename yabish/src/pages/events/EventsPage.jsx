import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import YABISHLogo from "../..//assets/YABISHlogo.png";
// import GodTourPic from "../../assets/pics/99godtour.webp";
// import RainDogsPic from "../../assets/pics/raindogsposter.webp";
import { useNavigate } from "react-router-dom";
import bgvideo from "../../assets/bgvideo.webm";
const RainDogsPic =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/14f11ff8-6966-4462-dd13-738b701e3800/public";
const GodTourPic =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/e248982e-9632-439c-e315-a0d77d712f00/public";

export default function EventsPage() {
  const isMobile = useMediaQuery("(max-width:1100px)");
  const navigate = useNavigate();
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
      <TopLeft />
      {/* Conditional Rendering for Layout */}
      {isMobile ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            position: "absolute",
            left: "0",
            width: "100%",
            height: "100%",
            overflowY: "auto",
            padding: "2rem 0",
            zIndex: 20,
          }}
        >
          {/* First Image */}
          <Box
            onClick={() => {
              navigate("/99godtour");
            }}
            sx={{ display: "flex", justifyContent: "center", zIndex: 20 }}
          >
            <img
              src={GodTourPic}
              alt="99 God Tour"
              style={{
                width: "40%",
                height: "auto",
                marginBottom: "5%",
              }}
            />
          </Box>
          <Typography
            sx={{
              color: "white",
              marginBottom: "10%",
              fontFamily: "Anton, sans-serif",
              fontSize: "24px",
            }}
            onClick={() => {
              navigate("/99godtour");
            }}
          >
            99 GOD 2024 TOUR
          </Typography>

          {/* Second Image */}
          <Box
            onClick={() => {
              navigate("/raindogstour");
            }}
            sx={{ display: "flex", justifyContent: "center", zIndex: 20 }}
          >
            <img
              src={RainDogsPic}
              alt="Rain Dogs Tour"
              style={{
                width: "40%",
                height: "auto",
                marginBottom: "5%",
              }}
            />
          </Box>
          <Typography
            sx={{
              color: "white",
              marginBottom: "10%",
              fontFamily: "Anton, sans-serif",
              fontSize: "24px",
            }}
          >
            COMING!!!YaBish Presents.01
          </Typography>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5rem",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            height: "100%",
            zIndex: 20,
          }}
        >
          {/* First Image */}
          <motion.div
            style={{
              width: "auto",
              height: "60%",
            }}
            whileHover={{ scale: 1.1 }}
            onClick={() => {
              navigate("/99godtour");
            }}
          >
            <img
              src={GodTourPic}
              alt="99 God Tour"
              style={{
                width: "100%",
                height: "100%",
                marginBottom: "5%",
              }}
            />
            <Typography
              sx={{
                color: "white",
                marginBottom: "10%",
                fontFamily: "Anton, sans-serif",
                fontSize: "24px",
                textAlign: "center",
              }}
            >
              99 GOD 2024 TOUR
            </Typography>
          </motion.div>
          <motion.div
            style={{
              width: "auto",
              height: "60%",
            }}
            whileHover={{ scale: 1.1 }}
            onClick={() => {
              navigate("/raindogstour");
            }}
          >
            {/* Second Image */}
            <img
              style={{
                width: "auto",
                height: "100%",
                marginBottom: "5%",
              }}
              src={RainDogsPic}
              alt="Rain Dogs Tour"
            />
            <Typography
              sx={{
                color: "white",
                marginBottom: "10%",
                fontFamily: "Anton, sans-serif",
                fontSize: "24px",
                textAlign: "center",
              }}
            >
              COMING!!!YaBish Presents.01
            </Typography>
          </motion.div>
        </Box>
      )}
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
            backgroundColor: "black",
            borderColor: "#ff0000",
          },
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
