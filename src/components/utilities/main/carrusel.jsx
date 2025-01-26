import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Carrusel = (images) => {
  return (
    <div className="carrusel">
        <Carousel>
            {images.images[1].map((image, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100"
                        src={image.src}
                        alt={image.alt || `Slide ${index + 1}`}
                    />
                    {image.caption && (
                        <Carousel.Caption>
                        <h3>{image.caption}</h3>
                        <p>{image.description}</p>
                        </Carousel.Caption>
                    )}
                </Carousel.Item>
            ))}
        </Carousel>
    </div>
  );
};

  

export default Carrusel;
