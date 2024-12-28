import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, Button, Typography } from "@mui/material";
import { useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { pageVariants } from "../../animations/pageVariants";

function Model({ isWhite, fadeOut, fadeIn }) {
  const { scene } = useGLTF("/models/yabish3d.glb");
  const modelRef = useRef();
  const [direction, setDirection] = useState(1);
  const leftMaxAngle = -Math.PI / 18;
  const rightMaxAngle = Math.PI / 4;
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

    // Apply fade-in effect
    if (fadeIn && modelRef.current) {
      modelRef.current.traverse((child) => {
        if (child.isMesh) {
          child.material.opacity = Math.min(
            1,
            child.material.opacity + 0.02 // Gradually increase opacity
          );
          child.material.transparent = true;
        }
      });
    }

    // Apply fade-out effect
    if (fadeOut && modelRef.current) {
      modelRef.current.traverse((child) => {
        if (child.isMesh) {
          child.material.opacity = Math.max(
            0,
            child.material.opacity - 0.02 // Gradually decrease opacity
          );
          child.material.transparent = true;
        }
      });
    }
  });

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.color.set(isWhite ? "#FFFFFF" : "#000000");
      child.material.roughness = 0.486;
      child.material.metalness = 0;

      // Set opacity based on fadeIn or fadeOut state
      child.material.opacity = fadeIn || fadeOut ? 0 : 1;
      child.material.transparent = fadeIn || fadeOut;
    }
  });

  return <primitive ref={modelRef} object={scene} position={[0, 0.2, 0]} />;
}

export default function LandingPage() {
  const navigate = useNavigate();
  const [isBlackBackground, setIsBlackBackground] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [triggerShake, setTriggerShake] = useState(false);
  const [fadeOutModel, setFadeOutModel] = useState(false);

  const handleEnterClick = () => {
    setShowButton(false); // Hide the button
    setIsBlackBackground(true); // Switch to black background

    // Trigger the shake effect
    setTimeout(() => {
      setTriggerShake(true);
    }, 50);

    // Trigger the fade-out effect
    setTimeout(() => {
      setFadeOutModel(true);
    }, 500);

    // Navigate to /home after fade-out
    setTimeout(() => {
      navigate("/home");
    }, 500);
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: isBlackBackground ? "black" : "white",
        position: "relative",
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      {/* ENTER Button */}
      {showButton && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <Button
            variant="text"
            sx={{
              position: "absolute",
              top: "60%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 10,
              backgroundColor: "transparent",
              opacity: 1,
              "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
            }}
            onClick={handleEnterClick}
          >
            <Typography
              sx={{
                fontSize: "40px",
                color: isBlackBackground ? "white" : "black",
                fontFamily: "Anton, sans-serif",
              }}
            >
              ENTER
            </Typography>
          </Button>
        </motion.div>
      )}

      {/* Model Box with Rotational Shake Effect */}
      <motion.div
        animate={
          triggerShake
            ? {
                rotate: [0, -10, 10, -8, 8, -6, 6, -4, 4, 0],
                transition: { duration: 0.5, ease: "easeInOut" },
              }
            : {}
        }
        style={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <Canvas
          style={{ height: "100%", width: "100%" }}
          camera={{ position: [0, 0, 2], fov: 50 }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 10, 5]} intensity={8} />
          <Model
            isWhite={isBlackBackground}
            fadeOut={fadeOutModel}
            fadeIn={!isBlackBackground}
          />
        </Canvas>
      </motion.div>
    </motion.div>
  );
}
