import image2 from "../../assets/about-img/code2.webp";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

const Objective = () => {
  const { t } = useTranslation("objective");
  return (
    <section id="objective" className="objective-section">
      <div className="objective-section__card">
        <div>
          <Fade triggerOnce direction="down" delay={200} damping={0.1}>
            <p className="objective-section__title">
              {t("title")}{" "}
              <span className="objective-section__title-color">
                {t("title2")}
              </span>{" "}
            </p>
          </Fade>
          <Fade triggerOnce direction="up" delay={200} damping={0.1}>
            <p className="objective-section__paragraph">{t("paragraph")}</p>
          </Fade>
        </div>
        <Fade
          className="objective-section__img"
          triggerOnce
          direction="right"
          delay={50}
          damping={0.1}
        >
          <img src={image2} alt="" />
        </Fade>
      </div>
    </section>
  );
};

export default Objective;
