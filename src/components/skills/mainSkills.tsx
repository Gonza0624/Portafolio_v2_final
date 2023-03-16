// import image from "../../assets/code.jpg";
import html from "../../assets/skills/html.png";
import js from "../../assets/skills/js.png";
import css from "../../assets/skills/css.png";
import react from "../../assets/skills/react.png";
import git from "../../assets/skills/git.png";
import sass from "../../assets/skills/sass.png";
import typeScript from "../../assets/skills/typeScript.png";
import ReactN from "../../assets/skills/RN.svg";
import php from "../../assets/skills/php.png";
import laravel from "../../assets/skills/laravel.png";
import bootstrap from "../../assets/skills/bootstrap.png";
import mysql from "../../assets/skills/mysql.png";
import { Fade } from "react-awesome-reveal";

const MainSkills = () => {
  return (
    <section className="main-skills-section">
      <div>
        <p className="main-skills-section__title">
          Main <span className="main-skills-section__title-color">skills</span>{" "}
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
                <img className="main-skills-section__img" src={ReactN} />
                <h4>React Native</h4>
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
