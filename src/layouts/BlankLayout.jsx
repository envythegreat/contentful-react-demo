// ** React Imports
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { Footer, TopNavBar, MainNavBar, MenuNavigation } from "../components";

const BlankLayout = () => {
  // ** States
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <header>
        <TopNavBar />
        <MainNavBar />
        <MenuNavigation />
      </header>
      <Outlet />
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default BlankLayout;
