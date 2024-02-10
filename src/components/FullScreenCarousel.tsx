import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';


interface FullScreenCarouselProps {
  images: string[];
}
export const FullScreenCarousel:React.FC<FullScreenCarouselProps>= ({images}) => {
  return (
    <div className="carousel-container">
    <Carousel id="carouselExampleControls">
      {images.map((image, index) => (
        <Carousel.Item key={index} className={index === 0 ? "active" : ""}>
          <img className="d-block w-100" src={image} alt={`Slide ${index + 1}`} style={{ height: '883' }}/>
        </Carousel.Item>
      ))}
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only"></span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only"></span>
      </a>
    </Carousel>
  </div>
  
  );
};
