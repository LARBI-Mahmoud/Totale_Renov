import { forwardRef } from "react";
import { createUseStyles } from "react-jss";

export const useStyle = createUseStyles({
  containerPage: {
    position: "relative",
    height: 900,
  },
  HT: {
    fontStyle: "poppins",
    width: 50,
    transition: "0.3s",
  },

  navbar: {
    zIndex: 997,
    position: "absolute",
    padding: "30px 0",
    top: 0,
    left: 0,
    right: 0,
    display: "flex!important",
    alignItems: "center!important",
    boxSizing: "border-box",
  },
  carousel: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "900px",
    zIndex: 1, // Lower z-index for the carousel
  },

  "@media (max-width: 1200px)": {},
});
