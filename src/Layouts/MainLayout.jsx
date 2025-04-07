import Navbar from "../Navbar";
import { Outlet, useLocation } from "react-router-dom";
import BoardNavbar from "../BoardNavbar";
import React from "react";

const MainLayout = () => {
    const location = useLocation()
    const bool = location.pathname.startsWith('/boards')
    
  return (
    <>
      <Navbar />
      {
        bool && <BoardNavbar/>
      }
      <Outlet />
    </>
  );
};

export default MainLayout;
