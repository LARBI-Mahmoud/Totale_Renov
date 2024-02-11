import { createUseStyles } from "react-jss";

export const useStyle = createUseStyles({
  image: {
    width: "100%",
    height: "900px",
  },
  dark: {
    position: "absolute",
    background: "rgba(0, 0, 0, 0.3)",
    width: "100%",
    height: "100%",
    zIndex: 2,
  },
  leftRightIcons: {
    fontSize: 26,
    lineHeight: 0,
    background: "rgba(255, 255, 255, 0.4)",
    color: "rgba(255, 255, 255, 0.9)",
    borderRadius: 50,
    width: 54,
    height: 54,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: 'center',
  },
});
