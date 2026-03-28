import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import godbgvid from "../../assets/pics/99godbgvid.webm";
import yakabgvid from "../../assets/pics/yakabgvid.webm";
import TopLeft from "../../utils/TopLeft";
import TopBarMobile from "../../utils/TopBarMobile";

export default function ArtistMainPage() {
  const [activeVideo, setActiveVideo] = useState("");
  const [videoKey, setVideoKey] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [godLoaded, setGodLoaded] = useState(false);
  const [yakaLoaded, setYakaLoaded] = useState(false);
  const [debugLog, setDebugLog] = useState([]);
  const navigate = useNavigate();

  const addLog = (msg) => setDebugLog((prev) => [...prev, msg]);

  useEffect(() => {
    setVideoKey((prevKey) => prevKey + 1);
  }, [activeVideo]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const bothLoaded = godLoaded && yakaLoaded;

  // ─── Mobile View ──────────────────────────────────────────────────────────
  if (isMobile) {
    return (
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          width: "100vw",
          backgroundColor: "black",
          overflow: "hidden",
        }}
      >
        <TopBarMobile />

        {/* Top half — 99 GOD video */}
        <Box
          onClick={() => navigate("/99god")}
          sx={{
            position: "absolute",
            inset: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 55%)",
            opacity: bothLoaded ? 1 : 0,
            transition: "opacity 0.6s ease",
            cursor: "pointer",
            zIndex: 2,
          }}
        >
          <video
            src={godbgvid}
            autoPlay
            muted
            loop
            playsInline
            onCanPlayThrough={() => { setGodLoaded(true); addLog("god: canplaythrough"); }}
            onError={(e) => addLog(`god error: ${e.target.error?.code} ${e.target.error?.message}`)}
            onStalled={() => addLog("god: stalled")}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>

        {/* Bottom half — YAKA video */}
        <Box
          onClick={() => navigate("/yaka")}
          sx={{
            position: "absolute",
            inset: 0,
            clipPath: "polygon(0 55%, 100% 45%, 100% 100%, 0 100%)",
            opacity: bothLoaded ? 1 : 0,
            transition: "opacity 0.6s ease",
            cursor: "pointer",
            zIndex: 2,
          }}
        >
          <video
            src={yakabgvid}
            autoPlay
            muted
            loop
            playsInline
            onCanPlayThrough={() => { setYakaLoaded(true); addLog("yaka: canplaythrough"); }}
            onError={(e) => addLog(`yaka error: ${e.target.error?.code} ${e.target.error?.message}`)}
            onStalled={() => addLog("yaka: stalled")}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>

        {/* 99 GOD label — centered in top half */}
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            top: "25%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
            opacity: bothLoaded ? 1 : 0,
            transition: "opacity 0.6s ease",
            pointerEvents: "none",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontFamily: "Anton, sans-serif",
              fontSize: "40px",
              userSelect: "none",
            }}
          >
            99 GOD
          </Typography>
        </Box>

        {/* YAKA label — centered in bottom half */}
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            top: "75%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
            opacity: bothLoaded ? 1 : 0,
            transition: "opacity 0.6s ease",
            pointerEvents: "none",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontFamily: "Anton, sans-serif",
              fontSize: "40px",
              userSelect: "none",
            }}
          >
            YAKA
          </Typography>
        </Box>

        {/* Instagram button */}
        <Button
          variant="outlined"
          sx={{
            position: "absolute",
            bottom: "2%",
            left: "2%",
            zIndex: 20,
            color: "white",
            padding: "0.5rem 1rem",
            borderRadius: "5px",
            borderColor: "white",
            "&:hover": { backgroundColor: "black", borderColor: "#ff0000" },
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
              "&:hover": { color: "#ff0000" },
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
            width: "100%",
            textAlign: "center",
            zIndex: 20,
            pointerEvents: "none",
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

        {/* DEBUG OVERLAY — remove after diagnosis */}
        {debugLog.length > 0 && (
          <Box
            sx={{
              position: "absolute",
              top: "10%",
              left: "5%",
              right: "5%",
              zIndex: 9999,
              backgroundColor: "rgba(0,0,0,0.85)",
              padding: "1rem",
              borderRadius: "4px",
              pointerEvents: "none",
            }}
          >
            {debugLog.map((line, i) => (
              <Typography key={i} sx={{ color: "#00ff00", fontFamily: "monospace", fontSize: "12px" }}>
                {line}
              </Typography>
            ))}
          </Box>
        )}
      </Box>
    );
  }

  // ─── Desktop View ─────────────────────────────────────────────────────────
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
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 1,
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
        <Box
          sx={{ position: "relative", width: "fit-content" }}
          onMouseEnter={() => setActiveVideo(godbgvid)}
          onMouseLeave={() => setActiveVideo("")}
        >
          <Button
            variant="text"
            sx={{
              backgroundColor: "transparent",
              color: "white",
              fontFamily: "Anton, sans-serif",
              fontSize: "80px",
              "&:hover": { backgroundColor: "transparent", color: "red" },
              zIndex: 100,
            }}
            onClick={() => navigate("/99god")}
          >
            99 GOD
          </Button>
        </Box>

        {/* YAKA Button */}
        <Box
          sx={{ position: "relative", width: "fit-content" }}
          onMouseEnter={() => setActiveVideo(yakabgvid)}
          onMouseLeave={() => setActiveVideo("")}
        >
          <Button
            variant="text"
            sx={{
              backgroundColor: "transparent",
              color: "white",
              fontFamily: "Anton, sans-serif",
              fontSize: "80px",
              "&:hover": { backgroundColor: "transparent", color: "red" },
            }}
            onClick={() => navigate("/yaka")}
          >
            YAKA
          </Button>
        </Box>

        {/* Instagram Button */}
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
            "&:hover": { backgroundColor: "black", borderColor: "#ff0000" },
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
              "&:hover": { color: "#ff0000" },
            }}
          >
            INSTAGRAM
          </Typography>
        </Button>

        {/* Footer */}
        <Box
          sx={{ position: "absolute", bottom: "2%", textAlign: "center" }}
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
