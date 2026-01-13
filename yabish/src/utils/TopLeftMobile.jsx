import { Box, Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import YABISHLogo from "../assets/YABISHlogo.png"; // Adjust path if needed

export default function TopLeftMobile() {
  const navigate = useNavigate();
  const location = useLocation();

  // Helper Component for Menu Items
  const MenuItem = ({ label, path }) => {
    // Check if the item is active
    const isActive =
      location.pathname === path ||
      (path !== "/" && location.pathname.startsWith(path));

    return (
      <Box onClick={() => navigate(path)}>
        <Typography
          sx={{
            color: isActive ? "#ff0000" : "white", // Red if active
            fontFamily: "Anton, sans-serif",
            fontSize: "30px",
            transition: "color 0.3s ease-in-out",
            "&:hover": {
              color: "#ff0000",
            },
            userSelect: "none",
            textDecoration: isActive ? "underline" : "none", // Underline if active
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
        top: "2%",
        left: "2%",
        zIndex: 2000,
        padding: "1rem",
      }}
    >
      {/* Logo */}
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

      {/* Menu Links */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "100%",
        }}
      >
        <MenuItem label="Artists" path="/artist" />
        <MenuItem label="Release" path="/release" />
        <MenuItem label="Shows" path="/shows" />
        <MenuItem label="About" path="/about" />
      </Box>
    </Box>
  );
}
