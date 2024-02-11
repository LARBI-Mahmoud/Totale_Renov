import { createUseStyles } from "react-jss";

export const useStyle = createUseStyles({
  containerNavBarElements: {
    display: "flex!important",
    alignItems: "center!important",
    width: "100%",
    padding: "0px 10px 0px 10px",
    justifyContent: "space-between!important",
  },

  CompanyStyle: {
    fontSize: 24,
    fontWeight: 700,
    color: "#77776d",
    marginBottom: 0,
    fontFamily: "var(--font-primary)",
  },
  containerButton: {
    marginRight: 12,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "28.8px",
  },
  buttonStyle: {
    fontSize: "inherit",
    border: "none",
    padding: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    cursor: "pointer",
  },
  hideCollapse: {
    display: "none",
  },
  collapse: {
    position: "relative",
    color: "#77776d",
    fontSize: 28,
    cursor: "pointer",
    lineHeight: 0,
    transition: "0.5s",
    zIndex: 9999,
    paddingRight: 10,
  },
  Barlist: {
    padding: 0,

    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
  aElement: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 3px",
    fontFamily: "var(--font-primary)",
    fontSize: 14,
    fontWeight: 500,
    color: "#77776d",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    transition: "0.3s",
    position: "relative",
    '&:hover $line': {
      width: '95%', // Change width to 100% when hovered
    },
    "&::before": {
      content: '"',
      position: "absolute",
      width: "100%",
      height: 2,
      bottom: "-6px",
      left: 0,
      backgroundColor: "var(--color-primary)",
      visibility: "hidden",
      transition: "all 0.3s ease-in-out 0s",
    },
  },
  liElement: {
    whiteSpace: "nowrap",
    padding: "10px 0 10px 28px",
  },
  line: {
    position: 'absolute',
    width: '0', // Initial width is 0
    height: '3px',
    top:'100%',
    backgroundColor: 'red', // Change color if needed
    transition: 'width 0.5s', // Apply transition for smooth animation
    
  },
  "@media (max-width: 1280px)": {
    Barlist: {
      display: "none",
    },
    hideCollapse: {
      display: "flex",
    },
    collapse: {
      position: "relative",
      color: "#77776d",
      fontSize: 28,
      cursor: "pointer",
      lineHeight: 0,
      transition: "0.5s",
      zIndex: 9999,
      paddingRight: 10,
    },

    containerNavBarElements: {
      display: "flex!important",
      alignItems: "center!important",
      width: "100%",
      padding: "0px 10px 0px 10px",
      justifyContent: "space-between!important",
    },
  },
});
