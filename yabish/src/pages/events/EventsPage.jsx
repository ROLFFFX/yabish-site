import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import YABISHLogo from "../..//assets/YABISHlogo.png";
// import GodTourPic from "../../assets/pics/99godtour.webp";
// import RainDogsPic from "../../assets/pics/raindogsposter.webp";
import { useNavigate } from "react-router-dom";
import BGVideo from "../BGVideo";
const RainDogsPic =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/91942590-319d-4e7a-debf-9b240813f100/public";
const GodTourPic =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/16225703-31e8-4874-3cfc-a904f5a12f00/public";
const MongTongPic =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/40f43fac-fb79-47a5-60a7-42538ec34500/public";

const events = [
  { src: MongTongPic, alt: "MongTong", link: "/mongtongfest" },
  { src: RainDogsPic, alt: "RainDogs", link: "/raindogstour" },
  { src: GodTourPic, alt: "GodTour", link: "/99godtour" },
];

export default function EventsPage() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const navigate = useNavigate();
  const [isOverflowing, setIsOverflowing] = useState(false);
  const contentRef = useRef();
  // Check if the content is overflowing
  useEffect(() => {
    if (contentRef.current) {
      const isOverflow =
        contentRef.current.scrollHeight > contentRef.current.clientHeight;
      setIsOverflowing(isOverflow);
    }
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: "black",
        overflowY: "auto",
        position: "relative",
        paddingBottom: "4rem",
      }}
    >
      {/* Background Video with z-index 0 */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
        }}
      >
        <BGVideo />
      </Box>

      {/* Navigation in top left with explicit z-index */}
      <Box sx={{ position: "relative", zIndex: 10 }}>
        <TopLeft />
      </Box>

      {/* Content Container with higher z-index than background */}
      <Box
        ref={contentRef}
        sx={{
          position: "relative",
          zIndex: 5,
          width: "100%",
          height: "100%",
          overflow: "visible",
        }}
      >
        {isMobile ? (
          // 📱 Mobile view — 1 column flex layout
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "1rem",
              gap: "2rem",
              overflowY: "auto",
              maxHeight: "100dvh",
              width: "100%",
            }}
          >
            <Box sx={{ minHeight: "5vh", opacity: 0 }} />
            {events.map((img, index) => (
              <Box
                key={index}
                sx={{
                  width: "45%",
                  maxWidth: "450px",
                  position: "relative",
                  zIndex: 5,
                  overflow: "visible",
                }}
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src={img.src}
                  alt={img.alt}
                  onClick={() => navigate(img.link)}
                  style={{
                    width: "100%",
                    height: "auto",
                    cursor: "pointer",
                    display: "block",
                    borderRadius: "4px",
                  }}
                />
              </Box>
            ))}
          </Box>
        ) : (
          // 💻 Desktop view — 2 column grid layout
          <Box
            sx={{
              display: "flex",
              height: "100vh", // subtracting top nav height
              overflow: "hidden", // prevent parent scroll
              paddingX: "18vw",
              scrollbarWidth: "none", // Firefox
              "&::-webkit-scrollbar": {
                display: "none", // Chrome/Safari
              },
            }}
          >
            {/* Left Column */}
            <Box
              sx={{
                flex: 1,
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: "2rem",
                paddingRight: "10%",
                scrollbarWidth: "none", // Firefox
                "&::-webkit-scrollbar": {
                  display: "none", // Chrome/Safari
                },
                // overflow: "visible",
              }}
            >
              <Box sx={{ minHeight: "30vh", opacity: 0 }} />

              {events
                .filter((_, i) => i % 2 === 0)
                .map((img, index) => (
                  <Box
                    key={index}
                    sx={{
                      maxWidth: "350px",
                      cursor: "pointer",
                      overflow: "visible",
                    }}
                  >
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src={img.src}
                      alt={img.alt}
                      onClick={() => navigate(img.link)}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "4px",
                      }}
                    />
                  </Box>
                ))}
              <Box sx={{ minHeight: "5vh", opacity: 0 }} />
            </Box>

            {/* Right Column */}
            <Box
              sx={{
                flex: 1,
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "2rem",
                paddingLeft: "10%",
                scrollbarWidth: "none", // Firefox
                "&::-webkit-scrollbar": {
                  display: "none", // Chrome/Safari
                },
                overflow: "visible",
              }}
            >
              <Box sx={{ minHeight: "30vh", opacity: 0 }} />
              {events
                .filter((_, i) => i % 2 === 1)
                .map((img, index) => (
                  <Box
                    key={index}
                    sx={{
                      maxWidth: "350px",
                      cursor: "pointer",
                      overflow: "visible",
                    }}
                  >
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src={img.src}
                      alt={img.alt}
                      onClick={() => navigate(img.link)}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "4px",
                      }}
                    />
                  </Box>
                ))}
              {/* <Box sx={{ minHeight: "10vh", opacity: 0 }} /> */}
            </Box>
          </Box>
        )}
      </Box>

      {/* Instagram Button with explicit z-index */}
      <Button
        variant="outlined"
        sx={{
          position: "fixed",
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
          zIndex: 10,
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
