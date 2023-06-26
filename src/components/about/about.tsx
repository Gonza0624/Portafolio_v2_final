import image from "../../assets/about-img/code.webp";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-200px, -100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-section__card">
        <img src={image} alt="" />
        <div>
          <Reveal
            triggerOnce
            delay={50}
            damping={0.1}
            keyframes={customAnimation}
          >
            <p className="about-section__title">
              About <span className="about-section__title-color">Me</span>{" "}
            </p>
          </Reveal>
          <Reveal
            triggerOnce
            delay={50}
            damping={0.1}
            keyframes={customAnimation}
          >
            <p className="about-section__paragraph">
              I am <span className="about-section__span">Gonzalo Salazar</span>,
              I am 21 years old, I did a technologist in the training program of
              analysis and software development at{" "}
              <span className="about-section__span">Sena</span>, I did my
              internship with{" "}
              <span className="about-section__span">Globant</span> fulfilling
              the role of{" "}
              <span className="about-section__span">Web UI developer</span>, I
              am a responsible, organized, creative person, I am also a fast
              learner and I adapt to any situation, eager to learn and grow in
              the future personally and professionally.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
