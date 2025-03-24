import { Box, Button, Typography } from "@mui/material";
import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import YABISHLogo from "../..//assets/YABISHlogo.png";
import { pageVariants } from "../../animations/pageVariants";
import "./homePageStyle.css";

// image preload
import bgvideo from "../../assets/bgvideo.webm";
const PreloadBackgroundVideo = () => {
  useMemo(() => {
    const video = document.createElement("video");
    video.src = bgvideo;
    video.preload = "auto";
    video.load();
  }, []);

  return null;
};

function Model() {
  const { scene } = useGLTF("/models/yabish3d-compressed.glb");
  const modelRef = useRef();
  const [direction, setDirection] = useState(1);
  const leftMaxAngle = -Math.PI / 18; // 10 degrees to the left
  const rightMaxAngle = Math.PI / 4; // 45 degrees to the right
  const baseSpeed = 0.007;

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += baseSpeed * direction;

      if (
        (direction === 1 && modelRef.current.rotation.y > rightMaxAngle) ||
        (direction === -1 && modelRef.current.rotation.y < leftMaxAngle)
      ) {
        setDirection(-direction);
      }
    }
  });

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.color.set("#ffffff"); // White model
      child.material.roughness = 0.486;
      child.material.metalness = 0;
      child.material.opacity = 1; // Ensure full visibility
      child.material.transparent = false;
    }
  });

  return <primitive ref={modelRef} object={scene} position={[0, 0.2, 0]} />;
}

export default function HomePage() {
  const navigate = useNavigate();
  const [position, setPosition] = useState({ top: "100%", right: "100%" });
  const randomizePosition = () => {
    const randomTop = Math.random() * 70;
    const randomRight = Math.random() * 60;
    setPosition({
      top: `${randomTop}%`,
      right: `${randomRight}%`,
    });
  };

  const [mobilePosition, setIsMobilePosition] = useState({
    top: "100%",
    right: "100%",
  });

  const randomizeMobilePosition = () => {
    const randomTop = 55 + Math.random() * 25;
    const randomRight = Math.random() * 60;
    setIsMobilePosition({
      top: `${randomTop}%`,
      right: `${randomRight}%`,
    });
  };

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

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{
        height: "100vh",
        backgroundColor: "black",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <PreloadBackgroundVideo />
      {/* Fullscreen Canvas */}
      {isMobile ? (
        <Box
          sx={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Canvas
            style={{ height: "100%", width: "100%" }}
            camera={{ position: [1, 0, 6], fov: 50 }}
          >
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 10, 5]} intensity={8} />
            <Model />
          </Canvas>
        </Box>
      ) : (
        <Box
          sx={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Canvas
            style={{ height: "100%", width: "100%" }}
            camera={{ position: [1, 0, 3], fov: 50 }}
          >
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 10, 5]} intensity={8} />
            <Model />
          </Canvas>
        </Box>
      )}

      <TopLeft />

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
    </motion.div>
  );
}

function HoverableText({ text, route }) {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "1rem", // Add spacing between routes
      }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          animate={
            hoveredIndex === index
              ? { scaleX: 1.2 }
              : hoveredIndex !== null &&
                (hoveredIndex === index - 1 || hoveredIndex === index + 1)
              ? { scaleX: 1.1 }
              : { scaleX: 1 }
          }
          transition={{ duration: 0.2, ease: "easeInOut" }}
          style={{
            display: "inline-block",
            cursor: "pointer",
            margin: "0 1.5px",
          }}
          onClick={() => navigate(route)}
        >
          <Typography
            sx={{
              fontFamily: "Anton, sans-serif",
              fontSize: "30px",
              color: "white",
              transition: "color 0.3s ease-in-out",
              "&:hover": {
                color: "#ff0000",
              },
              userSelect: "none",
            }}
          >
            {char}
          </Typography>
        </motion.span>
      ))}
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
        zIndex: 2,
        padding: "1rem",
      }}
    >
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
