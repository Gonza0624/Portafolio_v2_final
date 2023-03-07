import React, { useState, useEffect } from "react";
import fondo from "../../assets/fondo.png";
import image from "../../assets/home-image.svg";
import { ImArrowRight2 } from "react-icons/im";

interface Props {
  direction?: "left" | "right";
}

const home_bg = {
  backgroundImage: `url(${fondo})`,
};

const Home: React.FC<Props> = ({ direction = "right" }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="home-section">
      <div style={home_bg} className="home-section__parallax">
        <div className={`fade-in ${isVisible ? "visible" : ""} ${direction}`}>
          <div className="home-section__content">
            <figure className="home-section__container-img">
              <img width={450} src={image} alt="" />
            </figure>
            <div className="home-section__container-text">
              <h1 className="home-section__title">
                Hello{" "}
                <span className="home-section__title-color">
                  my name is Gonzalo
                </span>
              </h1>
              <p className="home-section__paragraph">
                Hello, welcome to my portfolio, I'm Gonzalo Salazar, I'm
                currently an intern at Globant and I'm looking to continue
                growing and increasing my knowledge in software development.
              </p>
              <div className="home-section__container-btn">
                <button className="home-section__btn">
                  Ver hoja de vida{" "}
                  <ImArrowRight2 className="home-section__icon-btn" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
