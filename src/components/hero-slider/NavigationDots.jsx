import { Box, IconButton } from "@mui/material";
import { sliderData } from "../../assets/fake-data/slider";

export const NavigationDots = ({
  currentIndex,
  goToSlide,
}) => {
  return (
    <Box
      component="nav"
      aria-label="Slider navigation"
      sx={{
        position: "absolute",
        bottom: { xs: 2, md: 4 },
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: 1.5,
        zIndex: 1,
      }}
    >
      {sliderData.map((item, index) => (
        <IconButton
          key={item.id}
          aria-label={`Ir al slide ${index + 1}`}
          onClick={() => goToSlide(index)}
          sx={{
            p: 0.8,
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "scale(1.2)",
              bgcolor: "action.hover",
            },
            "&:focus-visible": {
              outline: "2px solid",
              outlineColor: "primary.main",
            },
          }}
        >
          <Box
            component="span"
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              bgcolor:
                currentIndex === index
                  ? "primary.main"
                  : "grey.400",

              transition: "background-color 0.3s ease",
              transform:
                currentIndex === index
                  ? "scale(1.2)"
                  : "scale(1)",
              cursor: "pointer",
            }}
          />
        </IconButton>
      ))}
    </Box>
  );
};
