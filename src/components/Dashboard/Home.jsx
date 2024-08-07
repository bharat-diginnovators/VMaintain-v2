import React from "react";
import Stats from "./Stats";
import Client from "./Client";
import Overview from "./Overview";

const Home = () => {
  return (
    <section className="border-2 border-green-500 w-full h-full p-5  ">
      <h1 className="font-medium p-1">Dashboard</h1>
      <Stats />
      <div className="flex md:flex-wrap lg:flex-nowrap  py-2 gap-2">
        <div className="xs:w-full lg:w-[60%]">
          <Client />
        </div>
        <div className="xs:w-full lg:w-[40%]">
         <Overview/>
        </div>
      </div>
    </section>
  );
};

export default Home;
