import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "@mui/icons-material";

import { sliderData } from "../../assets/fake-data/slider";

export const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === sliderData.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === sliderData.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? sliderData.length - 1 : prev - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "80%",
        // height: "100%",
        display: "grid",
        justifySelf: "center",

        gap: 2,
        mt: 2,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          transition: "transform 0.9s ease-out",
          transform: `translateX(-${
            currentIndex * 100
          }%)`,
          // width: `${sliderData.length * 100}%`,
        }}
      >
        {sliderData.map((item) => (
          <Box
            key={item.id}
            sx={{
              width: "100%",
              flexShrink: 0,
              px: 1,
            }}
          >
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                bgcolor: "primary.main",
                height: { xs: "auto", md: 400 },
                flexDirection: {
                  xs: "column",
                  md: "row",
                },
                // gap: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: { xs: "100%", md: "60%" },
                }}
              >
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "text.secondary",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography component="p">
                    {item.desc}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    sx={{
                      bgcolor: "secondary.main",
                      color: "text.secondary",
                      "&:hover": {
                        bgcolor: "secondary.dark",
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
                    xs: "70%",
                    sm: "60%",
                    md: "40%",
                    lg: "40%",
                  },
                  // width: { xs: "100%", md: "40%" },
                  height: { xs: 200, md: "100%" },
                  objectFit: "cover",
                }}
              />
            </Card>
          </Box>
        ))}
      </Box>

      <IconButton
        onClick={prevSlide}
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
        sx={{
          position: "absolute",
          left: 16,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
          bgcolor: "rgba(255, 255, 255, 0.7)",
          "&:hover": {
            bgcolor: "rgba(255, 255, 255, 0.9)",
          },
        }}
      >
        <ChevronLeftIcon fontSize="large" />
      </IconButton>

      <IconButton
        onClick={nextSlide}
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
        sx={{
          position: "absolute",
          right: 16,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
          bgcolor: "rgba(255, 255, 255, 0.7)",
          "&:hover": {
            bgcolor: "rgba(255, 255, 255, 0.9)",
          },
        }}
      >
        <ChevronRightIcon fontSize="large" />
      </IconButton>

      <Box
        sx={{
          position: "absolute",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 1,
        }}
      >
        {sliderData.map((_, index) => (
          <Box
            key={index}
            onClick={() => goToSlide(index)}
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              bgcolor:
                currentIndex === index
                  ? // ? theme.palette.primary.main
                    "primary.main"
                  : "grey.400",
              cursor: "pointer",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};
