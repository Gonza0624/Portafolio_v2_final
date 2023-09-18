import image from "../../assets/about-img/code.webp";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation("about");
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
              {t("title")}{" "}
              <span className="about-section__title-color">{t("title2")}</span>{" "}
            </p>
          </Reveal>
          <Reveal
            triggerOnce
            delay={50}
            damping={0.1}
            keyframes={customAnimation}
          >
            <p className="about-section__paragraph">{t("paragraph")}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
