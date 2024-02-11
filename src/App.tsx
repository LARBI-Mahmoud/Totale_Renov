import { useStyle } from "./StyleApp";
import { FullScreenCarousel } from "./components/FullScreenCarousel";
import { NavBar } from "./components/NavBar";

function App() {


  const classes = useStyle()
 const images = [
  'https://res.cloudinary.com/dehvd9oqm/image/upload/v1707560702/Totale%20Renov/WhatsApp_Image_2024-02-10_at_11.06.07_AM_uet3qa.jpg',
  'https://res.cloudinary.com/dehvd9oqm/image/upload/v1707560876/Totale%20Renov/WhatsApp_Image_2024-02-10_at_11.08.35_AM_knzuu2.jpg',
  'https://res.cloudinary.com/dehvd9oqm/image/upload/v1707561002/Totale%20Renov/WhatsApp_Image_2024-02-10_at_11.10.54_AM_ri12rw.jpg',
  'https://res.cloudinary.com/dehvd9oqm/image/upload/v1707560835/Totale%20Renov/WhatsApp_Image_2024-02-10_at_11.07.19_AM_1_uj8jti.jpg',
  // Add more image URLs as needed
]

  return (
    <div>
      <div className={classes.containerPage}>
        <div className={classes.navbar}>
          <NavBar />
        </div>
        <div className={classes.carousel}>
          <FullScreenCarousel images={images} />
        </div>
      </div>
      <div className={classes.HT}>hhello</div>
    </div>
  );
}

export default App;
