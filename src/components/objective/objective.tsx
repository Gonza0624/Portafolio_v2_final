import image from "../../assets/about-img/code.jpg";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-200px, 350px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const Objective = () => {
  return (
    <section id="objective" className="objective-section">
      <div className="objective-section__card">
        <div>
          <Reveal
            triggerOnce
            delay={50}
            damping={0.1}
            keyframes={customAnimation}
          >
            <p className="objective-section__title">
              My{" "}
              <span className="objective-section__title-color">objective</span>{" "}
            </p>
          </Reveal>
          <Reveal
            triggerOnce
            delay={50}
            damping={0.1}
            keyframes={customAnimation}
          >
            <p className="objective-section__paragraph">
              I am looking for a good teamwork environment, where I can improve
              my programming skills, gain experience, learn different ways to
              solve problems through new challenges, deepen both front end
              development and gain skills in backend and design.
            </p>
          </Reveal>
        </div>
        <img src={image} alt="" />
      </div>
    </section>
  );
};

export default Objective;
