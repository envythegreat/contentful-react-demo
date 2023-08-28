import React, { useEffect, useState } from "react";
import { Hero, ProductGrid, Sidebar, Paginate } from "../../../components";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getProduct } from "../store";
import { useParams } from "react-router-dom";
import { homeSelector } from "../store";
// import useAxios from "../../../configs/axios/useAxios";


const Home = () => {
  const { lang, category, catid } = useParams();
  const dispatch = useDispatch();
  const { categories, products } = useSelector(homeSelector);
  useEffect(() => {
    if (!categories.data.length) {
      dispatch(getCategories({}));
    }
    dispatch(getProduct(catid && { category: catid }));
  }, [dispatch]);
  const { pagination } = products;
  const handlePageChange = ({ selected }) => {
    dispatch(getProduct({ category: catid && catid , page:selected+1 }));
  };

  return (
    <>
      <main>
        <Hero />
        <div className="product-container">
          <div className="container">
            <Sidebar />
            <div className="product-box">
              <ProductGrid />
              <Paginate totalPages={pagination.totalPages}  handlePageChange={handlePageChange}/>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
