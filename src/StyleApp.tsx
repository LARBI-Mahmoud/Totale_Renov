import { createUseStyles } from "react-jss";

export const useStyle = createUseStyles({
  containerPage: {
    position: "relative",
  },
  '@media (max-width: 1280px)': {
    navbar: {
        width: "100%",
        maxWidth:'1200px',
        position: "absolute",
        top: 0, // Adjust this value to position your navbar
        left: '60px',
        zIndex: 2, // Higher z-index for the navbar
        padding: "30px 0",
        BsGutterX: "1.5rem",
        BsGutterY: 0,
        paddingRight: "calc(var(--bs-gutter-x) * .5)",
        paddingLeft: "calc(var(--bs-gutter-x) * .5)",
        marginRight: "auto",
        marginLeft: "auto",
      },
      

},
navbar:{},
  carousel: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height:'883px',
    zIndex: 1, // Lower z-index for the carousel
  },
});
