import React from "react";
import { Link } from "react-router";

const Product = ({ product }) => {
  const { _id, title, price_min, price_max, seller_image } = product;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="px-4 pt-4">
        <img
          src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body r">
        <h2 className="card-title">Card Title</h2>
        <p>
          Price: ${price_min} - {price_max}
        </p>
        <div className="card-actions ">
          <Link to={`productDetails/${_id}`} className="btn btn-primary w-full ">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
