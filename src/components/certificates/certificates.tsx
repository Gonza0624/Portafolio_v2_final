import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import certificado from "../../assets/certificates/certificado.png";
import bootcamp from "../../assets/certificates/bootcamp.png";
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
