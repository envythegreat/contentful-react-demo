import React, { useEffect, } from "react";
import CardProduct from "./CardProduct";
import { useSelector } from "react-redux";
import { homeSelector } from "../../views/app/store";

const ProductGrid = () => {

  const {products, loading} = useSelector(homeSelector)

  useEffect(() => {}, []);

  return (
    <div className="product-main">
      <h2 className="title" style={{ margin: "10px 80px" }}>
        Products
      </h2>
      <div className="product-grid">
        {products.map((item) => (
          <CardProduct key={item.abstractSku} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
