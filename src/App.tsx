import { useStyle } from './StyleApp'
import { FullScreenCarousel } from './components/FullScreenCarousel'
import { NavBar } from './components/NavBar'

function App() {

  const classes = useStyle()
 const images = [
  'https://via.placeholder.com/800x400.png?text=Image+5',
  'https://via.placeholder.com/800x400.png?text=Image+5',
  'https://res.cloudinary.com/dehvd9oqm/image/upload/v1707561002/Totale%20Renov/WhatsApp_Image_2024-02-10_at_11.10.54_AM_ri12rw.jpg',
  'https://via.placeholder.com/800x400.png?text=Image+5',
  // Add more image URLs as needed
]

  return (
    <div className={classes.containerPage}>
<div className={classes.navbar}>

     <NavBar/>
</div>
<div className={classes.carousel}>

    <FullScreenCarousel images={images}/>
</div>
    </div>
  )
}

export default App
