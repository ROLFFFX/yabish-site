import { Box, Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import YABISHLogo from "../assets/YABISHlogo.png"; // Adjust path if needed

export default function TopBarMobile() {
  const navigate = useNavigate();
  const location = useLocation();

  // Helper Component for Menu Items
  const MenuItem = ({ label, path }) => {
    // Check if the item is active
    const isActive =
      location.pathname === path ||
      (path !== "/" && location.pathname.startsWith(path));

    return (
      <Box onClick={() => navigate(path)} sx={{ cursor: "pointer" }}>
        <Typography
          sx={{
            color: isActive ? "#ff0000" : "white",
            fontFamily: "Anton, sans-serif",
            fontSize: "18px",
            transition: "color 0.3s ease-in-out",
            "&:hover": {
              color: "#ff0000",
            },
            userSelect: "none",
            textDecoration: isActive ? "underline" : "none",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
        >
          {label}
        </Typography>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 2000,
        padding: "1rem", // Standard padding
        display: "flex",
        flexDirection: "row", // Horizontal Layout
        justifyContent: "space-between", // Logo Left, Items Right
        alignItems: "center", // Vertically centered
        // Gradient for readability
        background:
          "linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%)",
      }}
    >
      {/* LEFT: Logo */}
      <img
        src={YABISHLogo}
        alt="YABISH Logo"
        style={{
          width: "88px",
          height: "auto",
          cursor: "pointer",
        }}
        onClick={() => {
          navigate("/home");
        }}
      />

      {/* RIGHT: Menu Links */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "0.6rem",
        }}
      >
        <MenuItem label="Artists" path="/artist" />
        <MenuItem label="Releases" path="/release" />
        <MenuItem label="Shows" path="/shows" />
        <MenuItem label="About" path="/about" />
      </Box>
    </Box>
  );
}
