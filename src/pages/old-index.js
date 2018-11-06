import React from "react";

/* Emotion Theming */
import { ThemeProvider } from "emotion-theming";

/* Product Dashboard */
import Page from "./_page";
import theme from "../utils/theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <Page />
  </ThemeProvider>
);

export default App;
