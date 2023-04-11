import React, { useContext } from "react";
import fondo1 from "../../assets/backgrounds/fondo.webp";
import fondo2 from "../../assets/backgrounds/fondo2.webp";
import image from "../../assets/projects-img/home-image.webp";
import { ImArrowRight2 } from "react-icons/im";
import { Fade } from "react-awesome-reveal";
import { ThemeContext } from "../themeContext/themeContext";

const Home: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  const home_bg = {
    backgroundImage: `url(${theme === "light" ? fondo1 : fondo2})`,
    backgroundSize: "cover",
  };

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
                Welcome to my portfolio! I am a passionate software developer
                with a love for technology and programming, and here you can see
                some of my latest work.
              </p>
            </Fade>
            <Fade direction="left" delay={50} damping={9}>
              <div className="home-section__container-btn">
                <a
                  target="_blank"
                  type="button"
                  href="https://drive.google.com/file/d/1_t2siUkXRtVVUA4YAJLLjBS-zF2mb6ey/view"
                  className="home-section__btn"
                >
                  My resume <ImArrowRight2 className="home-section__icon-btn" />
                </a>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
