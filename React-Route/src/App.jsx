import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Contact from "./components/Contact";
import About from "./components/About";
import Nav from "./components/Nav";
import UnknownRoute from "./components/UnknownRoute";
import ProductDetails from "./components/ProductDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Nav/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<UnknownRoute/>}/>
        <Route path="products/:id" element={<ProductDetails />} />

      </Routes>
    </>
  );
}

export default App;
