import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import YABISHLogo from "../../assets/YABISHlogo.png";
import { useNavigate } from "react-router-dom";


export default function ArtistMainPage() {
  return (
    <Box
      style={{
        height: "100vh",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column", // Align buttons in a column
        gap: "1rem", // Add space between buttons
      }}
    >
      <TopLeft></TopLeft>
      <Button
        variant="text"
        sx={{
          backgroundColor: "black",
          color: "white",
          fontFamily: "Koulen, sans-serif",
          fontSize: "80px",
          "&:hover": {
            backgroundColor: "black",
            color: "white",
          },
        }}
      >
        99 GOD
      </Button>
      <Button
        variant="text"
        sx={{
          backgroundColor: "black",
          color: "white",
          fontFamily: "Koulen, sans-serif",
          fontSize: "80px",
          "&:hover": {
            backgroundColor: "black",
            color: "white",
          },
        }}
      >
        YAKA
      </Button>
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
            fontFamily: "Koulen, sans-serif",
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
                fontFamily: "Koulen, sans-serif",
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
          {/* Events Route */}
          <motion.div whileHover={{ scale: 1.1 }}>
            <Typography
              sx={{
                color: "white",
                fontFamily: "Koulen, sans-serif",
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
          <motion.div
            whileHover={{ scale: 1.1 }}
            onClick={() => {
              navigate("/about");
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontFamily: "Koulen, sans-serif",
                fontSize: "30px",
                transition: "color 0.3s ease-in-out",
                "&:hover": {
                  color: "#ff0000",
                  userSelect: "none",
                },
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
          fontFamily: "Koulen, sans-serif",
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
            fontFamily: "Koulen, sans-serif",
            fontSize: "20px",
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
