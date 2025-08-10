import React, { useEffect } from "react";
import "../assets/style.css";

export default function About() {
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
      {/* Cabeçalho + Menu Lateral */}
      <header className="top-header header-light">
        <div className="menu-trigger" id="menu-trigger">
          <span className="menu-icon">
            <i className="fas fa-bars"></i>
          </span>
          <span className="menu-text">MENU</span>
        </div>
        <button className="booking-button">RESERVAR AGORA</button>
      </header>

      <nav className="sidebar" id="sidebar">
        <div className="close-btn" id="close-btn">
          <i className="fas fa-times"></i>
        </div>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about" className="active">
              Sobre
            </a>
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
        <div
          className="page-header"
          style={{ backgroundImage: "url('/images/fachada02.jpg')" }}
        >
          <h1>Nossa História</h1>
        </div>

        <section className="section about-section">
          <h2>Sobre Nossa Casa à Beira-Mar</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                A Casa Pé na Areia – Caminho de Moisés nasceu do sonho de
                oferecer uma experiência verdadeiramente exclusiva, onde o luxo
                se encontra com a natureza em sua forma mais pura. Nossa
                propriedade foi cuidadosamente planejada para proporcionar aos
                nossos hóspedes momentos inesquecíveis em um cenário
                paradisíaco.
              </p>
              <p>
                Nossa localização privilegiada proporciona vistas deslumbrantes
                do oceano e acesso direto ao famoso "Caminho de Moisés",
                fenômeno natural único onde, durante a maré baixa, forma-se um
                caminho no meio do mar que permite caminhar entre as águas.
              </p>
              <p>
                Cada detalhe da Casa Pé na Areia foi pensado para unir conforto,
                sofisticação e a experiência autêntica de estar em contato
                direto com o mar. Nossa arquitetura foi inspirada nos elementos
                naturais da região, criando uma conexão harmoniosa entre o
                ambiente construído e a paisagem natural que nos cerca.
              </p>
            </div>
            <div className="about-image">
              <img
                src="/images/piscina.jpg"
                alt="Vista da Casa Pé na Areia"
                className="img-feature"
              />
            </div>
          </div>

          <div className="philosophy-section">
            <h3>Nossa Filosofia</h3>
            <p>
              Acreditamos que o verdadeiro luxo está nos momentos inesquecíveis
              e nas experiências autênticas. Por isso, nossa equipe está
              dedicada a criar um ambiente onde nossos hóspedes possam se
              conectar com a natureza, relaxar e criar memórias que durarão para
              sempre.
            </p>
          </div>

          <div className="sustainability-section">
            <h3>Compromisso com a Sustentabilidade</h3>
            <p>
              A Casa Pé na Areia tem um compromisso profundo com a preservação
              do meio ambiente e as práticas sustentáveis. Utilizamos energia
              solar, sistemas de reuso de água e apoiamos iniciativas locais de
              conservação marinha.
            </p>
          </div>
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
