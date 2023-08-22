import React, {useEffect} from "react";
import {
  Hero,
  ProductGrid,
} from "../../../components";
import { useDispatch } from "react-redux";
import { getCategories, getProduct } from "../store";
import { useParams } from "react-router-dom";
// import useAxios from "../../../configs/axios/useAxios";


const Home = () => {
  const { lang, category, catid } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories({}))
    dispatch(getProduct(catid &&{category:catid}))
  }, [dispatch])


  return (
    <>
      <main>
        <Hero />
        <ProductGrid />
      </main>
    </>
  );
};

export default Home;
