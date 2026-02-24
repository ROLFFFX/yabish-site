import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import TopLeft from "../../utils/TopLeft";
import TopBarMobile from "../../utils/TopBarMobile";
import BGVideo from "../BGVideo";

export default function AboutPage() {
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
        style={{
          height: "100vh",
          backgroundColor: "black",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <BGVideo />
        <TopBarMobile />
        {/* Scrollable content area */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflowY: "auto",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
            zIndex: 2,
            padding: "5rem 1.5rem 4rem",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontFamily: "Antonio, sans-serif",
              fontSize: "18px",
            }}
          >
            YaBish is a dynamic music label dedicated to promoting artists'
            localization, working with talents like 99 God and Yaka. We strive
            to help both mainstream and underground artists worldwide gain more
            recognition. <br />
            The power of music lies in connecting diverse cultures, creating a
            boundless creative community through cross-regional artistic
            expression.
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
            <span style={{ fontFamily: "Glow Sans SC Compressed, sas-serif" }}>
              YaBish
            </span>
            是一家充满活力的音乐厂牌，专注于推广艺人进行在地化发展，合作艺人包括
            <span style={{ fontFamily: "Antonio, sas-serif" }}>99 God</span>和
            <span style={{ fontFamily: "Antonio, sas-serif" }}>Yaka</span>
            。我们致力于帮助全球潜力无限的地上与地下艺人获得更多关注。
            <br />
            音乐的力量在于连接不同文化，通过跨越地域的艺术表达，打造无界限的创意共同体。
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontFamily: "Antonio, sans-serif",
              fontSize: "18px",
            }}
          >
            <br />
            CONTACT <br />
            Artist Booking/Management: yabish.prod@gmail.com <br />
            <br />
            FOLLOW ME
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontFamily: "Anton, sans-serif",
              textDecoration: "underline",
              transition: "color 0.2s ease-in-out",
              fontSize: "16px",
              cursor: "pointer",
              "&:hover": { color: "#ff0000" },
            }}
            onClick={() =>
              window.open("https://www.instagram.com/yabish.yabish/", "_blank")
            }
          >
            INSTAGRAM
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontFamily: "Anton, sans-serif",
              fontSize: "16px",
              marginTop: "2rem",
            }}
          >
            © YABISH 2024
          </Typography>
        </Box>
      </Box>
    );
  }
  // ######################################################### Desktop View
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
      <BGVideo />
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
          expression.
          <br />
          <br />
        </Typography>
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
          。我们致力于帮助全球潜力无限的地上与地下艺人获得更多关注。
          <br />
          音乐的力量在于连接不同文化，通过跨越地域的艺术表达，打造无界限的创意共同体。
        </Typography>
        <Typography
          sx={{
            fontFamily: "Antonio, sans-serif",
            fontSize: "18px",
          }}
        >
          <br />
          CONTACT <br />
          Artist Booking/Management: yabish.prod@gmail.com <br />
          <br />
          FOLLOW ME
        </Typography>

        <Typography
          sx={{
            color: "white",
            fontFamily: "Anton, sans-serif",
            textDecoration: "underline",
            transition: "color 0.2s ease-in-out",
            fontSize: "16px",
            "&:hover": {
              color: "#ff0000",
            },
            cursor: "pointer",
          }}
          onClick={() =>
            window.open("https://www.instagram.com/yabish.yabish/", "_blank")
          }
        >
          INSTAGRAM
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
