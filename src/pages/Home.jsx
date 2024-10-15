import React from "react";
import Feed from "../components/Feed";
import Trajectory from "../components/Trajectory";

const Home = () => {
  return (
    <div className="home page">
      <div className="container">
        <div className="aboutMe">
          <p className="title">Quien Soy?</p>
          <p className="contain">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
            asperiores doloremque aliquid blanditiis in sit. Soluta,
            consequuntur veniam, eius commodi doloribus delectus.
          </p>
        </div>
        <Trajectory />
        <Feed />
      </div>
    </div>
  );
};

export default Home;
