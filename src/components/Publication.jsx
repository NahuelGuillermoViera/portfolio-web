import React from "react";
import Img from '../img/images.jpeg'
import Github from "../icons/Github";
import Go from "../icons/Go";
import { useMediaQuery } from "react-responsive";

const Publication = () => {
  const isDesktopOrLaptop = useMediaQuery ({
    query: '(min-width: 600px)'
  })

  return (
    <div className={isDesktopOrLaptop ? 'publicationDesktop' : 'publicationMobile'} id='publications'>
      <div className="img"><img src={Img} alt="" /></div>
      <div className="contenido">
        <p className="titulo">Titulo</p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </div>
      <div className="link">
        <a href="https://github.com/NahuelGuillermoViera" target="blank">
          <button className="github">
            <Github />
          </button>
        </a>
        <a href="https://github.com/NahuelGuillermoViera" target="blank">
          <button className="go">
            <Go/>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Publication;
