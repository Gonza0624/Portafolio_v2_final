import image from "../../assets/code.jpg";
import { Fade } from "react-awesome-reveal";

const Objective = () => {
  return (
    <section className="objective-section">
      <div className="objective-section__card">
        <div>
          <Fade triggerOnce direction="left" delay={50} damping={0.1}>
            <p className="objective-section__title">
              My{" "}
              <span className="objective-section__title-color">objective</span>{" "}
            </p>
          </Fade>
          <Fade triggerOnce direction="left" delay={5} damping={0.1}>
            <p className="objective-section__paragraph">
              I am looking for a good teamwork environment, where I can improve
              my programming skills, gain experience, learn different ways to
              solve problems through new challenges, deepen both front end
              development and gain skills in backend and design.
            </p>
          </Fade>
        </div>
        <img src={image} alt="" />
      </div>
    </section>
  );
};

export default Objective;
