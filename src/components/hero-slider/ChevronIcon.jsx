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
  // Altura total de la ventana (incluye la parte no visible con scroll)
  const windowHeight = window.innerHeight;

  const iconHeight = windowHeight < 682 ? "40%" : "17rem";

  console.log(windowHeight);

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
        position: "absolute",
        ...position,
        top: { xs: "36%", md: iconHeight },
        // transform: "translateY(-50%)",
        // zIndex: 2,
        bgcolor: {
          xs: "rgba(255, 255, 255, 0.05)",
          sm: "rgba(255, 255, 255, 0.2)",
        },
        transition: "all 0.3s ease-in-out",

        "& .MuiSvgIcon-root": {
          color: "warning.main",
          filter:
            "drop-shadow(0 2px 2px rgba(0,0,0,0.3))",
          transition: "all 0.3s ease-in-out",
        },
        "&:hover": {
          bgcolor: "rgba(0, 0, 0, 0.2)",
          "& .MuiSvgIcon-root": {
            color: "accent.tertiary",
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
