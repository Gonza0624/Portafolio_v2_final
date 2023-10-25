import html from "../../assets/skills/html.webp";
import js from "../../assets/skills/javascript.webp";
import css from "../../assets/skills/css.webp";
import react from "../../assets/skills/react.webp";
import git from "../../assets/skills/git.webp";
import sass from "../../assets/skills/sass.webp";
import typeScript from "../../assets/skills/ts.webp";
import php from "../../assets/skills/php.webp";
import laravel from "../../assets/skills/laravel.webp";
import bootstrap from "../../assets/skills/bootstrap.webp";
import mysql from "../../assets/skills/mysql.webp";
import angular from "../../assets/skills/angular.webp";
import next from "../../assets/skills/next.webp";
import docker from "../../assets/skills/docker.webp";
import { Fade } from "react-awesome-reveal";

const MainSkills = () => {
  return (
    <div className="main-skills-section">
      <Fade triggerOnce direction="left" delay={50} damping={0.1}>
        <div className="main-skills-section__my-skill">
          <img className="main-skills-section__img" src={html} />
        </div>
      </Fade>
      <Fade triggerOnce direction="left" delay={50} damping={0.1}>
        <div className="main-skills-section__my-skill">
          <img className="main-skills-section__img" src={css} />
        </div>
      </Fade>
      <Fade triggerOnce direction="left" delay={50} damping={0.1}>
        <div className="main-skills-section__my-skill">
          <img className="main-skills-section__img" src={js} />
        </div>
      </Fade>
      <Fade triggerOnce direction="left" delay={50} damping={0.1}>
        <div className="main-skills-section__my-skill">
          <img
            className="main-skills-section__img typescript-icon"
            src={typeScript}
          />
        </div>
      </Fade>
      <Fade triggerOnce direction="left" delay={50} damping={0.1}>
        <div className="main-skills-section__my-skill">
          <img className="main-skills-section__img" src={react} />
        </div>
      </Fade>
      <Fade triggerOnce direction="left" delay={50} damping={0.1}>
        <div className="main-skills-section__my-skill">
          <img className="main-skills-section__img" src={next} />
        </div>
      </Fade>
      <Fade triggerOnce direction="left" delay={50} damping={0.1}>
        <div className="main-skills-section__my-skill">
          <img className="main-skills-section__img" src={angular} />
        </div>
      </Fade>
      <Fade triggerOnce direction="left" delay={50} damping={0.1}>
        <div className="main-skills-section__my-skill">
          <img className="main-skills-section__img" src={laravel} />
        </div>
      </Fade>
      <Fade triggerOnce direction="left" delay={50} damping={0.1}>
        <div className="main-skills-section__my-skill">
          <img className="main-skills-section__img" src={sass} />
        </div>
      </Fade>
      <Fade triggerOnce direction="left" delay={50} damping={0.1}>
        <div className="main-skills-section__my-skill">
          <img className="main-skills-section__img" src={php} />
        </div>
      </Fade>
      <Fade triggerOnce direction="left" delay={50} damping={0.1}>
        <div className="main-skills-section__my-skill">
          <img className="main-skills-section__img" src={git} />
        </div>
      </Fade>
      <Fade triggerOnce direction="left" delay={50} damping={0.1}>
        <div className="main-skills-section__my-skill">
          <img className="main-skills-section__img" src={bootstrap} />
        </div>
      </Fade>
      <Fade triggerOnce direction="left" delay={50} damping={0.1}>
        <div className="main-skills-section__my-skill">
          <img className="main-skills-section__img" src={mysql} />
        </div>
      </Fade>
      <Fade triggerOnce direction="left" delay={50} damping={0.1}>
        <div className="main-skills-section__my-skill">
          <img width={80} src={docker} />
        </div>
      </Fade>
    </div>
  );
};
export default MainSkills;
