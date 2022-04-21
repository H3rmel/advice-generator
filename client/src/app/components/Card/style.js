// Styled Components
import styled from "styled-components";

export const CardElement = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.125rem;
  width: min(100% - 2rem, 50rem);
  border-radius: 0.5rem;
  padding: 2rem 2rem 3rem 2rem;
  background: ${props => props.theme.colors.dark_grayish_blue};
  box-shadow: ${props => props.theme.shadows.basic};
`;

export const QuoteIdElement = styled.span`
  font-size: 0.75rem;
  color: ${props => props.theme.colors.neon_green};
  text-transform: uppercase;
  letter-spacing: .25rem;
`;

export const QuoteElement = styled.p`
  font-size: ${props => props.theme.typography.quote};
  color: ${props => props.theme.colors.light_cyan};
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 37.5rem) {
    margin-top: .5rem;
    margin-bottom: 1rem;
  }
`;

export const ButtonElement = styled.button`
  position: absolute;
  top: 90%;
  border: 0;
  border-radius: 50%;
  padding: 1rem;
  background: ${props => props.theme.colors.neon_green};
  box-shadow: ${props => props.theme.shadows.basic};
  cursor: pointer;
  transition: .3s;

  &:hover {
    box-shadow: ${props => props.theme.shadows.neon};
  }
`;