import React, { useEffect } from "react";
import "../assets/style.css";

export default function Gallery() {
  useEffect(() => {
    // Scripts externos
    const jqueryScript = document.createElement("script");
    jqueryScript.src =
      "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
    jqueryScript.async = true;

    const lightboxScript = document.createElement("script");
    lightboxScript.src =
      "https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.4/js/lightbox.min.js";
    lightboxScript.async = true;

    document.body.appendChild(jqueryScript);
    document.body.appendChild(lightboxScript);

    // Estilos
    const lightboxCSS = document.createElement("link");
    lightboxCSS.rel = "stylesheet";
    lightboxCSS.href =
      "https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.4/css/lightbox.min.css";
    document.head.appendChild(lightboxCSS);

    const fontAwesome = document.createElement("link");
    fontAwesome.rel = "stylesheet";
    fontAwesome.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css";
    document.head.appendChild(fontAwesome);

    return () => {
      document.body.removeChild(jqueryScript);
      document.body.removeChild(lightboxScript);
      document.head.removeChild(lightboxCSS);
      document.head.removeChild(fontAwesome);
    };
  }, []);

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

    menuTrigger?.addEventListener("click", openMenu);
    closeBtn?.addEventListener("click", closeMenu);

    return () => {
      menuTrigger?.removeEventListener("click", openMenu);
      closeBtn?.removeEventListener("click", closeMenu);
    };
  }, []);

  return (
    <>
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
            <a href="/about">Sobre</a>
          </li>
          <li>
            <a href="/gallery" className="active">
              Galeria
            </a>
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
          style={{ backgroundImage: "url('/images/riomiriri.png')" }}
        >
          <h1>Nossa Galeria</h1>
        </div>

        <div className="gallery-categories">
          <button className="gallery-filter active" data-filter="all">
            Todos
          </button>
          <button
            className="gallery-filter"
            data-filter="property"
            onClick={() => (window.location.href = "/property")}
          >
            Propriedade
          </button>
          <button
            className="gallery-filter"
            data-filter="beach"
            onClick={() => (window.location.href = "/beach")}
          >
            Praia
          </button>
          <button
            className="gallery-filter"
            data-filter="amenities"
            onClick={() => (window.location.href = "/amenities")}
          >
            Comodidades
          </button>
          <button
            className="gallery-filter"
            data-filter="experiences"
            onClick={() => (window.location.href = "/experiences")}
          >
            Experiências
          </button>
        </div>

        <section className="section gallery-section">
          <h2>Momentos Inesquecíveis</h2>
          <p className="gallery-intro">
            Conheça um pouco mais da nossa estrutura exclusiva e das belezas
            naturais que rodeiam a Casa Pé na Areia. Cada imagem captura a
            essência do nosso paraíso à beira-mar.
          </p>

          <div className="gallery-grid">
            {[
              {
                src: "caminhodemoises01.png",
                title: "Caminho de Moisés",
                desc: "O fenômeno natural que dá nome à nossa casa",
                category: "beach",
              },
              {
                src: "praia.png",
                title: "Praia de Pontinha",
                desc: "Um olhar privilegiado para o oceano",
                category: "property",
              },
              {
                src: "fotoigrejadaguia.jpg",
                title: "Igreja Nossa Senhora da Guia",
                desc: "Construção do século VIII",
                category: "amenities",
              },
              {
                src: "coqueirosdelucena.png",
                title: "Coqueiral de Lucena",
                desc: "Momentos mágicos ao final do dia",
                category: "experiences",
              },
              {
                src: "riomiriri.png",
                title: "Rio Miriri",
                desc: "Mirante do rio Miriri",
                category: "property",
              },
              {
                src: "bomsucesso.jpg",
                title: "Ruinas de Bom Sucesso",
                desc: "Ruinas de bom sucesso",
                category: "beach",
              },
            ].map((img, idx) => (
              <div
                className="gallery-item"
                data-category={img.category}
                key={idx}
              >
                <a
                  href={`/images/${img.src}`}
                  data-lightbox="gallery"
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

          <div className="category-navigation">
            <h3>Explore por Categoria</h3>
            <div className="category-buttons">
              <a href="/property" className="category-button">
                <i className="fas fa-home"></i>
                <span>Propriedade</span>
              </a>
              <a href="/beach" className="category-button">
                <i className="fas fa-water"></i>
                <span>Praia</span>
              </a>
              <a href="/amenities" className="category-button">
                <i className="fas fa-concierge-bell"></i>
                <span>Comodidades</span>
              </a>
              <a href="/experiences" className="category-button">
                <i className="fas fa-compass"></i>
                <span>Experiências</span>
              </a>
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
