import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import ItemListContainer from "../pages/itemListContainer/ItemListContainer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
      <Footer />
    </div>
  );
};

export default Layout;
