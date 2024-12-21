import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, Button, Typography } from "@mui/material";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { pageVariants } from "../../animations/pageVariants";

function Model() {
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
  });

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.color.set("#000000"); // Black model
      child.material.roughness = 0.486;
      child.material.metalness = 0;
    }
  });

  return <primitive ref={modelRef} object={scene} position={[0, 0.2, 0]} />;
}

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{
        height: "100vh",
        backgroundColor: "white", // White background
        position: "relative",
        overflow: "hidden",
        zIndex: 0, // Lower z-index for the transition blob
      }}
    >
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* ENTER Button */}
        <Button
          variant="text"
          sx={{
            position: "absolute",
            top: "60%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10, // Button above everything
            backgroundColor: "transparent",
            opacity: 1,
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
          }}
          onClick={() => navigate("/home")}
        >
          <Typography
            sx={{
              fontSize: "40px",
              color: "black", // Black text for white background
              fontFamily: "Koulen, sans-serif",
            }}
          >
            ENTER
          </Typography>
        </Button>

        {/* 3D Model */}
        <Canvas
          style={{ height: "90%" }}
          camera={{ position: [0, 0, 2], fov: 50 }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 10, 5]} intensity={8} />
          <Model />
          {/* <OrbitControls target={[0, 0, 0]} /> */}
        </Canvas>
      </Box>
    </motion.div>
  );
}
