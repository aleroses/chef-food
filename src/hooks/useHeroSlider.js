// hooks/useHeroSlider.js
import { useEffect, useRef, useState } from "react";
// import { sliderData } from "../../assets/fake-data/slider";

export const useHeroSlider = (sliderData) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [transitionEnabled, setTransitionEnabled] =
    useState(true);

  const sliderRef = useRef(null);

  const slides = [
    sliderData[sliderData.length - 1],
    ...sliderData,
    sliderData[0],
  ];

  const totalSlides = slides.length;
  const actualSlides = sliderData.length;

  useEffect(() => {
    if (!autoPlay) return;

    console.log("ejecutando...");

    const interval = setInterval(() => {
      console.log("Interval activo");

      setCurrentIndex((prev) => {
        const newIndex = prev + 1;

        if (newIndex === totalSlides - 1) {
          setTimeout(() => {
            setTransitionEnabled(false);
            setCurrentIndex(1);
          }, 900);

          return newIndex;
        }

        return newIndex;
      });
    }, 3000);

    return () => {
      // Cada vez que se actualiza autoPlay, se limpia el intervalo anterior y se crea uno nuevo (si aplica).

      console.log("Limpiando interval...");
      clearInterval(interval);
    };
  }, [autoPlay, totalSlides]);

  useEffect(() => {
    // Reactivamos la transición después del "salto"
    if (!transitionEnabled) {
      setTimeout(() => {
        setTransitionEnabled(true);
      }, 50);
    }
  }, [transitionEnabled]);

  const goToSlide = (index) => {
    setCurrentIndex(index + 1);
  };

  // Calculamos el índice real para los dots de navegación
  const realIndex =
    currentIndex === 0
      ? actualSlides - 1
      : currentIndex === totalSlides - 1
      ? 0
      : currentIndex - 1;

  return {
    currentIndex,
    setCurrentIndex,
    autoPlay,
    setAutoPlay,
    transitionEnabled,
    setTransitionEnabled,
    sliderRef,
    slides,
    totalSlides,
    actualSlides,
    goToSlide,
    realIndex,
  };
};
