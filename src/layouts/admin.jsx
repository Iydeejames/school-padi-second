import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/molecule/Navbar";
import Footer from "../components/molecule/Footer";

const Layout = ({ children }) => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/";

  return (
    <div>
      {/* Render Navbar on all pages */}
      {!hideHeaderFooter && <Navbar />}
      <div style={{ minHeight: "calc(100vh - 100px)" }}>{children}</div>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

export default Layout;
