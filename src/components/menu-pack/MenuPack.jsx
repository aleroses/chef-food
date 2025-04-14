import { useState } from "react";
import {
  Box,
  Chip,
  Stack,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Rating,
} from "@mui/material";
import {
  fastFoodProducts,
  riceMenuProducts,
  dessertProducts,
  pizzaProducts,
  coffeeProducts,
} from "../../assets/fake-data/products.js";
import { ShoppingCart as ShoppingCartIcon } from "@mui/icons-material";

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
          justifyContent: "center",
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
                    : "primary.contrast",
                bgcolor:
                  selectedCategoryId === category.id
                    ? "accent.tertiary"
                    : "primary.main",
              },
              border:
                selectedCategoryId === category.id
                  ? "none"
                  : "1px solid #c4c4c4",
              cursor: "pointer",

              fontSize: {
                xs: "0.8em",
                sm: "1em",
              },
              p: {
                xs: "0.8em",
                sm: "1em",
              },
            }}
          />
        ))}
      </Stack>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid
            key={product.id}
            size={{
              xs: 6,
              sm: 4,
              md: 3,
            }}
          >
            <Card
              sx={{
                // width: "100%",
                // height: "100%",
                // display: "flex",
                // flexDirection: "column",
                borderRadius: 3,
                boxShadow: 3,
                bgcolor: "transparent.white.light",
              }}
            >
              <CardMedia
                component="img"
                image={product.imgUrl}
                alt={product.title}
                sx={{
                  width: "100%",
                  // objectFit: "cover",
                }}
              />

              <CardContent
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  // flexGrow: 1,
                  // justifyContent: "center",
                  alignItems: "center",
                  p: 1.5,
                  // m: 0,
                  gap: 1,
                }}
              >
                <Rating
                  value={5}
                  sx={{
                    fontSize: {
                      xs: "1.2em",
                      sm: "1.5em",
                    },
                  }}
                />
                <Typography
                  component="h5"
                  sx={{
                    color: "accent.main",
                    fontSize: {
                      xs: "0.8em",
                      sm: "1em",
                    },
                    fontWeight: "bold",
                  }}
                >
                  {product.title}
                </Typography>

                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    component="span"
                    sx={{
                      fontSize: {
                        xs: "0.8em",
                        sm: "1em",
                      },
                    }}
                  >
                    Price:
                    <Typography
                      variant="body1"
                      component="span"
                      sx={{
                        fontSize: {
                          xs: "0.8rem",
                          sm: "1rem",
                        },
                        color: "accent.main",
                      }}
                    >
                      {` $${product.price}`}
                    </Typography>
                  </Typography>
                  <ShoppingCartIcon />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
