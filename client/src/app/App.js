// React Hook(s)
// import { useState } from "react";

// Styled components
import { ThemeProvider } from "styled-components";

// Theme
import theme from "./config/Theme";

// Components
import Container from "./components/Container/Index";
import Card from "./components/Card/Index";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Card />
      </Container>
    </ThemeProvider>
  );
};

export default App;
