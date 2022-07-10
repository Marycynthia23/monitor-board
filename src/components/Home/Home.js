import React from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Status } from "../Status/Status";

export const Home = () => {
  return (
    <div>
      <Header />
      <Status />
      <Footer />
    </div>
  );
};
