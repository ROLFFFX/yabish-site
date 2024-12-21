import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box } from "@mui/material";
import { useGLTF, OrbitControls } from "@react-three/drei";

/**
 * Model Component: Loads the 3D model, applies Blender-inspired material settings, and adds rotation animation.
 */
function Model() {
  const { scene } = useGLTF("/models/yabish3d.glb");
  const modelRef = useRef();
  const [direction, setDirection] = useState(1);
  const leftMaxAngle = -Math.PI / 18;
  const rightMaxAngle = Math.PI / 4;
  const baseSpeed = 0.008;
  const minSpeed = 0.004;
  useFrame(() => {
    if (modelRef.current) {
      const currentAngle = modelRef.current.rotation.y;
      const easingZone = Math.PI / 36; // ~5 degrees
      let speedMultiplier = baseSpeed;
      if (
        (direction === 1 && currentAngle > rightMaxAngle - easingZone) ||
        (direction === -1 && currentAngle < leftMaxAngle + easingZone)
      ) {
        const distanceToEdge =
          direction === 1
            ? rightMaxAngle - currentAngle
            : currentAngle - leftMaxAngle;
        speedMultiplier = Math.max(
          minSpeed,
          baseSpeed * (distanceToEdge / easingZone)
        );
      }
      if (
        (direction === 1 && currentAngle < leftMaxAngle + easingZone) ||
        (direction === -1 && currentAngle > rightMaxAngle - easingZone)
      ) {
        const distanceFromEdge =
          direction === 1
            ? currentAngle - leftMaxAngle
            : rightMaxAngle - currentAngle;
        speedMultiplier = Math.min(
          baseSpeed,
          minSpeed + (baseSpeed - minSpeed) * (distanceFromEdge / easingZone)
        );
      }
      modelRef.current.rotation.y += speedMultiplier * direction;
      if (
        (direction === 1 && currentAngle > rightMaxAngle) ||
        (direction === -1 && currentAngle < leftMaxAngle)
      ) {
        setDirection(-direction);
      }
    }
  });

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.color.set("#ffffff");
      child.material.roughness = 0.486;
      child.material.metalness = 0;
      child.material.needsUpdate = true;
    }
  });

  return <primitive ref={modelRef} object={scene} position={[0, 0.2, 0]} />;
}

/**
 * HomePage Component: Renders the 3D model with a black background and animated rotation.
 */
export default function HomePage() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      <Canvas
        style={{
          height: "90%",
          width: "100%",
        }}
        camera={{ position: [0, 0, 2], fov: 50 }}
      >
        <ambientLight intensity={1} />{" "}
        <directionalLight position={[5, 10, 5]} intensity={1.5} /> <Model />
        <OrbitControls target={[0, 0, 0]} />
      </Canvas>
    </Box>
  );
}
