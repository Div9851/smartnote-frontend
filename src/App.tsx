import React from "react";
import { useMediaQuery } from "react-responsive";
import AppForPC from "./AppForPC";
import AppForSmartphone from "./AppForSmartphone";

export default App;

function App() {
  const isSmartphone = useMediaQuery({
    query: "(max-device-width: 480px)",
  });
  return isSmartphone ? <AppForSmartphone /> : <AppForPC />;
}
