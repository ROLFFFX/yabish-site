import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import video1 from "../../assets/godvideo/compressed_godvideo1.webm";
import video2 from "../../assets/godvideo/compressed_godvideo2.webm";
import video3 from "../../assets/godvideo/compressed_godvideo3.webm";
import video4 from "../../assets/godvideo/compressed_godvideo4.webm";
import video5 from "../../assets/godvideo/compressed_godvideo5.webm";

const videos = [video1, video2, video3, video4, video5];

const videoStyle = {
  width: "auto",
  height: "auto",
  maxWidth: "100%",
  objectFit: "cover",
  borderRadius: "10px",
  padding: "10px",
};

export default function GodVideosView() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    className: "center",
    centerMode: false,
    infinite: false,
    slidesToShow: isMobile ? 1.5 : 3,
    speed: 400,
  };

  return (
    <Box sx={{ width: "100%" }}>
      <div
        className="slider-container"
        style={{ width: "95%", margin: "0 auto", padding: "1rem 0" }}
      >
        <Slider {...settings}>
          {videos.map((src, index) => (
            <div key={index}>
              <video
                src={src}
                autoPlay
                muted
                loop
                playsInline
                style={videoStyle}
              />
            </div>
          ))}
        </Slider>
      </div>
    </Box>
  );
}
