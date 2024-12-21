import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, Button, Typography } from "@mui/material";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { useFont } from "../../hooks/useFont";
import { useNavigate } from "react-router-dom";

/**
  This model component defines the model being displayed on canvas, specifically the ANIMATION, here are several
  parameters that control its behavior.

  @param {left/rightMaxAngle}: defines the max angle it rotates on the horizontal
  level. Currently, it's 10º to left and 45º to right.
  @param {speedMultiplier}: controls the speed of rotation.
  @param {direction}: controls rotation direction during updates, 1 = right, -1 = left.
 */
function Model() {
  const { scene } = useGLTF("/models/yabish3d.glb");
  const modelRef = useRef();
  const [direction, setDirection] = useState(1);
  const leftMaxAngle = -Math.PI / 18; // 10 degrees to the left
  const rightMaxAngle = Math.PI / 4; // 45 degrees to the right
  const baseSpeed = 0.008; // base speed of rotation
  const minSpeed = 0.004; // min speed for easing

  useFrame(() => {
    if (modelRef.current) {
      const currentAngle = modelRef.current.rotation.y;
      const easingZone = Math.PI / 36; // ~5 degrees
      let speedMultiplier = baseSpeed;
      if (
        (direction === 1 && currentAngle > rightMaxAngle - easingZone) || // Near right max
        (direction === -1 && currentAngle < leftMaxAngle + easingZone) // Near left max
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
        (direction === 1 && currentAngle < leftMaxAngle + easingZone) || // Starting right
        (direction === -1 && currentAngle > rightMaxAngle - easingZone) // Starting left
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

  return <primitive ref={modelRef} object={scene} position={[0, 0.2, 0]} />; // position 0.2 controls the vertical position of model
}

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <Box
      // border={1}
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
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
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.1)",
          },
          "&:active": {
            color: "#000",
          },
          "&:focus": {
            outline: "none",
            color: "#000",
            boxShadow: "none",
          },
          boxShadow: "none",
          border: "none",
        }}
        onClick={() => navigate("/home")}
      >
        <Typography
          sx={{
            fontSize: "40px",
            color: "black",
            fontFamily: "Koulen, sans-serif",
          }}
        >
          ENTER
        </Typography>
      </Button>
      <Canvas
        style={{ height: "90%" }}
        camera={{ position: [0, 0, 2], fov: 50 }}
      >
        <ambientLight />
        <directionalLight position={[5, 10, 5]} intensity={1} />
        <Model />
        <OrbitControls target={[0, 0, 0]} />
      </Canvas>
    </Box>
  );
}
