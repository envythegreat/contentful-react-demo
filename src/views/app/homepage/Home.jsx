import React, {useEffect} from "react";
import {
  Hero,
  ProductGrid,
} from "../../../components";
import { useSelector, useDispatch } from "react-redux";
import { appSelector, getCategories } from "../store";
// import useAxios from "../../../configs/axios/useAxios";


const Home = () => {
  const dispatch = useDispatch();
  // const instance = useAxios({
  //   baseUrl: "http://glue.uksouth.cloudapp.azure.com",
  //   isTokenUsed: false,
  //   tokenName: null,
  // });
  // const {categories, error} = useSelector(appSelector);
  

  useEffect(() => {
    dispatch(getCategories({}))
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
