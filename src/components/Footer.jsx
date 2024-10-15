import React from "react";

import Linkedin from "../icons/Linkedin";
import Github from "../icons/Github";
import Curriculum from "../icons/Curriculum";
import Cv from '../downloads/CV Nahuel Guillermo SP.pdf'

function Footer() {
  return (
    <div className="footer" id="contact">
      <div className="container">
        <div className="contact">
          <span className="mail">nahuelguillermoviera@gmail.com</span>
          <span className="phone">+598 96 292 464</span>
          <span className="ubication">Montevideo, Uruguay</span>
        </div>
        <div className="buttons">
          <a href="https://www.linkedin.com/in/nahuel-guillermo-viera" target="blank">
            <button className="linkedin">
                <Linkedin />
            </button>
          </a>
          <a href="https://github.com/NahuelGuillermoViera" target="blank">
            <button className="github">
              <Github />
            </button>
          </a>
          <a href={Cv} download>
            <button className="cv">
              <Curriculum />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
