import { useStyle } from "./Navbar.style";

export const NavBar = () => {
  const classes = useStyle();
  return (
    <div className={classes.containerNavBarElements}>
      <h1 className={classes.CompanyStyle}>Totale Renov</h1>

      <div className={classes.containerButton}>
        <button className={classes.buttonStyle}>
          <label
            htmlFor="navbarToggle"
            className={`${classes.collapse} ${classes.hideCollapse}`}
          >
            &#9776;
          </label>
          <nav className={classes.Barlist}>
            <ul
              style={{
                margin: 0,
                padding: 0,
                display: "flex",
                listStyle: "none",
                alignItems: "center",
              }}
            >
              <li className={classes.liElement}>
                <a
                  className={classes.aElement}
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                  }}
                  href="Home"
                >
                  HOME
                  <div className={classes.line}></div>
                </a>
              </li>
              <li className={classes.liElement}>
                <a
                  className={classes.aElement}
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                  }}
                  href="About"
                >
                  ABOUT
                  <div className={classes.line}></div>
                </a>
              </li>
              <li className={classes.liElement}>
                <a
                  className={classes.aElement}
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                  }}
                  href="Services"
                >
                  SERVICES
                  <div className={classes.line}></div>
                </a>
              </li>
              <li className={classes.liElement}>
                <a
                  className={classes.aElement}
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                  }}
                  href="Projects"
                >
                  PROJECTS
                  <div className={classes.line}></div>
                </a>
              </li>
              <li className={classes.liElement}>
                <a
                  className={classes.aElement}
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                  }}
                  href="Blog"
                >
                  BLOG
                  <div className={classes.line}></div>
                </a>
              </li>
              <li className={classes.liElement}>
                <a
                  className={classes.aElement}
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                  }}
                  href="Dropdown"
                >
                  DROPDOWN
                  <div className={classes.line}></div>
                </a>
              </li>
              <li className={classes.liElement}>
                <a
                  className={classes.aElement}
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                  }}
                  href="Contact"
                >
                  CONTACT
                  <div className={classes.line}></div>
                </a>
              </li>
            </ul>
          </nav>
        </button>
      </div>
    </div>
  );
};
