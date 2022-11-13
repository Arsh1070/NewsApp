import React, { useState } from "react";
import Navbar from "./Navbar";
import General from "./General";
import Footer from "./Footer";

const DashBoard = () => {
  const [category, setCategory] = useState("general");
  const setCat = (item) => {
    setCategory(item);
  };

  return (
    <>
      <Navbar setCat={setCat} />
      <General myCategory={category} />
      <Footer />
    </>
  );
};
export default DashBoard;
