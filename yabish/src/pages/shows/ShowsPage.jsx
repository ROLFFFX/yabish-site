import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import TopLeft from "../../utils/TopLeft";
// import BGVideo from "../BGVideo";

const RainDogsPic =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/91942590-319d-4e7a-debf-9b240813f100/public";
const GodTour2024Pic =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/16225703-31e8-4874-3cfc-a904f5a12f00/public";
const MongTongPic =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/40f43fac-fb79-47a5-60a7-42538ec34500/public";
const BlueHawaii2025Pic =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/76996b9a-a48a-49c2-5941-1981bd13d100/public";
const Peremotka2025Pic =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/23aae698-9b9a-4051-b571-cfffbd0a7700/public";
const GodTour2025Pic =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/8d22809e-b49c-4727-adb2-0aae5bdddc00/public";

const shows = [
  { src: BlueHawaii2025Pic, alt: "BlueHawaii", link: "/bluehawaii" },
  { src: Peremotka2025Pic, alt: "Peremotka", link: "/peremotka" },
  { src: GodTour2025Pic, alt: "GodTour2025", link: "/99godtour2025" },
  { src: RainDogsPic, alt: "RainDogs", link: "/raindogstour" },
  { src: GodTour2024Pic, alt: "GodTour2024", link: "/99godtour2024" },
  { src: MongTongPic, alt: "MongTong", link: "/mongtongfest" },
];

export default function ShowsPage() {
  const isMobile = useMediaQuery("(max-width:1024px)");
  const navigate = useNavigate();
  const contentRef = useRef();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: "black",
        position: "relative",
        overflow: "hidden", // Prevent scroll on the root container
      }}
    >
      {/* Background Video */}
      {/* <Box
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
      </Box> */}

      {/* Navigation */}
      <TopLeft />

      {/* Main Content Scroll Container 
          This is the single scrollable element for the page 
      */}
      <Box
        ref={contentRef}
        sx={{
          position: "relative",
          zIndex: 5,
          width: "100%",
          height: "100vh",
          overflowY: "auto", // The SINGLE scroll control
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {isMobile ? (
          // 📱 Mobile View (Single Column)
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "1rem",
              gap: "2rem",
              width: "100%",
              paddingBottom: "4rem",
            }}
          >
            <Box sx={{ minHeight: "5vh", opacity: 0 }} />
            {shows.map((img, index) => (
              <Box
                key={index}
                sx={{
                  width: "45%",
                  maxWidth: "450px",
                  position: "relative",
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
          // 💻 Desktop View (Two Columns, Single Scroll)
          <Box
            sx={{
              display: "flex",
              paddingX: "18vw",
              paddingBottom: "10vh",
              // We do NOT set overflow here; we let the parent scroll
            }}
          >
            {/* Left Column Stack */}
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: "2rem",
                paddingRight: "10%",
              }}
            >
              <Box sx={{ minHeight: "15vh", opacity: 0 }} />
              {shows
                .filter((_, i) => i % 2 === 0)
                .map((img, index) => (
                  <Box
                    key={index}
                    sx={{
                      maxWidth: "300px",
                      cursor: "pointer",
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
                        borderRadius: "4px",
                      }}
                    />
                  </Box>
                ))}
            </Box>

            {/* Right Column Stack */}
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "2rem",
                paddingLeft: "10%",
              }}
            >
              <Box sx={{ minHeight: "15vh", opacity: 0 }} />
              {shows
                .filter((_, i) => i % 2 === 1)
                .map((img, index) => (
                  <Box
                    key={index}
                    sx={{
                      maxWidth: "300px",
                      cursor: "pointer",
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
                        borderRadius: "4px",
                      }}
                    />
                  </Box>
                ))}
            </Box>
          </Box>
        )}
      </Box>

      {/* Instagram Button */}
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
    </Box>
  );
}
