import React from "react";
import Header from "../../common/Header";
import Sidebar from "../../common/Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "../../common/Footer";

const Dashboard = () => {
  return (
    <section className="min-w-screen">
      <div className="sticky top-0 z-[8888]">
        <Header />
      </div>
      <div className="flex">
        <div className="">
        <Sidebar />
        </div>
        <main className="flex-1 bg-white overflow-y-scroll overflow-x-hidden max-h-[80%]">
          <Outlet />
          <Footer/>
        </main>
      </div>
    </section>
  );
};

export default Dashboard;
