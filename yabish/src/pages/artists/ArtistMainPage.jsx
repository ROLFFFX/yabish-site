import React, { useState, useEffect, useRef } from "react";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import YABISHLogo from "../../assets/YABISHlogo.png";
import yakabgvid from "../../assets/pics/yakabgvid.webm";
import godbgvid from "../../assets/pics/99godbgvid.webm";

export default function ArtistMainPage() {
  const [activeVideo, setActiveVideo] = useState("");
  const [videoKey, setVideoKey] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    setVideoKey((prevKey) => prevKey + 1);
  }, [activeVideo]);

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

  const [godTourClicked, setGodTourClicked] = useState(false);
  const [yakaClicked, setYakaClicked] = useState(false);

  const godTourTimeout = useRef(null);
  const yakaTimeout = useRef(null);
  const isNavigating = useRef(false);
  const handleGodTourClick = () => {
    // Clear Yaka timeout if it exists
    if (yakaTimeout.current) {
      clearTimeout(yakaTimeout.current);
      yakaTimeout.current = null;
    }

    // Prevent navigation overlap
    if (isNavigating.current) {
      return;
    }

    if (!godTourClicked) {
      setGodTourClicked(true);
      setActiveVideo("godbgvid");

      godTourTimeout.current = setTimeout(() => {
        if (!isNavigating.current) {
          isNavigating.current = true; // Set navigating state
          navigate("/99god");
        }
      }, 5000);
    } else {
      navigate("/99god"); // Immediate navigation on second click
    }
  };

  const handleYakaClick = () => {
    // Clear God Tour timeout if it exists
    if (godTourTimeout.current) {
      clearTimeout(godTourTimeout.current);
      godTourTimeout.current = null;
    }

    // Prevent navigation overlap
    if (isNavigating.current) {
      return;
    }

    if (!yakaClicked) {
      setYakaClicked(true);
      setActiveVideo("yakabgvid");

      yakaTimeout.current = setTimeout(() => {
        if (!isNavigating.current) {
          isNavigating.current = true; // Set navigating state
          navigate("/yaka");
        }
      }, 5000);
    } else {
      navigate("/yaka"); // Immediate navigation on second click
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "black",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Video Background Container */}
      <Box
        sx={{
          position: "fixed", // Changed from absolute to fixed
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 1, // Changed from -1 to ensure video is above background but below content
          opacity: activeVideo ? 1 : 0,
          transition: "opacity 0.3s ease-in-out",
        }}
      >
        {activeVideo && (
          <video
            key={videoKey}
            src={activeVideo}
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        )}
      </Box>

      {/* Content Container */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TopLeft />

        {/* 99 GOD Button */}
        {isMobile ? (
          <Box
            sx={{
              position: "relative",
              width: "fit-content",
            }}
            onClick={() => setActiveVideo(godbgvid)}
          >
            <Button
              variant="text"
              sx={{
                backgroundColor: "transparent",
                color: "white",
                fontFamily: "Anton, sans-serif",
                fontSize: { xs: "40px", md: "80px" }, // Responsive font size
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "red",
                },
                zIndex: 100,
              }}
              onClick={handleGodTourClick}
            >
              99 GOD
            </Button>
          </Box>
        ) : (
          <Box
            sx={{
              position: "relative",
              width: "fit-content",
            }}
            onMouseEnter={() => setActiveVideo(godbgvid)}
            onMouseLeave={() => setActiveVideo("")}
          >
            <Button
              variant="text"
              sx={{
                backgroundColor: "transparent",
                color: "white",
                fontFamily: "Anton, sans-serif",
                fontSize: { xs: "40px", md: "80px" }, // Responsive font size
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "red",
                },
                zIndex: 100,
              }}
              onClick={() => {
                navigate("/99god");
              }}
            >
              99 GOD
            </Button>
          </Box>
        )}

        {/* YAKA Button */}
        {isMobile ? (
          <Box
            sx={{
              position: "relative",
              width: "fit-content",
            }}
            onClick={() => setActiveVideo(yakabgvid)}
          >
            <Button
              variant="text"
              sx={{
                backgroundColor: "transparent",
                color: "white",
                fontFamily: "Anton, sans-serif",
                fontSize: { xs: "40px", md: "80px" }, // Responsive font size
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "red",
                },
              }}
              onClick={handleYakaClick}
            >
              YAKA
            </Button>
          </Box>
        ) : (
          <Box
            sx={{
              position: "relative",
              width: "fit-content",
            }}
            onMouseEnter={() => setActiveVideo(yakabgvid)}
            onMouseLeave={() => setActiveVideo("")}
          >
            <Button
              variant="text"
              sx={{
                backgroundColor: "transparent",
                color: "white",
                fontFamily: "Anton, sans-serif",
                fontSize: { xs: "40px", md: "80px" }, // Responsive font size
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "red",
                },
              }}
              onClick={() => {
                navigate("/yaka");
              }}
            >
              YAKA
            </Button>
          </Box>
        )}

        {/* Bottom-Left Button */}
        <Button
          variant="outlined"
          sx={{
            position: "absolute",
            bottom: "2%",
            left: "2%",
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
        {/* Footer */}
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
    </Box>
  );
}

// TopLeft component remains unchanged
function TopLeft() {
  const navigate = useNavigate();
  return (
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
