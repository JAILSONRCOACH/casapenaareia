import React, { useEffect } from "react";
import "../assets/style.css";

export default function Home() {
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

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const hero = document.querySelector(".hero");
      if (hero) {
        hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      menuTrigger.removeEventListener("click", openMenu);
      closeBtn.removeEventListener("click", closeMenu);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Cabeçalho com botão e menu */}
      <header className="top-header header-transparent">
        <div className="menu-trigger" id="menu-trigger">
          <span className="menu-icon">
            <i className="fas fa-bars" />
          </span>
          <span className="menu-text">MENU</span>
        </div>
        <button className="booking-button">RESERVAR AGORA</button>
      </header>

      {/* Menu lateral */}
      <nav className="sidebar" id="sidebar">
        <div className="close-btn" id="close-btn">
          <i className="fas fa-times" />
        </div>
        <ul className="nav-links">
          <li>
            <a href="/" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="/about">Sobre</a>
          </li>
          <li>
            <a href="/gallery">Galeria</a>
          </li>
          <li>
            <a href="/suites">Suítes</a>
          </li>
          <li>
            <a href="/offers">Ofertas</a>
          </li>
          <li>
            <a href="/recreation">Recreação</a>
          </li>
          <li>
            <a href="/culture">Cultura</a>
          </li>
          <li>
            <a href="/special-events">Eventos Especiais</a>
          </li>
          <li>
            <a href="/contact">Contato</a>
          </li>
        </ul>
      </nav>

      {/* Conteúdo principal */}
      <main>
        <section
          className="hero"
          style={{ backgroundImage: "url('/images/caminhodemoises01.png')" }}
        >
          <div className="hero-content">
            <h1>
              <div style={{ display: "flex", gap: "20px", fontSize: "24px" }}>
                <span className="primary-text">C A S A</span>
                <span className="primary-text">P É</span>
                <span className="primary-text">N A</span>
                <span className="primary-text">A R E I A</span>
              </div>
            </h1>
            <p>CAMINHO DE MOISÉS</p>
          </div>
        </section>

        <section className="section">
          <h2>Experiência Exclusiva</h2>
          <p>
            Desfrute de uma experiência única, inspirada na tranquilidade do mar
            e na hospitalidade premium. A Casa Pé na Areia – Caminho de Moisés
            oferece o equilíbrio perfeito entre luxo, conforto e a beleza
            natural deslumbrante da região.
          </p>
          <p>
            Nossa propriedade à beira-mar proporciona acesso exclusivo às águas
            cristalinas e à paisagem deslumbrante do famoso Caminho de Moisés,
            um fenômeno natural único que permite caminhar entre as águas
            durante a maré baixa.
          </p>
        </section>
      </main>

      {/* Rodapé */}
      <footer>
        <p>
          &copy; 2025 Casa Pé na Areia – Caminho de Moisés. Todos os direitos
          reservados.
        </p>
      </footer>
    </>
  );
}
