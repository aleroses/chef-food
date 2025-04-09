import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { sliderData } from "../../assets/fake-data/slider";
import { ChevronIcon } from "./ChevronIcon";
import { NavigationDots } from "./NavigationDots";

export const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    console.log("ejecutando...");

    const interval = setInterval(() => {
      console.log("Interval activo");
      setCurrentIndex((prev) =>
        prev === sliderData.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => {
      // Cada vez que se actualiza autoPlay, se limpia el intervalo anterior y se crea uno nuevo (si aplica).
      console.log("Limpiando interval...");
      clearInterval(interval);
    };
  }, [autoPlay]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "90vw",
        height: "65vh",
        display: "grid",
        justifySelf: "center",

        overflow: "hidden",
        mt: 2,
        // borderRadius: "1rem",
        // bgcolor: "red",
      }}
    >
      <Box
        sx={{
          width: `${sliderData.length * 100}%`,
          // height: "100%",
          display: "flex",
          transform: `translateX(-${
            (currentIndex * 100) / sliderData.length
          }%)`,
          transition: "transform 0.9s ease-out",
        }}
      >
        {sliderData.map((item) => (
          <Box
            key={item.title}
            sx={{
              width: `${100 / sliderData.length}%`,
              height: "100%",
              // bgcolor: "yellow",
              // flexShrink: 0,
            }}
          >
            <Card
              sx={{
                width: "100%",
                height: "100%",
                // aspectRatio: 16 / 9,
                display: "flex",
                bgcolor: "secondary.main",
                flexDirection: {
                  xs: "column",
                  md: "row",
                },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "space-evenly",
                  flexDirection: "column",
                }}
              >
                <CardContent
                  sx={{
                    width: "100%",
                    height: "auto",
                    minHeight: "50%",
                    p: [0, 2, 2],
                    // flex: "1 0 auto",
                    // bgcolor: "red",
                  }}
                >
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      color: "text.secondary",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    component="p"
                    sx={{
                      pr: 1,
                    }}
                  >
                    {item.desc}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="medium"
                    sx={{
                      bgcolor: "primary.main",
                      color: "text.secondary",
                      "&:hover": {
                        bgcolor: "secondary.main",
                      },
                    }}
                  >
                    Explore Food
                  </Button>
                </CardActions>
              </Box>
              <CardMedia
                component="img"
                image={item.imgUrl}
                alt={item.title}
                sx={{
                  width: {
                    md: "40%",
                  },
                  display: {
                    xs: "none",
                    md: "flex",
                  },
                  alignSelf: "center",
                  objectFit: "cover",
                }}
              />
            </Card>
          </Box>
        ))}
      </Box>

      <ChevronIcon
        action="prev"
        position={{ left: 16 }}
        setAutoPlay={setAutoPlay}
        setCurrentIndex={setCurrentIndex}
      />
      <ChevronIcon
        action="next"
        position={{ right: 16 }}
        setAutoPlay={setAutoPlay}
        setCurrentIndex={setCurrentIndex}
      />

      <NavigationDots
        currentIndex={currentIndex}
        goToSlide={goToSlide}
      />
    </Box>
  );
};
