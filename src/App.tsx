import React from "react";
import { useMediaQuery } from "react-responsive";
import AppForLandscape from "./AppForLandscape";
import AppForPortrait from "./AppForPortrait";

export default App;

function App() {
  const isLandscapeMode = useMediaQuery({
    query: "(orientation: landscape)",
  });
  return isLandscapeMode ? <AppForLandscape /> : <AppForPortrait />;
}
