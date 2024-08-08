import React from "react";
import Stats from "./Stats";
import Client from "./Client";
import Overview from "./Overview";
import LineChartComponent from "./LineChart";
import PieChartComponent from "./PieChart";

const Home = () => {
  return (
    <section className="w-full  p-5 overflow-y-auto">
      <h1 className="font-medium p-1">Dashboard</h1>
      <Stats />
      <div className="flex xs:flex-wrap lg:flex-nowrap  py-2 gap-2">
        <div className="xs:w-full lg:w-[60%]">
          <Client />
        </div>
        <div className="xs:w-full lg:w-[40%]">
         <Overview/>
        </div>
      </div>
      <div className="flex xs:flex-wrap lg:flex-nowrap  py-2 gap-2">
        <div className="xs:w-full lg:w-[60%]">
        <LineChartComponent/>
        </div>
        <div className="xs:w-full lg:w-[40%]">
         <PieChartComponent/>
        </div>
      </div>
    </section>
  );
};

export default Home;
