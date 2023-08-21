import React, {useEffect} from "react";
import {
  Hero,
  ProductGrid,
} from "../../../components";
import { useDispatch } from "react-redux";
import { getCategories, getProduct } from "../store";
// import useAxios from "../../../configs/axios/useAxios";


const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories({}))
    dispatch(getProduct({}))
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
