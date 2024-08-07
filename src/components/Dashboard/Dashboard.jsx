import React from "react";
import Header from "../../common/Header";
import Sidebar from "../../common/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <section className="min-h-screen min-w-screen">
      <div>
        <Header />
      </div>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 bg-white">
          <Outlet />
        </main>
      </div>
    </section>
  );
};

export default Dashboard;
