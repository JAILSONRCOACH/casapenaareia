import React, { useEffect } from "react";
import "../assets/style.css";

export default function Property() {
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

  const imagens = [
    {
      src: "praia.png",
      title: "Vista Panorâmica",
      desc: "Nossa casa com vista privilegiada para o mar",
    },
    {
      src: "riomiriri.png",
      title: "Mirante do Rio Miriri",
      desc: "A beleza natural ao redor da propriedade",
    },
    {
      src: "coqueirosdelucena.png",
      title: "Coqueiral",
      desc: "Nossa propriedade cercada pelo coqueiral de Lucena",
    },
    {
      src: "bomsucesso.jpg",
      title: "Ruínas de Bom Sucesso",
      desc: "Ponto histórico próximo à nossa propriedade",
    },
    {
      src: "caminhodemoises01.png",
      title: "Caminho de Moisés",
      desc: "O fenômeno natural que inspirou o nome da propriedade",
    },
    {
      src: "fotoigrejadaguia.jpg",
      title: "Igreja Nossa Senhora da Guia",
      desc: "Atração histórica nas proximidades da nossa casa",
    },
  ];

  return (
    <>
      <header className="top-header header-light">
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

      <main>
        <div
          className="page-header"
          style={{ backgroundImage: "url('/images/saladeestar.jpg')" }}
        >
          <h1>Nossa Casa</h1>
        </div>

        <div className="gallery-categories section-container">
          <button
            className="gallery-filter"
            onClick={() => (window.location.href = "/gallery")}
          >
            Todos
          </button>
          <button className="gallery-filter active">Propriedade</button>
          <button
            className="gallery-filter"
            onClick={() => (window.location.href = "/beach")}
          >
            Praia
          </button>
          <button
            className="gallery-filter"
            onClick={() => (window.location.href = "/amenities")}
          >
            Comodidades
          </button>
          <button
            className="gallery-filter"
            onClick={() => (window.location.href = "/experiences")}
          >
            Experiências
          </button>
        </div>

        <section className="section property-section">
          <h2>Conheça Nossa Casa</h2>
          <p className="section-intro">
            A Casa Pé na Areia oferece uma estrutura exclusiva, pensada para
            proporcionar conforto e momentos inesquecíveis. Nossa propriedade
            está localizada em um dos principais pontos turísticos da região, o
            famoso Caminho de Moisés.
          </p>

          <div className="gallery-grid">
            {imagens.map((img, i) => (
              <div className="gallery-item" key={i}>
                <a
                  href={`/images/${img.src}`}
                  data-lightbox="property"
                  data-title={img.title}
                >
                  <img src={`/images/${img.src}`} alt={img.title} />
                  <div className="gallery-overlay">
                    <div className="gallery-info">
                      <h3>{img.title}</h3>
                      <p>{img.desc}</p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>

          <div className="property-features">
            <h3>Características da Nossa Propriedade</h3>
            <div className="features-grid">
              <div className="feature-item">
                <i className="fas fa-map-marker-alt"></i>
                <h4>Localização Privilegiada</h4>
                <p>
                  Situada na beira-mar, próxima ao fenômeno do Caminho de Moisés
                </p>
              </div>
              <div className="feature-item">
                <i className="fas fa-house-user"></i>
                <h4>Acomodações Exclusivas</h4>
                <p>
                  Suítes espaçosas com vista para o mar e decoração regional
                </p>
              </div>
              <div className="feature-item">
                <i className="fas fa-swimming-pool"></i>
                <h4>Área de Lazer</h4>
                <p>
                  Piscina, redário e espaço gourmet para momentos de
                  descontração
                </p>
              </div>
              <div className="feature-item">
                <i className="fas fa-shield-alt"></i>
                <h4>Segurança 24h</h4>
                <p>
                  Sistema de segurança e monitoramento para sua tranquilidade
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>
          &copy; 2025 Casa Pé na Areia – Caminho de Moisés. Todos os direitos
          reservados.
        </p>
      </footer>
    </>
  );
}
