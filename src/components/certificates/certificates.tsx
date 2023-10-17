import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import globant from "../../assets/certificates/globant.webp";
import bootcamp from "../../assets/certificates/bootcamp.webp";
import sena from "../../assets/certificates/titulo_sena.webp";
import { useTranslation } from "react-i18next";

const settings = {
  dots: true,
  infinite: true,
  speed: 1200,
  autoplay: true,
  autoplaySpeed: 1800,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Certificates = () => {
  const { t } = useTranslation("certificates");
  return (
    <div id="certificates" className="certificates-section">
      <h1 className="certificates-section__title">
        {t("title")}
        <span className="certificates-section__color">{t("title2")}</span>{" "}
      </h1>
      <Slider {...settings}>
        <div>
          <img src={sena} alt="sena" />
        </div>
        <div>
          <img src={globant} alt="globant" />
        </div>
        <div>
          <img src={bootcamp} alt="bootcamp" />
        </div>
      </Slider>
    </div>
  );
};

export default Certificates;
