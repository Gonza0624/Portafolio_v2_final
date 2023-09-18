import image2 from "../../assets/about-img/code2.webp";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation("objective");
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
              {t("title")}{" "}
              <span className="objective-section__title-color">
                {t("title2")}
              </span>{" "}
            </p>
          </Reveal>
          <Reveal
            triggerOnce
            delay={50}
            damping={0.1}
            keyframes={customAnimation}
          >
            <p className="objective-section__paragraph">{t("paragraph")}</p>
          </Reveal>
        </div>
        <img src={image2} alt="" />
      </div>
    </section>
  );
};

export default Objective;
