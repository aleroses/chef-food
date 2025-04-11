import { IconButton } from "@mui/material";
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "@mui/icons-material";

export const ChevronIcon = ({
  action,
  position,
  setAutoPlay,
  setCurrentIndex,
  currentIndex,
  setTransitionEnabled,
  totalSlides,
  actualSlides,
}) => {
  const nextSlide = () => {
    if (currentIndex === totalSlides - 2) {
      setTransitionEnabled(false);
      setCurrentIndex(totalSlides - 1);

      setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(1);
      }, 50);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex === 1) {
      setTransitionEnabled(false);
      setCurrentIndex(0);
      setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(actualSlides);
      }, 50);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <IconButton
      onClick={action === "prev" ? prevSlide : nextSlide}
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
      onTouchStart={() => setAutoPlay(false)}
      onTouchEnd={() => setAutoPlay(true)}
      onFocus={() => setAutoPlay(false)}
      onBlur={() => setAutoPlay(true)}
      sx={{
        position: "fixed",
        ...position,
        top: "45%",
        // transform: "translateY(-50%)",
        zIndex: 1,
        bgcolor: {
          xs: "rgba(255, 255, 255, 0.025)",
          sm: "rgba(255, 255, 255, 0.2)",
        },
        transition: "all 0.3s ease-in-out",

        "& .MuiSvgIcon-root": {
          color: "common.black",
          filter:
            "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
          transition: "all 0.3s ease-in-out",
        },
        "&:hover": {
          bgcolor: "rgba(0, 0, 0, 0.1)",
          "& .MuiSvgIcon-root": {
            color: "grey.800",
            transform: "scale(1.1)",
          },
        },

        "&:focus-visible": {
          outline: "2px solid",
          outlineColor: "rgba(0, 0, 0, 0.3)",
          bgcolor: "rgba(0, 0, 0, 0.15)",
        },
        // Efecto activo (al hacer clic)
        "&:active": {
          bgcolor: {
            xs: "rgba(0, 0, 0, 1)",
          },
          transform: "translateY(-50%) scale(0.95)",
        },
      }}
    >
      {action === "prev" ? (
        <ChevronLeftIcon
          sx={{
            fontSize: {
              xs: "1.5rem",
              sm: "2.0rem",
              md: "2.5rem",
            },
          }}
        />
      ) : (
        <ChevronRightIcon
          sx={{
            fontSize: {
              xs: "1.5rem",
              sm: "2.0rem",
              md: "2.5rem",
            },
          }}
        />
      )}
    </IconButton>
  );
};
