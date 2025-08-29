import { NavLink } from "react-router-dom";
import { appRoutes } from "@router/router";
import { useState } from "react";
import classes from "./headerNavbar.module.scss";

export default function HeaderNavbar() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  return (
    <header className={classes.header}>
      <nav
        className={`${classes.headerNavbar} ${
          isBurgerOpen ? classes.active : ""
        }`}
      >
        {appRoutes.map((route) => (
          <NavLink
            className={({ isActive }) =>
              `${classes.headerNavbarLink} ${isActive ? classes.active : ""}`
            }
            onClick={() => setIsBurgerOpen("")}
            key={route.path}
            to={route.path}
          >
            {route.title}
          </NavLink>
        ))}

        <button
          className={`${classes.btnBurger} ${
            isBurgerOpen ? classes.active : ""
          }`}
          onClick={() => setIsBurgerOpen((prev) => !prev)}
        >
          <span className={classes.btnBurgerLine}></span>
        </button>
      </nav>
    </header>
  );
}
