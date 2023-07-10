import React from "react";
import { TopNavBar, MainNavBar, Hero } from "../../components";

const Home = () => {
  return (
    <>
      <header>
        <TopNavBar />
        <MainNavBar />
      </header>
      <main>
        <Hero />
      </main>
    </>
  );
};

export default Home;
