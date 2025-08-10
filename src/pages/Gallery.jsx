import React, { useEffect } from "react";
import "../assets/style.css";

export default function Gallery() {
  // ---- Carrega CSS/JS externos (ordem garantida) ----
  useEffect(() => {
    const ensureCss = (id, href) => {
      if (!document.getElementById(id)) {
        const link = document.createElement("link");
        link.id = id;
        link.rel = "stylesheet";
        link.href = href;
        link.crossOrigin = "anonymous";
        document.head.appendChild(link);
      }
    };

    const ensureScript = (id, src) =>
      new Promise((resolve) => {
        const existing = document.getElementById(id);
        if (existing) return resolve();
        const s = document.createElement("script");
        s.id = id;
        s.src = src;
        s.async = false; // mantém ordem
        s.defer = true;
        s.onload = resolve;
        document.body.appendChild(s);
      });

    // CSS (uma vez só)
    ensureCss(
      "lightbox-css",
      "https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.4/css/lightbox.min.css"
    );
    ensureCss(
      "fa-css",
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
    );

    let alive = true;

    (async () => {
      // jQuery primeiro
      await ensureScript(
        "jquery-cdn",
        "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
      );
      if (!alive) return;
      // depois Lightbox
      await ensureScript(
        "lightbox-cdn",
        "https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.4/js/lightbox.min.js"
      );
      if (!alive) return;

      if (window.lightbox) {
        window.lightbox.option({
          resizeDuration: 200,
          wrapAround: true,
          fadeDuration: 300,
          albumLabel: "Imagem %1 de %2",
          alwaysShowNavOnTouchDevices: true,
          showImageNumberLabel: true,
        });
      }
    })();

    // NÃO remove os CDNs no unmount pra evitar race na navegação
    return () => {
      alive = false;
    };
  }, []);

  // ---- Menu lateral ----
  useEffect(() => {
    const menuTrigger = document.getElementById("menu-trigger");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.getElementById("close-btn");

    const openMenu = () => {
      if (!sidebar) return;
      sidebar.classList.add("active");
      document.body.style.overflow = "hidden";
    };

    const closeMenu = () => {
      if (!sidebar) return;
      sidebar.classList.remove("active");
      document.body.style.overflow = "";
    };

    if (menuTrigger) menuTrigger.addEventListener("click", openMenu);
    if (closeBtn) closeBtn.addEventListener("click", closeMenu);

    return () => {
      if (menuTrigger) menuTrigger.removeEventListener("click", openMenu);
      if (closeBtn) closeBtn.removeEventListener("click", closeMenu);
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
        <a
          href="https://wa.me/558330112982?text=Ol%C3%A1%21%20Quero%20reservar%20na%20Casa%20P%C3%A9%20na%20Areia%20%E2%80%93%20Caminho%20de%20Mois%C3%A9s."
          target="_blank"
          rel="noreferrer"
          className="booking-button"
        >
          RESERVAR AGORA
        </a>
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
          <button className="gallery-filter active">Todos</button>
          <button
            className="gallery-filter"
            onClick={() => (window.location.href = "/property")}
          >
            Propriedade
          </button>
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
                title: "Ruínas de Bom Sucesso",
                desc: "Ruínas de Bom Sucesso",
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
