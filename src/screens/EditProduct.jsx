import React from "react";
import { useOutletContext } from "react-router-dom";

const EditProduct = () => {
  const { aaa, eee } = useOutletContext();
  return (
    <div>
      <h1>Edit Product : {aaa} </h1>
    </div>
  );
};

export default EditProduct;
