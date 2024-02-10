import { useStyle } from "./style";

export const NavBar = () => {
  const classes = useStyle();
  return (
    <div className={classes.containerNavBarElements}>
      <h1 className={classes.CompanyStyle}>Totale Renov</h1>

      <div className={classes.containerButton}>
        <button className={classes.buttonStyle}>
          <label htmlFor="navbarToggle" className={classes.collapse}>
            &#9776;
          </label>
        </button>
      </div>
    </div>
  );
};
