import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillGithub } from "react-icons/ai";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

// iconos
import html from "../../assets/skills/html.webp";
import js from "../../assets/skills/js.webp";
import css from "../../assets/skills/css.webp";
import react from "../../assets/skills/react.webp";
import git from "../../assets/skills/git.webp";
import sass from "../../assets/skills/sass.webp";
import typeScript from "../../assets/skills/typeScript.webp";
import php from "../../assets/skills/php.webp";
import laravel from "../../assets/skills/laravel.webp";
import bootstrap from "../../assets/skills/bootstrap.webp";
import mysql from "../../assets/skills/mysql.webp";
import angular from "../../assets/skills/angular.webp";

// imagenes del ecommerce
import ecom1 from "../../assets/projects-img/ecommerce/ecom_1.webp";
import ecom2 from "../../assets/projects-img/ecommerce/ecom_2.webp";
import ecom3 from "../../assets/projects-img/ecommerce/ecom_3.webp";
import ecom4 from "../../assets/projects-img/ecommerce/ecom_4.webp";
import ecom5 from "../../assets/projects-img/ecommerce/ecom_5.webp";
import ecom6 from "../../assets/projects-img/ecommerce/ecom_6.webp";
import ecom7 from "../../assets/projects-img/ecommerce/ecom_7.webp";
import ecom8 from "../../assets/projects-img/ecommerce/ecom_8.webp";

// imagenes del portafolio version 1
import portafolio1 from "../../assets/projects-img/portfolio_v1/portfolio_1.webp";
import portafolio2 from "../../assets/projects-img/portfolio_v1/portfolio_2.webp";
import portafolio3 from "../../assets/projects-img/portfolio_v1/portfolio_3.webp";
import portafolio4 from "../../assets/projects-img/portfolio_v1/portfolio_4.webp";
import portafolio5 from "../../assets/projects-img/portfolio_v1/portfolio_5.webp";

// imagenes del portafolio version final
import portafolio_final1 from "../../assets/projects-img/portfolio_final/portafolio_final_1.webp";
import portafolio_final2 from "../../assets/projects-img/portfolio_final/portafolio_final_2.webp";

// imagenes de rick and morty
import rickandmorty1 from "../../assets/projects-img/rickandmorty/rickandmorty_1.webp";
import rickandmorty2 from "../../assets/projects-img/rickandmorty/rickandmorty_2.webp";
import rickandmorty3 from "../../assets/projects-img/rickandmorty/rickandmorty_3.webp";
import rickandmorty4 from "../../assets/projects-img/rickandmorty/rickandmorty_4.webp";
import rickandmorty5 from "../../assets/projects-img/rickandmorty/rickandmorty_5.webp";

// imagenes de la aplicacion de gifs
import gifs1 from "../../assets/projects-img/gifsApp/gifsApp_1.webp";
import gifs2 from "../../assets/projects-img/gifsApp/gifsApp_2.webp";
import gifs3 from "../../assets/projects-img/gifsApp/gifsApp_3.webp";
import gifs4 from "../../assets/projects-img/gifsApp/gifsApp_4.webp";

// imagenes de la app de paises
import country1 from "../../assets/projects-img/countryApp/countryApp_1.webp";
import country2 from "../../assets/projects-img/countryApp/countryApp_2.webp";
import country3 from "../../assets/projects-img/countryApp/countryApp_3.webp";
import country4 from "../../assets/projects-img/countryApp/countryApp_4.webp";

const Projects_2 = () => {
  const { t } = useTranslation("projects");

  const ecommerce_images = [
    ecom1,
    ecom2,
    ecom3,
    ecom4,
    ecom6,
    ecom5,
    ecom7,
    ecom8,
  ];

  const portfolio_images = [
    portafolio1,
    portafolio2,
    portafolio3,
    portafolio4,
    portafolio5,
  ];

  const portfolio_final_images = [portafolio_final1, portafolio_final2];

  const rickandmorty_images = [
    rickandmorty1,
    rickandmorty2,
    rickandmorty3,
    rickandmorty4,
    rickandmorty5,
  ];

  const gifs_images = [gifs1, gifs2, gifs3, gifs4];

  const countries_images = [country1, country2, country3, country4];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div id="projects" className="projects-section">
      <div>
        <p className="projects-section__main-title">
          {t("title")}{" "}
          <span className="projects-section__span">{t("title2")}</span>{" "}
        </p>
      </div>

      <Fade triggerOnce delay={400} damping={0.1}>
        <div className="projects-section__content">
          <div className="projects-section__description-project">
            <h1 className="projects-section__title">
              {t("ecommerce")}
              <span className="projects-section__span">{t("ecommerce2")}</span>
            </h1>
            <p className="projects-section__paragraph">
              {t("ecommerceParagraph")}
            </p>
            <figure className="projects-section__container-badges">
              <img className="" src={html} />
              <img className="" src={css} />
              <img className="" src={php} />
              <img className="" src={laravel} />
              <img className="" src={bootstrap} />
              <img className="" src={mysql} />
            </figure>
            <div className="projects-section__container-btn">
              <a
                target="_blank"
                type="button"
                href="https://github.com/Gonza0624/"
                className="projects-section__btn"
              >
                {t("repository")}{" "}
                <AiFillGithub className="projects-section__icon-btn" />
              </a>
            </div>
          </div>
          <div className="projects-section__img-container">
            <Slider {...settings}>
              {ecommerce_images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`img${index + 1}`} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </Fade>
      <Fade triggerOnce delay={400} damping={0.1}>
        <div className="projects-section__content">
          <div className="projects-section__description-project">
            <h1 className="projects-section__title">
              {t("portfolioTitle")}{" "}
              <span className="projects-section__span">
                {t("portfolioTitle2")}
              </span>
            </h1>
            <p className="projects-section__paragraph">
              {t("portfolioParagraph")}
            </p>
            <figure className="projects-section__container-badges">
              <img className="" src={react} />
              <img className="" src={js} />
              <img className="" src={css} />
              <img className="" src={sass} />
              <img className="" src={git} />
            </figure>
            <div className="projects-section__container-btn">
              <a
                target="_blank"
                type="button"
                href={"https://github.com/Gonza0624/portafolio_v1"}
                className="projects-section__btn"
              >
                {t("repository")}{" "}
                <AiFillGithub className="projects-section__icon-btn" />
              </a>
            </div>
          </div>
          <div className="projects-section__img-container">
            <Slider {...settings}>
              {portfolio_images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`img${index + 1}`} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </Fade>
      <Fade triggerOnce delay={400} damping={0.1}>
        <div className="projects-section__content">
          <div className="projects-section__description-project">
            <h1 className="projects-section__title">
              {t("portfolioFinalTitle")}{" "}
              <span className="projects-section__span">
                {t("portfolioFinalTitle2")}
              </span>
            </h1>
            <p className="projects-section__paragraph">
              {t("portfolioFinalParagraph")}
            </p>
            <figure className="projects-section__container-badges">
              <img className="" src={react} />
              <img className="" src={typeScript} />
              <img className="" src={css} />
              <img className="" src={sass} />
              <img className="" src={git} />
            </figure>
            <div className="projects-section__container-btn">
              <a
                target="_blank"
                type="button"
                href={"https://github.com/Gonza0624/Portafolio_v2_final"}
                className="projects-section__btn"
              >
                {t("repository")}{" "}
                <AiFillGithub className="projects-section__icon-btn" />
              </a>
            </div>
          </div>
          <div className="projects-section__img-container">
            <Slider {...settings}>
              {portfolio_final_images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`img${index + 1}`} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </Fade>
      <Fade triggerOnce delay={400} damping={0.1}>
        <div className="projects-section__content">
          <div className="projects-section__description-project">
            <h1 className="projects-section__title">
              {t("rickTitle")}{" "}
              <span className="projects-section__span">{t("rickTitle2")}</span>
            </h1>
            <p className="projects-section__paragraph">{t("rickParagraph")}</p>
            <figure className="projects-section__container-badges">
              <img className="" src={react} />
              <img className="" src={typeScript} />
              <img className="" src={css} />
              <img className="" src={git} />
            </figure>
            <div className="projects-section__container-btn">
              <a
                target="_blank"
                type="button"
                href={"https://github.com/Gonza0624/Rick-And-Morty-API"}
                className="projects-section__btn"
              >
                {t("repository")}{" "}
                <AiFillGithub className="projects-section__icon-btn" />
              </a>
            </div>
          </div>
          <div className="projects-section__img-container">
            <Slider {...settings}>
              {rickandmorty_images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`img${index + 1}`} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </Fade>
      <Fade triggerOnce delay={400} damping={0.1}>
        <div className="projects-section__content">
          <div className="projects-section__description-project">
            <h1 className="projects-section__title">
              {t("gifsTitle")}{" "}
              <span className="projects-section__span">{t("gifsTitle2")}</span>
            </h1>
            <p className="projects-section__paragraph">{t("gifsParagraph")}</p>
            <figure className="projects-section__container-badges">
              <img className="" src={angular} />
              <img className="" src={typeScript} />
              <img className="" src={bootstrap} />
              <img className="" src={git} />
            </figure>
            <div className="projects-section__container-btn">
              <a
                target="_blank"
                type="button"
                href={"https://github.com/Gonza0624/Gifs-App-Angular"}
                className="projects-section__btn"
              >
                {t("repository")}{" "}
                <AiFillGithub className="projects-section__icon-btn" />
              </a>
            </div>
          </div>
          <div className="projects-section__img-container">
            <Slider {...settings}>
              {gifs_images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`img${index + 1}`} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </Fade>
      <Fade triggerOnce delay={400} damping={0.1}>
        <div className="projects-section__content">
          <div className="projects-section__description-project">
            <h1 className="projects-section__title">
              {t("countryTitle")}{" "}
              <span className="projects-section__span">
                {t("countryTitle2")}
              </span>
            </h1>
            <p className="projects-section__paragraph">
              {t("countryParagraph")}
            </p>
            <figure className="projects-section__container-badges">
              <img className="" src={angular} />
              <img className="" src={typeScript} />
              <img className="" src={bootstrap} />
              <img className="" src={git} />
            </figure>
            <div className="projects-section__container-btn">
              <a
                target="_blank"
                type="button"
                href={"https://github.com/Gonza0624/country_app"}
                className="projects-section__btn"
              >
                {t("repository")}{" "}
                <AiFillGithub className="projects-section__icon-btn" />
              </a>
            </div>
          </div>
          <div className="projects-section__img-container">
            <Slider {...settings}>
              {countries_images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`img${index + 1}`} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Projects_2;
