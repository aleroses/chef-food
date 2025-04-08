import { IconButton } from "@mui/material";
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "@mui/icons-material";

import { sliderData } from "../../assets/fake-data/slider";

export const ChevronIcon = ({
  action,
  position,
  play,
  index,
}) => {
  const nextSlide = () => {
    index((prev) =>
      prev === sliderData.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    index((prev) =>
      prev === 0 ? sliderData.length - 1 : prev - 1
    );
  };

  return (
    <IconButton
      onClick={action === "prev" ? prevSlide : nextSlide}
      onMouseEnter={() => play(false)}
      onMouseLeave={() => play(true)}
      sx={{
        position: "absolute",
        ...position,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
        bgcolor: "primary.main",
        // bgcolor: "rgba(255, 255, 255, 0.7)",
        "&:hover": {
          bgcolor: "rgba(30, 29, 29, 0.7)",
        },
        // opacity: "0.5",
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
