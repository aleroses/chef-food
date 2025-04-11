import { Container } from "@mui/material";
import { popularMenuFood } from "../../assets/fake-data/products";

export const PopularMenu = () => {
  // console.log(...popularMenuFood);

  const allProducts = [
    ...popularMenuFood.map((item) => ({
      ...item,
      category: "Popular Menu",
    })),
  ];

  console.log(allProducts);

  // return <Container>PopularMenu</Container>;
};
