import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import certificado from "../../assets/certificado.png";
import bootcamp from "../../assets/bootcamp.png";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Certificates = () => {
  return (
    <div className="certificates-section">
      <h1 className="certificates-section__title">
        My <span className="certificates-section__color">certificates</span>{" "}
      </h1>
      <Slider {...settings}>
        <div>
          <img src={certificado} alt="Imagen 1" />
        </div>
        <div>
          <img src={bootcamp} alt="Imagen 2" />
        </div>
      </Slider>
    </div>
  );
};

export default Certificates;
