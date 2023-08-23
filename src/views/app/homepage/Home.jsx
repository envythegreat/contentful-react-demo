import React, { useEffect } from "react";
import { Hero, ProductGrid, Sidebar } from "../../../components";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getProduct } from "../store";
import { useParams } from "react-router-dom";
import { homeSelector } from "../store";
// import useAxios from "../../../configs/axios/useAxios";

const Home = () => {
  const { lang, category, catid } = useParams();
  const dispatch = useDispatch();
  const { categories } = useSelector(homeSelector);
  useEffect(() => {
    if (!categories.data > 0) {
      dispatch(getCategories({}));
    }
    dispatch(getProduct(catid && { category: catid }));
  }, [dispatch]);

  return (
    <>
      <main>
        <Hero />
        <div className="product-container">
          <div className="container">
            <Sidebar />
            <div className="product-box">
              <ProductGrid />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
