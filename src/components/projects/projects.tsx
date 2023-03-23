import pokeimg from "../../assets/poke.jpg";
import fondo from "../../assets/ecommerce.jfif";
import rickimg from "../../assets/rick2.jpg";
import portfolio_v1_img from "../../assets/robot.png";
import { Fade } from "react-awesome-reveal";

const Projects = () => {
  
  const ecommerce = {
    backgroundImage: `url(${fondo})`,
    backgroundSize: "cover",
  };
  const poke = {
    backgroundImage: `url(${pokeimg})`,
    backgroundSize: "cover",
  };
  const rick = {
    backgroundImage: `url(${rickimg})`,
    backgroundSize: "cover",
    backgroundPosition: "right",
  };
  const portfolio_v1 = {
    backgroundImage: `url(${portfolio_v1_img})`,
    backgroundSize: "contain",
  };

  return (
    <>
      <div className="projects-section">
        <div className="projects-section__row">
          <Fade triggerOnce direction="left" delay={100} damping={0.1}>
            <div className="projects-section__box projects-section__card">
              <div style={poke} className="projects-section__wrapper">
                <div className="data">
                  <div className="content">
                    <a className="projects-section__repo" href="">
                      Repository »
                    </a>
                    <h1 className="projects-section__title">Pokedex</h1>
                    <p className="text">
                      "Application made with react native, consuming the pokemon
                      api to show the characters and their details."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade triggerOnce direction="left" delay={50} damping={0.1}>
            <div className="projects-section__box projects-section__card">
              <div style={ecommerce} className="projects-section__wrapper">
                <div className="data">
                  <div className="content">
                    <a className="projects-section__repo" href="">
                      Repository »
                    </a>
                    <h1 className="projects-section__title">Ecommerce</h1>
                    <p className="text">
                      "Functional Ecommerce made with Laravel, Bootstrap and
                      MySQL, contains product catalog, detail, shopping cart,
                      admin dashboard etc."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade triggerOnce direction="left" delay={50} damping={0.1}>
            <div className="projects-section__box projects-section__card">
              <div style={rick} className="projects-section__wrapper">
                <div className="data">
                  <div className="content">
                    <a className="projects-section__repo" href="">
                      Repository »
                    </a>
                    <h1 className="projects-section__title">
                      Rick and morty api
                    </h1>
                    <p className="text">
                      "project made with react, typescript, css for the
                      consumption of the api of rick and morty where each of the
                      characters are shown with their details and page layout."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade triggerOnce direction="left" delay={50} damping={0.1}>
            <div className="projects-section__box projects-section__card">
              <div style={portfolio_v1} className="projects-section__wrapper">
                <div className="data">
                  <div className="content">
                    <a className="projects-section__repo" href="">
                      Repository »
                    </a>
                    <h1 className="projects-section__title">Portfolio V1</h1>
                    <p className="text">
                      "this was the first version of my portfolio made during my
                      internship at globant using react, javascript and sass"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Projects;
