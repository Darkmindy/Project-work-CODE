import React from "react";
import CardList from "../../Components/Card/CardList";

const ProductPage = () => {
  return (
    <div className="product-page">
      <h2 className="section-title" style={{ marginTop: "20px" }}>
        Our Products
      </h2>
      <CardList />
    </div>
  );
};

export default ProductPage;
