import React from "react";
import ReactDOM from "react-dom/client";
import Guess from "./components/Guess.tsx";
// import Login from "./components/Login.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/*<Login />*/}
    <Guess />
  </React.StrictMode>,
);
