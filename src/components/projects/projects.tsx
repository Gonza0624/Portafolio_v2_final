import pokeimg from "../../assets/projects-img/poke.webp";
import fondo from "../../assets/projects-img/ecommerce.webp";
import rickimg from "../../assets/projects-img/rick2.webp";
import portfolio_v1_img from "../../assets/projects-img/robot.webp";
import crud_img from "../../assets/projects-img/crud.webp";
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
  const crud = {
    backgroundImage: `url(${crud_img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",

  };

  return (
    <>
      <div id="projects" className="projects-section__row">
        <Fade triggerOnce direction="left" delay={300} damping={0.1}>
          <div className="projects-section__box projects-section__card">
            <div style={poke} className="projects-section__wrapper">
              <div className="data">
                <div className="content">
                  <a
                    target={"_blank"}
                    className="projects-section__repo"
                    href={"https://github.com/Gonza0624/pokemon-project"}
                  >
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
        <Fade triggerOnce direction="left" delay={300} damping={0.1}>
          <div className="projects-section__box projects-section__card">
            <div style={ecommerce} className="projects-section__wrapper">
              <div className="data">
                <div className="content">
                  <a
                    target={"_blank"}
                    className="projects-section__repo"
                    href={"https://github.com/Gonza0624/proyectoEcommerce"}
                  >
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
        <Fade triggerOnce direction="left" delay={300} damping={0.1}>
          <div className="projects-section__box projects-section__card">
            <div style={rick} className="projects-section__wrapper">
              <div className="data">
                <div className="content">
                  <a
                    target={"_blank"}
                    className="projects-section__repo"
                    href={"https://github.com/Gonza0624/Rick-And-Morty-API"}
                  >
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
        <Fade triggerOnce direction="left" delay={300} damping={0.1}>
          <div className="projects-section__box projects-section__card">
            <div style={portfolio_v1} className="projects-section__wrapper">
              <div className="data">
                <div className="content">
                  <a
                    target={"_blank"}
                    className="projects-section__repo"
                    href={"https://github.com/Gonza0624/portafolio_v1"}
                  >
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
        <Fade triggerOnce direction="left" delay={300} damping={0.1}>
          <div className="projects-section__box projects-section__card">
            <div style={crud} className="projects-section__wrapper">
              <div className="data">
                <div className="content">
                  <a
                    target={"_blank"}
                    className="projects-section__repo"
                    href={"https://github.com/Gonza0624/crud_react_ts"}
                  >
                    Repository »
                  </a>
                  <h1 className="projects-section__title">User CRUD</h1>
                  <p className="text">
                    "User crud made with react, typescript, bootstrap, axios and
                    an api built in express and mysql"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Projects;
