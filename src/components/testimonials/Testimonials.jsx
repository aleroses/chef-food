import {
  Box,
  Card,
  Typography,
  CardMedia,
  CardContent,
  Grid,
} from "@mui/material";
import { testimonials } from "../../assets/fake-data/testimonials";
import testimonialImg from "../../assets/images/review1.png";
import { useHeroSlider } from "../../hooks/useHeroSlider";
import { ChevronIcon } from "../hero-slider/ChevronIcon";

export const Testimonials = () => {
  const {
    currentIndex,
    setCurrentIndex,
    autoPlay,
    setAutoPlay,
    transitionEnabled,
    setTransitionEnabled,
    sliderRef,
    slides,
    totalSlides,
    actualSlides,
    goToSlide,
    realIndex,
  } = useHeroSlider(testimonials);

  return (
    <Box
      component="section"
      position="relative"
      sx={{
        width: "82%",
        // maxHeight: {
        //   // xs: "560px",
        //   sm: "320px",
        // },
        display: "flex",
        justifySelf: "center",
        alignItems: "center",
        flexDirection: {
          xs: "column",
          sm: "row",
        },
        p: 0,
        pl: { lg: 4 },
        mb: 4,
        gap: {
          sm: 2,
        },
      }}
    >
      <Box
        sx={{
          width: {
            xs: "100%",
            sm: "65%",
            lg: "70%",
          },
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          // gutterBottom
          sx={{
            textAlign: "center",
            fontSize: {
              xs: "1.6em",
              md: "2.1em",
            },
            fontWeight: 700,
            // p: 3,
            color: "accent.main",
          }}
        >
          What our customers are saying
        </Typography>

        {/* Start of the slider. */}
        <Box
          component="section"
          sx={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
            // width: `${3 * 100}%`,
            p: 0,
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
            }}
          >
            {slides.map((testimony, index) => (
              <Box
                // component="section"
                key={`${testimony.id}-${index}`}
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
                  <CardContent>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: {
                          xs: "0.8em",
                          md: "1em",
                        },
                        mb: 0.5,
                      }}
                    >
                      {testimony.desc}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      // gutterBottom
                      sx={{
                        color: "accent.main",
                      }}
                    >
                      {testimony.name}
                    </Typography>
                    <Typography
                      component="span"
                      variant="subtitle2"
                      gutterBottom
                      sx={{
                        color: "warning.main",
                      }}
                    >
                      {testimony.career}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>

        <ChevronIcon
          action="prev"
          position={{
            left: { xs: -10, sm: -20 },
            top: {
              xs: "40%",
              // md: iconHeight
            },
            // bottom: "20%",
          }}
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
            right: {
              xs: -10,
              sm: "32%",
              // md: "33%",
            },
            top: {
              xs: "40%",
              // md: iconHeight
            },
            // bottom: "20%",
          }}
          setAutoPlay={setAutoPlay}
          setCurrentIndex={setCurrentIndex}
          currentIndex={currentIndex}
          setTransitionEnabled={setTransitionEnabled}
          totalSlides={totalSlides}
          actualSlides={actualSlides}
          // onClick={handleNext}
        />
      </Box>

      <Card
        elevation={0}
        sx={{
          display: { xs: "none", sm: "flex" },
          width: "35%",
          // width: {
          //   // xs: "100%",
          //   sm: "35%",
          // },
          justifyContent: "center",
          bgcolor: "secondary.main",
        }}
      >
        <CardMedia
          component="img"
          alt=""
          image={testimonialImg}
          sx={{
            // boxShadow: 0,
            // justifySelf: "center",
            // width: {
            //   xs: "100%",
            //   md: "60%",
            // },
            maxWidth: {
              // sm: "260px",
              lg: "285px",
            },
            // objectFit: "cover",
            // width: "80%",
            // bgcolor: "transparent",
            borderRadius: "25%",
            opacity: 0.8,
          }}
        />
      </Card>
    </Box>
  );
};
