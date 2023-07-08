// ** React Imports
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

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
      <Outlet />
    </>
  );
};

export default BlankLayout;
