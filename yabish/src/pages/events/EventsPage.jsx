import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import YABISHLogo from "../..//assets/YABISHlogo.png";
import Image1 from "../../assets/pics/99godtour.jpg"; // Replace with your image path
import Image2 from "../../assets/pics/raindogsposter.jpg"; // Replace with your image path
import { useNavigate } from "react-router-dom";

export default function EventsPage() {
  const isMobile = useMediaQuery("(max-width:1100px)"); // Check if the viewport width is below 600px

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
          }}
        >
          {/* First Image */}
          <img
            src={Image1}
            alt="Image 1"
            style={{
              width: "40%",
              height: "auto",
              marginBottom: "5%",
            }}
          />
          <Typography
            sx={{
              color: "white",
              marginBottom: "10%",
              fontFamily: "Anton, sans-serif",
              fontSize: "24px",
            }}
          >
            99 GOD 2024 TOUR
          </Typography>
          {/* Second Image */}
          <img
            src={Image2}
            alt="Image 2"
            style={{
              width: "40%",
              height: "auto",
              marginBottom: "5%",
            }}
          />
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
            gap: "5rem", // Space between the images
            position: "absolute",
            top: "50%", // Center vertically
            transform: "translateY(-50%)",
            height: "100%",
          }}
        >
          {/* First Image */}
          <Box
            style={{
              width: "auto",
              height: "60%",
            }}
          >
            <img
              src={Image1}
              alt="Image 1"
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
          </Box>
          <Box
            style={{
              width: "auto",
              height: "60%",
            }}
          >
            {/* Second Image */}
            <img
              style={{
                width: "auto",
                height: "100%",
                marginBottom: "5%",
              }}
              src={Image2}
              alt="Image 2"
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
          </Box>
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
        <img
          src={YABISHLogo}
          alt="YABISH Logo"
          style={{
            width: "10%",
            height: "auto",
            marginBottom: "2.5rem",
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
