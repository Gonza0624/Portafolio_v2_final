// import logo from "../../assets/logo3.png";
import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import { IoMoonOutline } from "react-icons/io5";

export interface INavbar {}

const Navbar: React.FC<INavbar> = (): React.ReactElement => {
  const [showLinks, setShowLinks] = useState<boolean>(false);
  const linksContainerRef = useRef<any>(null);
  const linksRef = useRef<any>(null);

  // navbar scroll
  const [navbarBackground, setNavbarBackground] = useState("transparent");
  const [navbarTransition, setNavbarTransition] = useState("none");
  const [navbarShadow, setNavbarShadow] = useState("none");

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 0) {
        setNavbarBackground("white");
        setNavbarShadow("0 5px 15px rgba(0, 0, 0, 0.1)");
        setNavbarTransition(
          "background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
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

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;

    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

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
          {/* <img src={logo} alt="logo" style={{width: "140px", height: "50px",}} /> */}
          <h1 className="brand">Gonzalo</h1>
          <IoMoonOutline fontSize={25} />
          <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
            <FaBars />
          </button>
        </div>

        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
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
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
