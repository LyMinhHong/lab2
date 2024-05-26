import { Carousel } from "react-bootstrap";
import image1 from "../assets/Images/pizza1.jpg";
import image2 from "../assets/Images/pizza2.jpg";
import image3 from "../assets/Images/pizza3.jpg";
import image4 from "../assets/Images/pizza4.jpg";
import image5 from "../assets/Images/pizza5.jpg";

function CarouselComponent() {
  const captionStyle = {
    fontFamily: "Times New Roman",
  };

  return (
    <Carousel id="carouselExample">
      <Carousel.Item>
        <img className="d-block w-100" src={image1} alt="First slide" />
        <Carousel.Caption style={captionStyle}>
          <h3 style={captionStyle}>Neapolitan Pizza</h3>
          <p style={captionStyle}>
            if you are looking for a traditional Italian pizza, the Neapolitan
            is the best option
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image2} alt="Second slide" />
        <Carousel.Caption style={captionStyle}>
          <h3 style={captionStyle}>Neapolitan Pizza</h3>
          <p style={captionStyle}>
            if you are looking for a traditional Italian pizza, the Neapolitan
            is the best option
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image3} alt="Third slide" />
        <Carousel.Caption style={captionStyle}>
          <h3 style={captionStyle}>Neapolitan Pizza</h3>
          <p style={captionStyle}>
            if you are looking for a traditional Italian pizza, the Neapolitan
            is the best option
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image4} alt="Third slide" />
        <Carousel.Caption style={captionStyle}>
          <h3 style={captionStyle}>Neapolitan Pizza</h3>
          <p style={captionStyle}>
            if you are looking for a traditional Italian pizza, the Neapolitan
            is the best option
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image5} alt="Third slide" />
        <Carousel.Caption style={captionStyle}>
          <h3 style={captionStyle}>Neapolitan Pizza</h3>
          <p style={captionStyle}>
            if you are looking for a traditional Italian pizza, the Neapolitan
            is the best option
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
