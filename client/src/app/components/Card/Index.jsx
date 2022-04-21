// React Hooks
import { useState, useEffect } from "react";

// Styled Component(s)
import { CardElement, QuoteIdElement, QuoteElement, ButtonElement } from "./style";

// SVGs
const divider_mobile = "./assets/pattern-divider-mobile.svg";
const divider_desktop = "./assets/pattern-divider-desktop.svg";
const dice = "./assets/icon-dice.svg";

const Card = ({
  adviceId = "0",
  advice = "Press the button to get an advice!",
}) => {
  const [windowDimensions, getDimensions] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight
  });

  const setDimensions = () => {
    getDimensions({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', setDimensions);

    return(() => {
      window.removeEventListener('resize', setDimensions);
    })
  }, [windowDimensions])

  return (
    <CardElement>
      <QuoteIdElement>Advice #{adviceId}</QuoteIdElement>
      <QuoteElement>{advice}</QuoteElement>
      <img src={(windowDimensions.dynamicWidth < 600 ? divider_mobile : divider_desktop)} alt="Divider" />
      <ButtonElement>
        <img src={dice} alt="Dice icon" />
      </ButtonElement>
    </CardElement>
  );
};

export default Card;
