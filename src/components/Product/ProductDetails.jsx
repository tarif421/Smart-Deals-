import React from "react";
import { useLoaderData } from "react-router";

const ProductDetails = () => {
  const product = useLoaderData();
  console.log(product);
  return (
    <div>
      <h2>I am details</h2>
    </div>
  );
};

export default ProductDetails;
