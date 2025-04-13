import { Box, Typography } from "@mui/material";
import { popularMenuFood } from "../../assets/fake-data/products";
import { ProductCards } from "../products-card/ProductCards";

export const PopularMenu = () => {

  const allProducts = [
    ...popularMenuFood.map((item) => ({
      ...item,
      category: "Popular Menu",
    })),
  ];

  // console.log(allProducts);

  return (
    <Box
      component="article"
      sx={{
        width: "82%",
        justifySelf: "center",
        mt: {
          xs: 10,
          md: 15,
        },
        mb: {
          xs: 10,
          md: 15,
        },
        // px: true ? 2 : 6,
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{
          mb: 4,
          textAlign: "center",
          fontWeight: "bold",
          fontSize: {
            xs: "1.6rem",
            sm: "2.1rem",
          },
        }}
      >
        Popular Food Menu
      </Typography>

      <ProductCards />
    </Box>
  );
};
