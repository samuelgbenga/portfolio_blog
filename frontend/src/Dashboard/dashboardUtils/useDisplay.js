import { useState } from "react";

export default function useDisplay() {
  const getDisplay = () => {
    const displayString = localStorage.getItem("dashboardcDisplay");
    const displayJson = JSON.parse(displayString);

    return displayJson;
  };

  const [display, setDisplay] = useState(getDisplay());

  const saveDisplay = (displayObject) => {
    localStorage.setItem("dashboardcDisplay", JSON.stringify(displayObject));
    setDisplay(displayObject);
  };

  return {
    setDisplay: saveDisplay,
    display,
  };
}
