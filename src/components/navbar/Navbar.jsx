import { useState } from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="left">
        <NavLink to="/" className="logo">
          <img src="/assets/logo.png" alt="" />
          <span>Real Estate</span>
        </NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/agents">Agents</NavLink>
      </div>
      <div className="right">
        <NavLink to="/login">Sign in</NavLink>
        <NavLink to="/register" className="register">
          Sign up
        </NavLink>
        <div className="menuIcon">
          <img
            src="/assets/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/agents">Agents</NavLink>
          <NavLink to="/login">Sign in</NavLink>
          <NavLink to="/register">Sign up</NavLink>
        </div>
      </div>
    </nav>
  );
};
