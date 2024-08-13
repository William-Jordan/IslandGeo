import React from "react";
import ReactDOM from "react-dom/client";
// import GMap from "./components/GMap.tsx";
import UMap from "./components/UMap.tsx";
// import PinPicker from "./components/PinPicker.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <GMap /> */}
    <UMap />
    {/* <PinPicker /> */}
  </React.StrictMode>
);

// split screen depending on aspaect ratio

//load all photos at begining
