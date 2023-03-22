import image from "../../assets/code.jpg";
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-section__card">
        <img src={image} alt="" />
        <div>
          <Fade triggerOnce direction="right" delay={50} damping={0.1}>
            <p className="about-section__title">
              About <span className="about-section__title-color">Me</span>{" "}
            </p>
          </Fade>
          <Fade triggerOnce direction="right" delay={50} damping={0.1}>
            <p className="about-section__paragraph">
              I am <span className="about-section__span">Gonzalo Salazar</span>,
              I am 20 years old, I did a technologist in the training program of
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
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default About;
