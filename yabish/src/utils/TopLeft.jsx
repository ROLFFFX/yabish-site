import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import YABISHLogo from "../assets/YABISHlogo.png"; // Adjust path if needed

export default function TopLeft() {
  const navigate = useNavigate();
  const location = useLocation(); // 1. Get current location

  // Helper component for Menu Items
  const MenuItem = ({ label, path }) => {
    // 2. Determine if this item is active
    // We use .includes() so that sub-pages (e.g., /release/vol1) keep the parent highlighted
    // Check if location matches path OR if both are root-like (to avoid false positives)
    const artistSubRoutes = ["/99god", "/yaka"];
    const isActive =
      location.pathname === path ||
      (path !== "/" && location.pathname.startsWith(path)) ||
      (path === "/artist" && artistSubRoutes.some((r) => location.pathname.startsWith(r)));

    return (
      <motion.div
        whileHover={{ scale: 1.1 }}
        onClick={() => navigate(path)}
        style={{ cursor: "pointer" }}
      >
        <Typography
          sx={{
            // 3. Conditional Styling
            color: isActive ? "#ff0000" : "white",
            textDecoration: isActive ? "underline" : "none",
            fontFamily: "Anton, sans-serif",
            fontSize: "30px",
            transition: "color 0.3s ease-in-out",
            "&:hover": { color: "#ff0000" },
            userSelect: "none",
          }}
        >
          {label}
        </Typography>
      </motion.div>
    );
  };

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
              cursor: "pointer",
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
          {/* 4. Render Items without manually setting 'active' */}
          <MenuItem label="Artists" path="/artist" />
          <MenuItem label="Releases" path="/release" />
          <MenuItem label="Shows" path="/shows" />
          <MenuItem label="About" path="/about" />
        </Box>
      </Box>
    </>
  );
}
