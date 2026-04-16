import React from "react";
import Banner from "../../Compnents/Banner/Banner";
import CountCard from "../../Compnents/Count-Card/CountCard";
import Friends from "../../Compnents/Friends/Friends";

const HomePage = () => {
  return (
    <div className="container mx-auto flex flex-col items-center ">
      <Banner />
      <CountCard />
      <div className="divider"></div>
      <Friends />
    </div>
  );
};

export default HomePage;
