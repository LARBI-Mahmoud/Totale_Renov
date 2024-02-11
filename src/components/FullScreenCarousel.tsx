import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import { useStyle } from "./FullScreenCaroussel.style";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useState } from "react";

interface FullScreenCarouselProps {
  images: string[];
}
export const FullScreenCarousel: React.FC<FullScreenCarouselProps> = ({
  images,
}) => {
  const classes = useStyle();
  console.log(<BiChevronLeft style={{ fontSize: "24px", color: "red" }} />);
  const [IndexImg, setIndexImg] = useState(0)
  const handleClick = (x:number) => { setIndexImg(IndexImg + x) }

  return (
    <div style={{ height: 830, width: "100%" }}>
      <div className="carousel-container">
        {/* <div className={classes.dark}></div> */}
        <Carousel
          id="carouselExampleControls"
          indicators={false}
          prevIcon={<div className="custom-prev" onClick={()=>handleClick(-1)}>
          <BiChevronLeft className={classes.leftRightIcons} />
        </div>}
          nextIcon={<BiChevronRight className={classes.leftRightIcons} onClick={()=>handleClick(1)}/>}
        >
          {images.map((image, index) => (
            <Carousel.Item key={index} className={index === 0 ? "active" : ""}>
              <img
                className={classes.image}
                src={image}
                alt={`Slide ${index + 1}`}
                style={{ height: "883" }}
              />
            </Carousel.Item>
          ))}
          
        </Carousel>
      </div>
    </div>
  );
};
