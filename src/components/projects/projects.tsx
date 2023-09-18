import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import pokeimg from "../../assets/projects-img/poke.webp";
import eccom from "../../assets/projects-img/ecommerce.webp";
import rickimg_cel from "../../assets/projects-img/rick2.webp";
import rickimg from "../../assets/projects-img/rickandmorty.png";
import portfolio_v1_img from "../../assets/projects-img/portfolio1.png";
import portfolio_v1_img_cel from "../../assets/projects-img/portfolio1_cel.png";
import crud_img from "../../assets/projects-img/crud.png";
import crud_img_cel from "../../assets/projects-img/crud.webp";
import gifs_img from "../../assets/projects-img/gifs-img.png";
import gifs_img_cel from "../../assets/projects-img/gifs_cel.png";
import country_img from "../../assets/projects-img/country_app.png";
import country_cel from "../../assets/projects-img/country_app_cel.png";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";

const Projects = () => {
  const { t } = useTranslation("projects");

  const [crudImg, setCrudImg] = useState<string>("");
  useEffect(() => {
    const updateImage = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 700) {
        setCrudImg(crud_img);
      } else {
        setCrudImg(crud_img_cel);
      }
    };
    updateImage();
    window.addEventListener("resize", updateImage);
    return () => window.removeEventListener("resize", updateImage);
  }, []);

  const [rickImg, setRickImg] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  useEffect(() => {
    const updateImage = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 800) {
        setRickImg(rickimg);
        setPosition("center");
      } else {
        setRickImg(rickimg_cel);
        setPosition("right");
      }
    };
    updateImage();
    window.addEventListener("resize", updateImage);
    return () => window.removeEventListener("resize", updateImage);
  }, []);

  const [gifsImg, setGifsImg] = useState<string>("");
  useEffect(() => {
    const updateImage = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 700) {
        setGifsImg(gifs_img);
      } else {
        setGifsImg(gifs_img_cel);
      }
    };
    updateImage();
    window.addEventListener("resize", updateImage);
    return () => window.removeEventListener("resize", updateImage);
  }, []);

  const [portfolio, setPortfolio] = useState<string>("");
  useEffect(() => {
    const updateImage = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 700) {
        setPortfolio(portfolio_v1_img);
      } else {
        setPortfolio(portfolio_v1_img_cel);
      }
    };
    updateImage();
    window.addEventListener("resize", updateImage);
    return () => window.removeEventListener("resize", updateImage);
  }, []);

  const [country, setCountry] = useState<string>("");
  useEffect(() => {
    const updateImage = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 1000) {
        setCountry(country_img);
      } else {
        setCountry(country_cel);
      }
    };
    updateImage();
    window.addEventListener("resize", updateImage);
    return () => window.removeEventListener("resize", updateImage);
  }, []);

  const ecommerce = {
    backgroundImage: `url(${eccom})`,
    backgroundSize: "cover",
  };
  const poke = {
    backgroundImage: `url(${pokeimg})`,
    backgroundSize: "cover",
  };
  const rick = {
    backgroundImage: `url(${rickImg})`,
    backgroundSize: "cover",
  };
  const portfolio_v1 = {
    backgroundImage: `url(${portfolio})`,
    backgroundSize: "cover",
  };
  const crud = {
    backgroundImage: `url(${crudImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const gifs = {
    backgroundImage: `url(${gifsImg})`,
    backgroundSize: "cover",
  };

  const countryImg = {
    backgroundImage: `url(${country})`,
    backgroundSize: "cover",
    backgroundPosition: "left",
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="prueba">
      <div id="projects" className="projects-section__row">
        <div>
          <p className="projects-section__title">
            {t("title")}{" "}
            <span className="projects-section__title-color">{t("title2")}</span>{" "}
          </p>
        </div>
        <Fade triggerOnce direction="left" delay={50} damping={0.1}>
          <Slider {...settings}>
            <div className="projects-section__box projects-section__card">
              <div style={ecommerce} className="projects-section__wrapper">
                <div className="data">
                  <div className="content">
                    <a
                      target={"_blank"}
                      className="projects-section__repo"
                      href={"https://github.com/Gonza0624/proyectoEcommerce"}
                    >
                      {t("repository")} »
                    </a>
                    <h1 className="projects-section__title-card">
                      {t("ecommerce")}
                    </h1>
                    <p className="text">{t("ecommerceParagraph")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="projects-section__box projects-section__card">
              <div style={poke} className="projects-section__wrapper">
                <div className="data">
                  <div className="content">
                    <a
                      target={"_blank"}
                      className="projects-section__repo"
                      href={"https://github.com/Gonza0624/pokemon-project"}
                    >
                      {t("repository")} »
                    </a>
                    <h1 className="projects-section__title-card">Pokedex</h1>
                    <p className="text">{t("pokedexParagraph")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="projects-section__box projects-section__card">
              <div
                style={{
                  ...rick,
                  backgroundPosition: position,
                }}
                className="projects-section__wrapper"
              >
                <div className="data">
                  <div className="content">
                    <a
                      target={"_blank"}
                      className="projects-section__repo"
                      href={"https://github.com/Gonza0624/Rick-And-Morty-API"}
                    >
                      {t("repository")} »
                    </a>
                    <h1 className="projects-section__title-card">
                      {t("rickTitle")}
                    </h1>
                    <p className="text">{t("rickParagraph")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="projects-section__box projects-section__card">
              <div style={portfolio_v1} className="projects-section__wrapper">
                <div className="data">
                  <div className="content">
                    <a
                      target={"_blank"}
                      className="projects-section__repo"
                      href={"https://github.com/Gonza0624/portafolio_v1"}
                    >
                      {t("repository")} »
                    </a>
                    <h1 className="projects-section__title-card">
                      {t("portfolioTitle")}
                    </h1>
                    <p className="text">{t("portfolioParagraph")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="projects-section__box projects-section__card">
              <div style={crud} className="projects-section__wrapper">
                <div className="data">
                  <div className="content">
                    <a
                      target={"_blank"}
                      className="projects-section__repo"
                      href={"https://github.com/Gonza0624/crud_react_ts"}
                    >
                      {t("repository")} »
                    </a>
                    <h1 className="projects-section__title-card">
                      {t("userCrudTitle")}
                    </h1>
                    <p className="text">{t("userCrudParagraph")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="projects-section__box projects-section__card">
              <div style={gifs} className="projects-section__wrapper">
                <div className="data">
                  <div className="content">
                    <a
                      target={"_blank"}
                      className="projects-section__repo"
                      href={"https://github.com/Gonza0624/Gifs-App-Angular"}
                    >
                      {t("repository")} »
                    </a>
                    <h1 className="projects-section__title-card">
                      {t("gifsTitle")}
                    </h1>
                    <p className="text">{t("gifsParagraph")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="projects-section__box projects-section__card">
              <div style={countryImg} className="projects-section__wrapper">
                <div className="data">
                  <div className="content">
                    <a
                      target={"_blank"}
                      className="projects-section__repo"
                      href={"https://github.com/Gonza0624/country_app"}
                    >
                      {t("repository")} »
                    </a>
                    <h1 className="projects-section__title-card">
                      {t("countryTitle")}
                    </h1>
                    <p className="text">{t("countryParagraph")}</p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </Fade>
      </div>
    </div>
  );
};

export default Projects;
