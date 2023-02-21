// React Hooks
import { useEffect, useState } from "react";

// Styled Component(s)
import {
  ButtonElement,
  CardElement,
  QuoteElement,
  QuoteIdElement
} from "./style";

// GetAdvice
import { getInfo } from "../../hooks/getAdvice";

// SVGs
import assets from "../../config/Svgs";
// const divider_mobile = "./assets/pattern-divider-mobile.svg";
// const divider_desktop = "./assets/pattern-divider-desktop.svg";
// const dice = "./assets/icon-dice.svg";

const Card = () => {
  // Divider responsivity code
  const [windowDimensions, getDimensions] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });

  const setDimensions = () => {
    getDimensions({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setDimensions);

    return () => {
      window.removeEventListener("resize", setDimensions);
    };
  }, [windowDimensions]);

  // Random Advice code snippets
  const [advice, setAdvice] = useState({
    slip: {
      advice: "Press the button to get advice!",
      id: 0,
    },
  });

  const [loading, setLoading] = useState(false);

  const handleGetRandomAdvice = () => {
    setLoading(true);
    getInfo("advice", setAdvice);
    setLoading(false);
  };

  return (
    <CardElement>
      <QuoteIdElement>Advice #{advice.slip.id}</QuoteIdElement>
      <QuoteElement>{loading ? "Loading..." : advice.slip.advice}</QuoteElement>
      <img
        src={
          windowDimensions.dynamicWidth < 600
            ? assets["divider-mobile"]
            : assets["divider-desktop"]
        }
        alt="Divider"
      />
      <ButtonElement onClick={handleGetRandomAdvice}>
        <img src={assets.dice} alt="Dice icon" />
      </ButtonElement>
    </CardElement>
  );
};

export default Card;
