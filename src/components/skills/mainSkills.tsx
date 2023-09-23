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
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

const MainSkills = () => {
  const { t } = useTranslation("skills");
  return (
    <section id="skills" className="main-skills-section">
      <div>
        <p className="main-skills-section__title">
          {t("title")}{" "}
          <span className="main-skills-section__title-color">
            {t("title2")}
          </span>{" "}
        </p>
      </div>
      <div className="main-skills-section__content">
        <div className="main-skills-section__container">
          <div className="main-skills-section__flex">
            <Fade triggerOnce direction="left" delay={50} damping={0.1}>
              <div className="main-skills-section__my-skill">
                <img className="main-skills-section__img" src={html} />
                <h4>HTML</h4>
              </div>
            </Fade>
            <Fade triggerOnce direction="left" delay={50} damping={0.1}>
              <div className="main-skills-section__my-skill">
                <img className="main-skills-section__img" src={css} />
                <h4>CSS</h4>
              </div>
            </Fade>
            <Fade triggerOnce direction="left" delay={50} damping={0.1}>
              <div className="main-skills-section__my-skill">
                <img className="main-skills-section__img" src={js} />
                <h4>Javascript</h4>
              </div>
            </Fade>
            <Fade triggerOnce direction="left" delay={50} damping={0.1}>
              <div className="main-skills-section__my-skill">
                <img className="main-skills-section__img" src={typeScript} />
                <h4>TypeScript</h4>
              </div>
            </Fade>
            <Fade triggerOnce direction="left" delay={50} damping={0.1}>
              <div className="main-skills-section__my-skill">
                <img className="main-skills-section__img" src={react} />
                <h4>React JS</h4>
              </div>
            </Fade>
            <Fade triggerOnce direction="left" delay={50} damping={0.1}>
              <div className="main-skills-section__my-skill">
                <img className="main-skills-section__img" src={angular} />
                <h4>Angular</h4>
              </div>
            </Fade>
            <Fade triggerOnce direction="left" delay={50} damping={0.1}>
              <div className="main-skills-section__my-skill">
                <img className="main-skills-section__img" src={sass} />
                <h4>Sass</h4>
              </div>
            </Fade>
            <Fade triggerOnce direction="left" delay={50} damping={0.1}>
              <div className="main-skills-section__my-skill">
                <img className="main-skills-section__img" src={git} />
                <h4>Git</h4>
              </div>
            </Fade>
            <Fade triggerOnce direction="left" delay={50} damping={0.1}>
              <div className="main-skills-section__my-skill">
                <img className="main-skills-section__img" src={php} />
                <h4>PHP</h4>
              </div>
            </Fade>
            <Fade triggerOnce direction="left" delay={50} damping={0.1}>
              <div className="main-skills-section__my-skill">
                <img className="main-skills-section__img" src={laravel} />
                <h4>Laravel</h4>
              </div>
            </Fade>
            <Fade triggerOnce direction="left" delay={50} damping={0.1}>
              <div className="main-skills-section__my-skill">
                <img className="main-skills-section__img" src={bootstrap} />
                <h4>Bootstrap</h4>
              </div>
            </Fade>
            <Fade triggerOnce direction="left" delay={50} damping={0.1}>
              <div className="main-skills-section__my-skill">
                <img className="main-skills-section__img" src={mysql} />
                <h4>MySQL</h4>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MainSkills;
