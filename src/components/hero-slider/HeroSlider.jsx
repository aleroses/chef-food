import { useEffect, useRef, useState } from "react";
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
  const [transitionEnabled, setTransitionEnabled] =
    useState(true);

  const sliderRef = useRef(null);

  const slides = [
    sliderData[sliderData.length - 1],
    ...sliderData,
    sliderData[0],
  ];

  const totalSlides = slides.length;
  const actualSlides = sliderData.length;

  useEffect(() => {
    if (!autoPlay) return;

    console.log("ejecutando...");

    const interval = setInterval(() => {
      console.log("Interval activo");
      setCurrentIndex((prev) => {
        const newIndex = prev + 1;

        if (newIndex === totalSlides - 1) {
          setTimeout(() => {
            setTransitionEnabled(false);
            setCurrentIndex(1);
          }, 900);

          return newIndex;
        }
        // prev === sliderData.length - 1 ? 0 : prev + 1;
        return newIndex;
      });
    }, 3000);

    return () => {
      // Cada vez que se actualiza autoPlay, se limpia el intervalo anterior y se crea uno nuevo (si aplica).
      console.log("Limpiando interval...");
      clearInterval(interval);
    };
  }, [autoPlay, totalSlides]);

  useEffect(() => {
    // Reactivamos la transición después del "salto"
    if (!transitionEnabled) {
      setTimeout(() => {
        setTransitionEnabled(true);
      }, 50);
    }
  }, [transitionEnabled]);

  const goToSlide = (index) => {
    setCurrentIndex(index + 1);
  };

  // Calculamos el índice real para los dots de navegación
  const realIndex =
    currentIndex === 0
      ? actualSlides - 1
      : currentIndex === totalSlides - 1
      ? 0
      : currentIndex - 1;

  return (
    <>
      <Box
        component="section"
        sx={{
          position: "relative",
          width: "82%",
          // height: "60vh",

          height: {
            xs: "60vh",
            md: "65vh",
          },
          // display: "grid",
          justifySelf: "center",

          overflow: "hidden",

          mt: 2,
          ml: {
            md: 4,
          },
          // borderRadius: "1rem",
          // bgcolor: "red",
          p: 0,
          // zIndex: 1,
        }}
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
      >
        <Box
          ref={sliderRef}
          sx={{
            width: `${totalSlides * 100}%`,
            height: "100%",
            display: "flex",
            transform: `translateX(-${
              (currentIndex * 100) / totalSlides
            }%)`,
            transition: transitionEnabled
              ? "transform 0.9s ease-out"
              : "none",

            // bgcolor: "blue",
          }}
        >
          {slides.map((item, index) => (
            <Box
              // component="section"
              key={`${item.id}-${index}`}
              sx={{
                width: `${100 / totalSlides}%`,
                height: "100%",

                display: "flex",
                alignItems: "center",
                // bgcolor: "yellow",
                // flexShrink: 0,
              }}
            >
              <Card
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: {
                    xs: "column",
                    md: "row",
                  },
                  bgcolor: "secondary.main",
                  // aspectRatio: 16 / 9,
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    p: { xs: 1, sm: 2 }, // Padding responsive
                    gap: 2,
                  }}
                >
                  <CardContent
                    sx={{
                      width: "100%",
                      height: "auto",
                      // textWrap: "balance",
                      // p: [0, 2, 2],
                      p: 0,
                      gap: 2,
                      // flex: "1 0 auto",
                      // bgcolor: "red",
                    }}
                  >
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{
                        color: "accent.light",
                        fontSize: {
                          xs: "1.2em",
                          sm: "1.5em",
                        },
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      component="p"
                      sx={{
                        fontSize: {
                          xs: "0.8em",
                          sm: "1em",
                        },
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      pl: 0,
                    }}
                  >
                    <Button
                      size="small"
                      sx={{
                        color: "primary.main",
                        bgcolor: "accent.main",
                        fontWeight: "600",
                        "&:hover": {
                          color: "primary.contrast",
                          bgcolor: "primary.main",
                        },
                        fontSize: {
                          xs: "0.7rem",
                          sm: "0.875rem",
                        },
                        p: 1,
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
                      md: "50%",
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

        <NavigationDots
          // currentIndex={currentIndex}
          currentIndex={realIndex}
          goToSlide={goToSlide}
        />
      </Box>
      <ChevronIcon
        action="prev"
        position={{ left: { xs: 15, sm: 20, md: 70 } }}
        setAutoPlay={setAutoPlay}
        setCurrentIndex={setCurrentIndex}
        currentIndex={currentIndex}
        setTransitionEnabled={setTransitionEnabled}
        totalSlides={totalSlides}
        actualSlides={actualSlides}
        // onClick={handlePrev}
      />
      <ChevronIcon
        action="next"
        position={{
          right: { xs: 15, sm: 20, md: 70 },
        }}
        setAutoPlay={setAutoPlay}
        setCurrentIndex={setCurrentIndex}
        currentIndex={currentIndex}
        setTransitionEnabled={setTransitionEnabled}
        totalSlides={totalSlides}
        actualSlides={actualSlides}
        // onClick={handleNext}
      />
    </>
  );
};
