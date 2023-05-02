import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import globant from "../../assets/certificates/globant.webp";
import bootcamp from "../../assets/certificates/bootcamp.webp";
import sena from "../../assets/certificates/titulo_sena.webp";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Certificates = () => {
  return (
    <div id="certificates" className="certificates-section">
      <h1 className="certificates-section__title">
        Certi<span className="certificates-section__color">ficates</span>{" "}
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
