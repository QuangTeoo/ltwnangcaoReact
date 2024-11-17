import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Mainlayout() {
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
