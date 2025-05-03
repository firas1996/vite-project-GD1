import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../screens/Home";
import About from "../screens/About";
import Products from "../screens/Products";
import NotFound from "../screens/NotFound";
import ProductDetails from "../screens/ProductDetails";
import AddProduct from "../screens/addProduct";
import EditProduct from "../screens/EditProduct";
import ProductsLayout from "../components/ProductsLayout";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<ProductsLayout />}>
        <Route index element={<Products />} />
        <Route path=":id" element={<ProductDetails />} />
        <Route path="add" element={<AddProduct />} />
        <Route path="edit" element={<EditProduct />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRoutes;
