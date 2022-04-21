// React Hooks
import { useState, useEffect } from "react";

// Styled Component(s)
import {
  CardElement,
  QuoteIdElement,
  QuoteElement,
  ButtonElement,
} from "./style";

// Component(s)
import Loader from "../Loader/Index";

// GetAdvice
import { getInfo } from "../../hooks/getAdvice";

// SVGs
const divider_mobile = "./assets/pattern-divider-mobile.svg";
const divider_desktop = "./assets/pattern-divider-desktop.svg";
const dice = "./assets/icon-dice.svg";

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
    getInfo("advice", setAdvice, setLoading);
  };

  return (
    <CardElement>
      <QuoteIdElement>Advice #{advice.slip.id}</QuoteIdElement>
      <QuoteElement>
        {loading ? advice.slip.advice : <Loader />}
      </QuoteElement>
      <img
        src={
          windowDimensions.dynamicWidth < 600 ? divider_mobile : divider_desktop
        }
        alt="Divider"
      />
      <ButtonElement onClick={handleGetRandomAdvice}>
        <img src={dice} alt="Dice icon" />
      </ButtonElement>
    </CardElement>
  );
};

export default Card;
