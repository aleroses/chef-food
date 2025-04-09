import { IconButton } from "@mui/material";
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "@mui/icons-material";

import { sliderData } from "../../assets/fake-data/slider";

export const ChevronIcon = ({
  action,
  position,
  setAutoPlay,
  setCurrentIndex,
}) => {
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
        top: "50%",
        // transform: "translateY(-50%)",
        zIndex: 1,
        bgcolor: "rgba(255, 255, 255, 0.2)",
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
          transform: "translateY(-50%) scale(0.95)",
        },
      }}
    >
      {action === "prev" ? (
        <ChevronLeftIcon fontSize="large" />
      ) : (
        <ChevronRightIcon fontSize="large" />
      )}
    </IconButton>
  );
};
