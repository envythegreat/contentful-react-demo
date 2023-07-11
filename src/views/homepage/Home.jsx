import React from "react";
import { TopNavBar, MainNavBar, Hero, ProductGrid, Footer } from "../../components";

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
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
