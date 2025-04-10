import { Container } from "@mui/material";
import { Header } from "../components/header/Header";
import { HeroSlider } from "../components/hero-slider/HeroSlider";
import { PopularMenu } from "../components/popular-menu/PopularMenu";

export const Home = () => {
  return (
    <>
      <Header />
      <HeroSlider />
      <PopularMenu />
    </>
  );
};
