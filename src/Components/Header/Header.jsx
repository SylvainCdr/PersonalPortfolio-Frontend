import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";

function Header() {
  const linkedin = "https://www.linkedin.com/in/sylvain-cadoret/";
  const github = "https://github.com/SylvainCdr";

// Creation fonction menu Burger
  let isBurgerOpen = false;
  function burgerToggle() {
    const nav = document.querySelector(".header__nav");
    console.log(nav);
  nav.classList.toggle('active');
  isBurgerOpen = !isBurgerOpen;
}
// Fin fonction menu Burger





  return (
    <>
      <div className="header">
    <nav className="header__nav">
        <ul onClick={burgerToggle}>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/competences">Compétences</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <span>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.icons8.com/?size=64&id=52539&format=png"
                alt="github"
              />
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                alt="linkedin"
              />
            </a>
          </span>
        </ul>
            <div className="header__burgerMenu" onClick={burgerToggle}>

            </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
