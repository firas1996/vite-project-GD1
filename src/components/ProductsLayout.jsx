import React from "react";
import { Link, Outlet } from "react-router-dom";

const ProductsLayout = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/products/add">Add Product</Link>
        </li>
        <li>
          <Link to="/products/edit">Edit Product</Link>
        </li>
        <li>
          <Link to="/products/1">Product 1</Link>
        </li>
        <li>
          <Link to="/products/3">Product 3</Link>
        </li>
      </ul>
      <Outlet context={{ aaa: "zzz", eee: "rrr" }} />
    </>
  );
};

export default ProductsLayout;
