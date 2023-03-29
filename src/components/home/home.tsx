import React from "react";
import fondo from "../../assets/fondo.png";
import image from "../../assets/home-image.svg";
import { ImArrowRight2 } from "react-icons/im";
import { Fade } from "react-awesome-reveal";

const home_bg = {
  backgroundImage: `url(${fondo})`,
};

const Home: React.FC = () => {
  return (
    <section id="home" className="home-section">
      <div style={home_bg} className="home-section__parallax">
        <div className="home-section__content">
          <Fade direction="left" delay={50} damping={0.1}>
            <figure className="home-section__container-img">
              <img width={450} src={image} alt="" />
            </figure>
          </Fade>
          <div className="home-section__container-text">
            <Fade direction="left" delay={50} damping={1}>
              <h1 className="home-section__title">
                Hello{" "}
                <span className="home-section__title-color">
                  my name is Gonzalo
                </span>
              </h1>
              <p className="home-section__paragraph">
                Hi, welcome to my portfolio, I'm Gonzalo Salazar, I was an
                intern at Globant and I'm looking to keep growing and increasing
                my knowledge in software development.
              </p>
            </Fade>
            <Fade direction="left" delay={50} damping={9}>
              <div className="home-section__container-btn">
                <button className="home-section__btn">
                  Ver hoja de vida{" "}
                  <ImArrowRight2 className="home-section__icon-btn" />
                </button>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
