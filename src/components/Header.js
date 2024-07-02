import React, { useState, useEffect, useRef } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavigation = (event, targetId) => {
    event.preventDefault();
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header>
      <nav ref={navRef}>
        <div class="logo">
          PRAN<span>JAL</span>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="#about" onClick={(e) => handleNavigation(e, "about")}>
              <span>👨🏻‍🎓</span>
              <span>About Me</span>
            </a>
          </li>
          <li>
            <a href="#skills" onClick={(e) => handleNavigation(e, "skills")}>
              <span>👨🏻‍💻</span>
              <span>Skills</span>
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => handleNavigation(e, "projects")}
            >
              <span>📋</span>
              <span>Projects</span>
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleNavigation(e, "contact")}>
              <span>☎️</span>
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
