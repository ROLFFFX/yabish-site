import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box } from "@mui/material";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";
import { pageVariants } from "../../animations/pageVariants";

/**
 * Model Component with Animation
 */
function Model() {
  const { scene } = useGLTF("/models/yabish3d.glb");
  const modelRef = useRef();
  const [direction, setDirection] = useState(1);
  const leftMaxAngle = -Math.PI / 18; // 10 degrees to the left
  const rightMaxAngle = Math.PI / 4; // 45 degrees to the right
  const baseSpeed = 0.008; // Base rotation speed

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
    }
  });

  return <primitive ref={modelRef} object={scene} position={[0, 0.2, 0]} />;
}

/**
 * HomePage Component
 */
export default function HomePage() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ height: "100vh", backgroundColor: "black" }} // Black background
    >
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Canvas
          style={{ height: "100%", width: "100%" }}
          camera={{ position: [0, 0, 2], fov: 50 }}
        >
          <ambientLight intensity={1} />
          <directionalLight position={[5, 10, 5]} intensity={1.5} />
          <Model />
          {/* <OrbitControls target={[0, 0, 0]} /> */}
        </Canvas>
      </Box>
    </motion.div>
  );
}
