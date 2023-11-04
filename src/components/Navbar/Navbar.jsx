import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <section className="navbar-left">
        <h1 className="app-heading-navbar">
          <i className="fa-solid fa-heart-pulse"></i> <span>Fit</span>Tracker
        </h1>
      </section>
      <section className="navbar-right">
        <NavLink activeclassname="active" className="link nav-items" to="/">
          Dashboard
        </NavLink>
        <NavLink
          activeclassname="active"
          className="link nav-items"
          to="/exercises"
        >
          Exercises
        </NavLink>
        <NavLink activeclassname="active" className="link nav-items" to="/food">
          Food
        </NavLink>
        <NavLink
          activeclassname="active"
          className="link nav-items"
          to="/goals"
        >
          Goals
        </NavLink>
      </section>
    </nav>
  );
};
