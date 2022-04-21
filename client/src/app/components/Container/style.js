// Styled Components
import styled from "styled-components";

export const ContainerElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.colors.dark_blue};
`;