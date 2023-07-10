import React from "react";
import { TopNavBar, MainNavBar, Hero, ProductGrid } from "../../components";

const Home = () => {
  return (
    <>
      <header>
        <TopNavBar />
        <MainNavBar />
      </header>
      <main>
        <Hero />
        <ProductGrid />
      </main>
    </>
  );
};

export default Home;
