import { useState } from "react";
import {
  Box,
  Chip,
  Stack,
  Typography,
  Grid,
} from "@mui/material";
import {
  fastFoodProducts,
  riceMenuProducts,
  dessertProducts,
  pizzaProducts,
  coffeeProducts,
} from "../../assets/fake-data/products.js";
import { ProductCard } from "../products-card/ProductCard.jsx";

const categoryData = [
  {
    id: "01",
    name: "Fast Food",
    productData: fastFoodProducts,
  },
  {
    id: "02",
    name: "Rice Menu",
    productData: riceMenuProducts,
  },
  {
    id: "03",
    name: "Pizza",
    productData: pizzaProducts,
  },
  {
    id: "04",
    name: "Desserts",
    productData: dessertProducts,
  },
  {
    id: "05",
    name: "Coffee",
    productData: coffeeProducts,
  },
];

export const MenuPack = () => {
  const [selectedCategoryId, setSelectedCategoryId] =
    useState("01");

  const currentCategory = categoryData.find(
    (item) => item.id === selectedCategoryId
  );

  const products = currentCategory?.productData || [];

  const handleCategoryChange = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  return (
    <Box
      component="section"
      sx={{
        width: "82%",
        justifySelf: "center",
        p: 0,
        mb: 6,
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{
          justifySelf: "center",
          fontSize: {
            xs: "1.6em",
            sm: "2.1em",
          },
          fontWeight: 700,
          p: 3,
        }}
      >
        Our Menu Pack
      </Typography>

      <Stack
        direction="row"
        sx={{
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          mb: 4,
          gap: 2,
        }}
      >
        {categoryData.map((category) => (
          <Chip
            key={category.id}
            label={category.name}
            aria-label={category.name}
            onClick={() =>
              handleCategoryChange(category.id)
            }
            sx={{
              fontWeight: "700",
              color:
                selectedCategoryId === category.id
                  ? "primary.main"
                  : "primary.contrast",
              bgcolor:
                selectedCategoryId === category.id
                  ? "accent.tertiary"
                  : "primary.main",
              "&:hover": {
                color:
                  selectedCategoryId === category.id
                    ? "primary.main"
                    : "primary.main",
                bgcolor:
                  selectedCategoryId === category.id
                    ? "accent.tertiary"
                    : "accent.tertiary",
              },
              border:
                selectedCategoryId === category.id
                  ? "1px solid #ffe92e"
                  : "1px solid #c4c4c4",
              cursor: "pointer",

              fontSize: {
                xs: "0.8em",
                sm: "1em",
              },
              p: {
                xs: "0.8rem",
                sm: "1rem",
                md: "1.1rem",
              },
            }}
          />
        ))}
      </Stack>
      <Grid container spacing={2}>
        {products.map((product) => (
          <ProductCard
            key={`${currentCategory.id}-${product.id}`}
            product={product}
          />
        ))}
      </Grid>
    </Box>
  );
};
