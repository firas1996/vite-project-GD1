import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../screens/Home";
import About from "../screens/About";
import Products from "../screens/Products";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
};

export default MainRoutes;
