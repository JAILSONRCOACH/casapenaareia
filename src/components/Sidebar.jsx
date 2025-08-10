// src/components/Sidebar.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  useEffect(() => {
    const menuTrigger = document.getElementById("menu-trigger");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.getElementById("close-btn");

    const openMenu = () => {
      sidebar.classList.add("active");
      document.body.style.overflow = "hidden";
    };

    const closeMenu = () => {
      sidebar.classList.remove("active");
      document.body.style.overflow = "";
    };

    menuTrigger.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", closeMenu);

    return () => {
      menuTrigger.removeEventListener("click", openMenu);
      closeBtn.removeEventListener("click", closeMenu);
    };
  }, []);

  return (
    <>
      <header className="top-header header-transparent">
        <div className="menu-trigger" id="menu-trigger">
          <span className="menu-icon">
            <i className="fas fa-bars" />
          </span>
          <span className="menu-text">MENU</span>
        </div>
        <button className="booking-button">RESERVAR AGORA</button>
      </header>

      <nav className="sidebar" id="sidebar">
        <div className="close-btn" id="close-btn">
          <i className="fas fa-times" />
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/gallery">Galeria</Link>
          </li>
          <li>
            <Link to="/suites">Suítes</Link>
          </li>
          <li>
            <Link to="/offers">Ofertas</Link>
          </li>
          <li>
            <Link to="/recreation">Recreação</Link>
          </li>
          <li>
            <Link to="/culture">Cultura</Link>
          </li>
          <li>
            <Link to="/special-events">Eventos Especiais</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
