import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import YABISHLogo from "../../assets/YABISHlogo.png";
import BGVideo from "../BGVideo";
import mong_tong_chunyou_video from "/src/assets/mongtong_chunyou_video/mongtong_chunyou_video.webm";
import mong_tong_chunyou_video_fallback from "/src/assets/mongtong_chunyou_video/mongtong_fallback.mp4";

const chunyou_poster =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/c8e4e580-bac1-4c60-23a5-f2ec2d19fc00/public";

const mong_tong_solo_poster =
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/9a99bfa3-d6c0-49a9-e00c-6ebd1bb2a000/public";

export default function MongTongChunYou() {
  const navigate = useNavigate();
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
  // ######################################################### Mobile View
  if (isMobile) {
    return (
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "black",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none",
        }}
      >
        <BGVideo />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        />
        <TopLeftMobile />
        <Box
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            zIndex: 20,
          }}
        >
          {/* Title Section */}
          <Box
            sx={{
              height: {
                xs: "60%",
              },
              width: "calc(100% - 120px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              left: "120px",
            }}
          >
            {/* Title */}
            <Typography
              sx={{
                color: "red",
                fontFamily: "Anton, sans-serif",
                fontSize: "35px",
                textAlign: "center",
              }}
            >
              YaBish Pres.「Mong Tong at CHUNYOU 2024」
            </Typography>
          </Box>
          {/* Words Section */}
          <Box
            sx={{
              height: "100%",
              overflowY: "auto",
              padding: "1rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={chunyou_poster}
                alt="rain dogs tour poster"
                style={{ width: "50%", height: "auto" }}
              ></img>
            </Box>

            <Typography
              sx={{
                color: "white",
                fontFamily: "Antonio, sans-serif",
                fontSize: "18px",
              }}
            >
              <br />
              In 2024, CHENGDU{" "}
              <Typography
                component="span" // Prevents line break
                sx={{
                  color: "white",
                  fontFamily: "Antonio, sans-serif",
                  textDecoration: "underline",
                  transition: "color 0.2s ease-in-out",
                  fontSize: "18px",
                  "&:hover": {
                    color: "#ff0000",
                  },
                }}
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/chunyoufestival?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                    "_blank"
                  )
                }
              >
                ‘CHUNYOU’ Music Festival
              </Typography>{" "}
              celebrated its 10th anniversary. As one of China’s most
              influential gatherings for independent music and youth culture,
              ‘CHUNYOU’ has been captivating fans and artists alike every third
              weekend of April since 2013 with its cutting-edge lineups and
              free-spirited creative energy. <br />
              <br />
              Over the past decade, ‘CHUNYOU’ has become a hallmark event for
              young audiences to consume music and embrace life. In its
              milestone year, YaBish served as a cultural bridge, successfully
              bringing the psychedelic electronic duo Mong Tong from Taiwan to
              CHUNYOU’s "Imagination Stage."
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontFamily: "Antonio, sans-serif",
                fontSize: "18px",
              }}
            >
              <br />
              <Typography
                component="span" // Prevents line break
                sx={{
                  color: "white",
                  fontFamily: "Antonio, sans-serif",
                  textDecoration: "underline",
                  transition: "color 0.2s ease-in-out",
                  fontSize: "18px",
                  "&:hover": {
                    color: "#ff0000",
                  },
                }}
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/mongtongband?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                    "_blank"
                  )
                }
              >
                Mong Tong
              </Typography>
              : “CHUNYOU’s 10th anniversary was just the beginning." <br />
              <br />
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={mong_tong_solo_poster}
                alt="rain dogs tour poster"
                style={{ width: "60%", height: "auto" }}
              ></img>
            </Box>

            <Typography
              sx={{
                color: "white",
                fontFamily: "Antonio, sans-serif",
                fontSize: "18px",
              }}
            >
              <br />
              As a label dedicated to discovering and promoting artists, YaBish
              is breaking geographical barriers and securing greater
              opportunities for exceptional talents. We championed Mong Tong—a
              Taiwanese duo renowned for their mystical Eastern aesthetics and
              hypnotic electronic soundscapes—whose avant-garde vision perfectly
              aligned with CHUNYOU’s experimental spirit.
              <br />
              <br />
              Emerging from a primordial soup of supernatural folklore, alien
              conspiracy theories, and traditional Taiwanese funeral and wedding
              ceremonies, Mong Tong labels their sound "superstitious music."
              Composed of the brother duo ‘Hom Yu and Jiun Chi, their live
              performances are near-religious experiences—dressed in collarless
              shirts and blindfolded, they conjure rhythmic layers that drive
              audiences into ecstatic dance. Rooted in the electronic organ
              tones of Taiwanese rituals, their music samples fragments from
              different eras, melting them into a fusion that forges something
              entirely new.
              <br />
              <br />
              International Music Festival Experiences： <br />
              2025 Roadburn Festival <br />
              2024 Live on Audiotree <br />
              2024 Live on KEXP <br />
              2024 SXSW <br />
              2024 Joyland Festival <br />
              2023 Le Guess Who
              <br />
              <br />
              2024年，
              <Typography
                component="span" // Prevents line break
                sx={{
                  color: "white",
                  fontFamily: "Antonio, sans-serif",
                  textDecoration: "underline",
                  transition: "color 0.2s ease-in-out",
                  fontSize: "18px",
                  "&:hover": {
                    color: "#ff0000",
                  },
                }}
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/chunyoufestival?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                    "_blank"
                  )
                }
              >
                成都春游音乐节
              </Typography>
              迎来十周年。作为中国最具影响力的独立音乐与青年文化盛会之一，成都春游音乐节自2013年起，每年4月的第三个周末都以先锋的音乐阵容、自由的创意氛围，吸引着无数乐迷与艺术工作者。
              十年来，它已成为青年群体“消费音乐、享受生活”的标志性节日，2024年YaBish成功邀请了来自台湾的迷幻电子实验组合Mong
              Tong登上春游想象力舞台。
              <br />
              <br />
              <Typography
                component="span" // Prevents line break
                sx={{
                  color: "white",
                  fontFamily: "Antonio, sans-serif",
                  textDecoration: "underline",
                  transition: "color 0.2s ease-in-out",
                  fontSize: "18px",
                  "&:hover": {
                    color: "#ff0000",
                  },
                }}
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/mongtongband?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                    "_blank"
                  )
                }
              >
                MongTong
              </Typography>
              ：春游十周年只是一个开始
              <br />
              <br />
              作为专注挖掘并推广全球前沿音乐人的厂牌，YaBish始终致力于打破地域边界，为优秀艺人争取更广阔的机会。在策划春游十周年特别阵容时，我们力荐Mong
              Tong——这支以神秘东方美学与迷幻电子声景闻名的台湾双人组合，其音乐气质与春游“想象力舞台”的先锋定位高度契合。
              <br />
              <br />
              自灵异怪谈、外星人节目和传统婚丧喜庆场的原始汤中诞生，「迷信音乐」是他们给自己的标签。
              <br />
              <br />
              由兄弟档洪御和郡崎组成，现场演出时两人身着无领衬衫，眼矇黑布。透过不断堆叠的节奏，召唤台下的观众舞至狂喜。以台湾祭仪惯用的电子琴音色为底，透过取样，拾起不同年代的碎片重铸，开创融合，再淬炼出属于自己的新生音乐。
              <br />
              <br />
              国际音乐节经历： <br />
              2025 Roadburn Festival <br />
              2024 Live on Audiotree <br />
              2024 Live on KEXP <br />
              2024 SXSW <br />
              2024 Joyland Festival <br />
              2023 Le Guess Who
            </Typography>
            <Box sx={{ mt: 3, mb: 3 }}>
              <video
                controls
                playsInline
                poster="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/af39fd4a-aa80-412a-674b-c6d201b4ff00/public"
                style={{ width: "100%", borderRadius: 8, display: "block" }}
              >
                <source
                  src={mong_tong_chunyou_video_fallback}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <Typography
                sx={{
                  color: "white",
                  fontFamily: "Glow Sans SC Compressed, sans-serif",
                  fontSize: "16px",
                  textAlign: "center",
                  mt: 2,
                }}
              >
                现场视频回顾Recap <br />
                拍摄剪辑shot/editing：张成飞/阿柔罕
              </Typography>
            </Box>

            <Typography
              sx={{
                color: "white",
                fontFamily: "Glow Sans SC Compressed, sans-serif",
                fontSize: "16px",
              }}
            >
              主办推广Promoter Label:Morning早上好/YaBish <br />
              统筹Event Manager:富江/Ludar@YaBish
            </Typography>
          </Box>

          {/* Footer Section */}
          <Box
            sx={{
              height: "15%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontFamily: "Anton, sans-serif",
                fontSize: "16px",
              }}
            >
              © YABISH 2024
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "black",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <BGVideo />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      />
      <TopLeft />
      <Box
        sx={{
          height: "100%",
          width: "60%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          zIndex: 20,
        }}
      >
        {/* Title Section */}
        <Box
          sx={{
            height: "30%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 20,
          }}
        >
          {/* Back Button */}
          <Button
            onClick={() => navigate("/events")}
            sx={{
              position: "absolute",
              left: 0,
              color: "white",
              fontSize: "20px",
              fontFamily: "Anton, sans-serif",
              zIndex: 20,
            }}
          >
            <ArrowBackIosIcon />
          </Button>
          {/* Title */}
          <Typography
            sx={{
              color: "red",
              fontFamily: "Anton, sans-serif",
              fontSize: "40px",
              textAlign: "center",
            }}
          >
            YaBish Pres.「Mong Tong at CHUNYOU 2024」
          </Typography>
        </Box>
        {/* Words Section */}
        <Box
          sx={{
            height: "100%",
            overflowY: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={chunyou_poster}
              alt="rain dogs tour poster"
              style={{ width: "40%", height: "auto" }}
            ></img>
          </Box>

          <Typography
            sx={{
              color: "white",
              fontFamily: "Antonio, sans-serif",
              fontSize: "18px",
            }}
          >
            <br />
            In 2024, CHENGDU{" "}
            <Typography
              component="span" // Prevents line break
              sx={{
                color: "white",
                fontFamily: "Antonio, sans-serif",
                textDecoration: "underline",
                transition: "color 0.2s ease-in-out",
                fontSize: "18px",
                "&:hover": {
                  color: "#ff0000",
                },
              }}
              onClick={() =>
                window.open(
                  "https://www.instagram.com/chunyoufestival?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                  "_blank"
                )
              }
            >
              ‘CHUNYOU’ Music Festival
            </Typography>{" "}
            celebrated its 10th anniversary. As one of China’s most influential
            gatherings for independent music and youth culture, ‘CHUNYOU’ has
            been captivating fans and artists alike every third weekend of April
            since 2013 with its cutting-edge lineups and free-spirited creative
            energy.
            <br />
            <br />
            Over the past decade, ‘CHUNYOU’ has become a hallmark event for
            young audiences to consume music and embrace life. In its milestone
            year, YaBish served as a cultural bridge, successfully bringing the
            psychedelic electronic duo Mong Tong from Taiwan to CHUNYOU’s
            "Imagination Stage."
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontFamily: "Antonio, sans-serif",
              fontSize: "18px",
            }}
          >
            <br />
            <Typography
              component="span" // Prevents line break
              sx={{
                color: "white",
                fontFamily: "Antonio, sans-serif",
                textDecoration: "underline",
                transition: "color 0.2s ease-in-out",
                fontSize: "18px",
                "&:hover": {
                  color: "#ff0000",
                },
              }}
              onClick={() =>
                window.open(
                  "https://www.instagram.com/mongtongband?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                  "_blank"
                )
              }
            >
              Mong Tong
            </Typography>
            : “CHUNYOU's 10th anniversary was just the beginning."
            <br />
            <br />
          </Typography>
          {/* flag: raind dogs tour pics */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={mong_tong_solo_poster}
              alt="rain dogs tour poster"
              style={{ width: "40%", height: "auto" }}
            ></img>
          </Box>

          <Typography
            sx={{
              color: "white",
              fontFamily: "Antonio, sans-serif",
              fontSize: "18px",
            }}
          >
            <br />
            As a label dedicated to discovering and promoting artists, YaBish is
            breaking geographical barriers and securing greater opportunities
            for exceptional talents. We championed Mong Tong—a Taiwanese duo
            renowned for their mystical Eastern aesthetics and hypnotic
            electronic soundscapes—whose avant-garde vision perfectly aligned
            with CHUNYOU’s experimental spirit.
            <br />
            <br />
            Emerging from a primordial soup of supernatural folklore, alien
            conspiracy theories, and traditional Taiwanese funeral and wedding
            ceremonies, Mong Tong labels their sound "superstitious music."
            Composed of the brother duo ‘Hom Yu and Jiun Chi, their live
            performances are near-religious experiences—dressed in collarless
            shirts and blindfolded, they conjure rhythmic layers that drive
            audiences into ecstatic dance. Rooted in the electronic organ tones
            of Taiwanese rituals, their music samples fragments from different
            eras, melting them into a fusion that forges something entirely new.
            <br />
            <br />
            International Music Festival Experiences： <br />
            2025 Roadburn Festival <br />
            2024 Live on Audiotree <br />
            2024 Live on KEXP <br />
            2024 SXSW <br />
            2024 Joyland Festival <br />
            2023 Le Guess Who
            <br />
            <br />
            2024年，
            <Typography
              component="span" // Prevents line break
              sx={{
                color: "white",
                fontFamily: "Antonio, sans-serif",
                textDecoration: "underline",
                transition: "color 0.2s ease-in-out",
                fontSize: "18px",
                "&:hover": {
                  color: "#ff0000",
                },
              }}
              onClick={() =>
                window.open(
                  "https://www.instagram.com/chunyoufestival?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                  "_blank"
                )
              }
            >
              成都春游音乐节
            </Typography>
            迎来十周年。作为中国最具影响力的独立音乐与青年文化盛会之一，成都春游音乐节自2013年起，每年4月的第三个周末都以先锋的音乐阵容、自由的创意氛围，吸引着无数乐迷与艺术工作者。
            十年来，它已成为青年群体“消费音乐、享受生活”的标志性节日，2024年YaBish成功邀请了来自台湾的迷幻电子实验组合Mong
            Tong登上春游想象力舞台。
            <br />
            <br />
            <Typography
              component="span" // Prevents line break
              sx={{
                color: "white",
                fontFamily: "Antonio, sans-serif",
                textDecoration: "underline",
                transition: "color 0.2s ease-in-out",
                fontSize: "18px",
                "&:hover": {
                  color: "#ff0000",
                },
              }}
              onClick={() =>
                window.open(
                  "https://www.instagram.com/mongtongband?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                  "_blank"
                )
              }
            >
              MongTong
            </Typography>
            ：春游十周年只是一个开始
            <br />
            <br />
            作为专注挖掘并推广全球前沿音乐人的厂牌，YaBish始终致力于打破地域边界，为优秀艺人争取更广阔的机会。在策划春游十周年特别阵容时，我们力荐Mong
            Tong——这支以神秘东方美学与迷幻电子声景闻名的台湾双人组合，其音乐气质与春游“想象力舞台”的先锋定位高度契合。
            <br />
            <br />
            自灵异怪谈、外星人节目和传统婚丧喜庆场的原始汤中诞生，「迷信音乐」是他们给自己的标签。
            <br />
            <br />
            由兄弟档洪御和郡崎组成，现场演出时两人身着无领衬衫，眼矇黑布。透过不断堆叠的节奏，召唤台下的观众舞至狂喜。以台湾祭仪惯用的电子琴音色为底，透过取样，拾起不同年代的碎片重铸，开创融合，再淬炼出属于自己的新生音乐。
            <br />
            <br />
            国际音乐节经历： <br />
            2025 Roadburn Festival <br />
            2024 Live on Audiotree <br />
            2024 Live on KEXP <br />
            2024 SXSW <br />
            2024 Joyland Festival <br />
            2023 Le Guess Who
            <br />
          </Typography>
          <Box sx={{ p: 5 }}>
            <video
              controls
              style={{ width: "100%", borderRadius: 8, display: "block" }}
            >
              <source src={mong_tong_chunyou_video} type="video/webm" />
              Your browser does not support the video tag.
            </video>
            <Typography
              sx={{
                color: "white",
                fontFamily: "Glow Sans SC Compressed, sans-serif",
                fontSize: "16px",
                textAlign: "center",
                mt: 2,
              }}
            >
              现场视频回顾Recap <br />
              拍摄剪辑shot/editing：张成飞/阿柔罕
            </Typography>
          </Box>

          <Typography
            sx={{
              color: "white",
              fontFamily: "Glow Sans SC Compressed, sans-serif",
              fontSize: "16px",
            }}
          >
            主办推广Promoter Label:Morning早上好/YaBish <br />
            统筹Event Manager:富江/Ludar@YaBish
            <br />
          </Typography>
        </Box>

        {/* Footer Section */}
        <Box
          sx={{
            height: "15%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontFamily: "Anton, sans-serif",
              fontSize: "16px",
            }}
          >
            © YABISH 2024
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

function TopLeft() {
  const navigate = useNavigate();
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
          {/* Artists Router */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            onClick={() => {
              navigate("/artist");
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
              Artists
            </Typography>
          </motion.div>
          {/* Events Route */}
          <motion.div whileHover={{ scale: 1.1 }}>
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
                textDecoration: "underline",
              }}
            >
              Events
            </Typography>
          </motion.div>
          {/* About Route */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            onClick={() => {
              navigate("/about");
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
              About
            </Typography>
          </motion.div>
        </Box>
      </Box>
      <Button
        variant="outlined"
        sx={{
          position: "absolute",
          bottom: "2%",
          left: "2%",
          color: "white",
          padding: "0.5rem 1rem",
          fontFamily: "Anton, sans-serif",
          fontSize: "20px",
          borderRadius: "5px",
          borderColor: "white",
          "&:hover": {
            backgroundColor: "transparent",
            borderColor: "#ff0000",
          },
          zIndex: 200,
        }}
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
          onClick={() =>
            window.open("https://www.instagram.com/yabish.yabish/", "_blank")
          }
        >
          INSTAGRAM
        </Typography>
      </Button>
    </>
  );
}

function TopLeftMobile() {
  const navigate = useNavigate();
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
          {/* Artists Router */}
          <Box
            onClick={() => {
              navigate("/artist");
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
              Artists
            </Typography>
          </Box>
          {/* Events Route */}
          <Box
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
                textDecoration: "underline",
              }}
            >
              Events
            </Typography>
          </Box>
          {/* About Route */}
          <Box
            onClick={() => {
              navigate("/about");
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
              About
            </Typography>
          </Box>
        </Box>
      </Box>
      <Button
        variant="outlined"
        sx={{
          position: "absolute",
          bottom: "2%",
          left: "2%",
          color: "white",
          padding: "0.5rem 1rem",
          fontFamily: "Anton, sans-serif",
          fontSize: "20px",
          borderRadius: "5px",
          borderColor: "white",
          "&:hover": {
            backgroundColor: "transparent",
            borderColor: "#ff0000",
          },
          zIndex: 200,
        }}
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
          onClick={() =>
            window.open("https://www.instagram.com/yabish.yabish/", "_blank")
          }
        >
          INSTAGRAM
        </Typography>
      </Button>
    </>
  );
}
