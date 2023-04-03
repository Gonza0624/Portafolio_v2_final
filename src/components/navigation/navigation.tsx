import "../../scss/abstracts/_variables.scss";
import "@theme-toggles/react/css/Within.css";
import React, { useState, useRef, useEffect, useContext } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import { Link } from "react-scroll";
import { Within } from "@theme-toggles/react";
import { ThemeContext } from "../themeContext/themeContext";

export interface INavbar {}

const Navbar: React.FC<INavbar> = (): React.ReactElement => {
  // mostrar los link de la barra de navegacion y los iconos
  const [showLinks, setShowLinks] = useState<boolean>(false);
  const linksContainerRef = useRef<any>(null);
  const linksRef = useRef<any>(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;

    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  // navbar scroll
  const [navbarBackground, setNavbarBackground] = useState("transparent");
  const [navbarTransition, setNavbarTransition] = useState("none");
  const [navbarShadow, setNavbarShadow] = useState("none");

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 30) {
        setNavbarBackground("var(--navbar)");
        setNavbarShadow("var(--navShadow)");
        setNavbarTransition(
          "background-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out"
        );
      } else {
        setNavbarBackground("transparent");
        setNavbarShadow("none");
        setNavbarTransition(
          "background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out"
        );
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // estado global para cambiar el tema entre light y dark
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <nav
      className="navbar"
      style={{
        backgroundColor: navbarBackground,
        boxShadow: navbarShadow,
        transition: navbarTransition,
      }}
    >
      <div className="nav-center">
        <div className="nav-header">
          <h1 className="brand">Gonzalo</h1>
          <div>
            <Within
              className="theme-btn"
              onToggle={toggleTheme}
              duration={750}
            />
          </div>
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>

        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a className="links">
                    <Link
                      to={url}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={200}
                    >
                      {text}
                    </Link>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a target="_blank" href={url}>
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
