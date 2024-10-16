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
            <div>
              <span className="presentation">Hola, soy Nahuel, Desarrollador Back-end Java.</span>
              <span className="uruguay"> Soy de uruguay 🧉. </span> 
            </div>
            <span className="context">
              Me centro en el desarrollo de software innovador
              y de calidad en el entorno web.
            </span>
          </p>
        </div>
        <Trajectory />
        <Feed />
      </div>
    </div>
  );
};

export default Home;
