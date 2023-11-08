import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import HeroText from "./component/HeroText";

function App() {
  return (
    <>
      <Navbar />
      <HeroText />
    </>
  );
}

export default App;
