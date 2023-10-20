import image from "../../assets/home.svg";
import { ImArrowRight2 } from "react-icons/im";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t } = useTranslation("home");

  return (
    <section id="home" className="home-section">
      <div className="home-section__parallax">
        <div className="home-section__content">
          <div className="home-section__container-text">
            <Fade direction="left" delay={50} damping={1}>
              <p className="home-section__title">{t("name")}</p>
              <h1 className="home-section__title_2">
                <span className="home-section__title-color">{t("title")}</span>
              </h1>

              <p className="home-section__paragraph">{t("paragraph")}</p>
            </Fade>
            <Fade direction="left" delay={50} damping={9}>
              <div className="home-section__container-btn">
                <a
                  target="_blank"
                  type="button"
                  href="https://drive.google.com/file/d/1MU9Xo_X84KLigIDndwiEWS4Oydki1Ivv/view"
                  className="home-section__btn"
                >
                  {t("textBtn")}{" "}
                  <ImArrowRight2 className="home-section__icon-btn" />
                </a>
              </div>
            </Fade>
          </div>
          <Fade direction="left" delay={50} damping={0.1}>
            <figure className="home-section__container-img">
              <img src={image} alt="home-image" />
            </figure>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Home;
