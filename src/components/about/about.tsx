import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("about");
  return (
    <section id="about" className="about-section">
      <div className="about-section__card">
        <div>
          <Fade triggerOnce direction="down" delay={200} damping={0.1}>
            <p className="about-section__title">
              {t("title")}{" "}
              <span className="about-section__title-color">{t("title2")}</span>{" "}
            </p>
          </Fade>
          <Fade triggerOnce direction="up" delay={50} damping={0.1}>
            <p className="about-section__paragraph">{t("paragraph")}</p>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default About;
