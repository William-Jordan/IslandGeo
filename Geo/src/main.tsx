import React from "react";
import ReactDOM from "react-dom/client";
// import GMap from "./components/GMap.tsx";
// import UMap from "./components/UMap.tsx";
// import ImgLoad from "./components/ImgLoad.tsx";
// import PinPicker from "./components/PinPicker.tsx";
// import TEST from "./components/TEST.tsx";
// import Guess from "./components/Guess.tsx";
import Upload from "./components/Upload.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <GMap /> */}
    {/* <UMap />   */}
    {/* <PinPicker /> */}
    {/* {<ImgLoad />} */}
    {/* <TEST /> */}
    {/* <Guess /> */}
    <Upload></Upload>
  </React.StrictMode>
);

// split screen depending on aspaect ratio

//load all photos at begining
