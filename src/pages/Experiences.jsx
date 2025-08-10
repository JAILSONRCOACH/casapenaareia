// src/pages/Experiences.jsx
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/style.css";

export default function Experiences() {
  const [open, setOpen] = useState(false);
  const [hero, setHero] = useState("/images/experiences-header.jpg");
  const navigate = useNavigate();

  // AOS
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out", once: true });
  }, []);

  // trava/destrava scroll quando o menu abre
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Lightbox2 (ordem garantida) + CSS
  useEffect(() => {
    const ensureCss = () => {
      const id = "lightbox-css";
      if (!document.getElementById(id)) {
        const link = document.createElement("link");
        link.id = id;
        link.rel = "stylesheet";
        link.href =
          "https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.4/css/lightbox.min.css";
        document.head.appendChild(link);
      }
    };
    const load = (src) =>
      new Promise((ok, err) => {
        const s = document.createElement("script");
        s.src = src;
        s.async = false; // mantém ordem
        s.onload = ok;
        s.onerror = err;
        document.body.appendChild(s);
      });

    let mounted = true;
    (async () => {
      ensureCss();
      await load(
        "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
      );
      await load(
        "https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.4/js/lightbox.min.js"
      );
      if (mounted && window.lightbox) {
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

    return () => {
      mounted = false;
    };
  }, []);

  // Hero com fallback (mantém a capa se existir; senão usa uma que já funciona)
  useEffect(() => {
    const img = new Image();
    img.src = "/images/experiences-header.jpg";
    img.onload = () => setHero("/images/experiences-header.jpg");
    img.onerror = () => setHero("/images/saladeestar.jpg");
  }, []);

  const reservar = () => {
    window.open(
      "https://wa.me/5583999999999?text=Olá! Quero reservar na Casa Pé na Areia.",
      "_blank"
    );
  };

  // MESMAS IMAGENS DA PÁGINA ANTERIOR
  const imgs = [
    {
      src: "fotoigrejadaguia.jpg",
      title: "Igreja Nossa Senhora da Guia",
      desc: "Construção do século VIII, próxima à pousada.",
    },
    {
      src: "praia.png",
      title: "Piscina",
      desc: "Relaxe com uma vista espetacular.",
    },
    {
      src: "riomiriri.png",
      title: "Restaurante",
      desc: "Gastronomia típica com ingredientes frescos.",
    },
    {
      src: "coqueirosdelucena.png",
      title: "Redário",
      desc: "Momento de relaxamento entre os coqueiros.",
    },
    {
      src: "bomsucesso.jpg",
      title: "Sala de Estar",
      desc: "Ambiente aconchegante com vista para o jardim.",
    },
    {
      src: "caminhodemoises01.png",
      title: "Área Externa",
      desc: "Espaços ao ar livre para aproveitar a natureza.",
    },
  ];

  return (
    <>
      {/* Header + Menu */}
      <header className="top-header header-light">
        <button
          type="button"
          className="menu-trigger"
          aria-controls="sidebar"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <span className="menu-icon">
            <i className="fas fa-bars" />
          </span>
          <span className="menu-text">MENU</span>
        </button>
        <button className="booking-button" onClick={reservar}>
          RESERVAR AGORA
        </button>
      </header>

      <aside
        id="sidebar"
        className={`sidebar ${open ? "active" : ""}`}
        aria-hidden={!open}
      >
        <button
          type="button"
          className="close-btn"
          aria-label="Fechar menu"
          onClick={() => setOpen(false)}
        >
          <i className="fas fa-times" />
        </button>

        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Sobre
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Galeria
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/suites"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Suítes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/offers"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Ofertas
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/recreation"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Recreação
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/culture"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Cultura
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/special-events"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Eventos Especiais
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Contato
            </NavLink>
          </li>
        </ul>
      </aside>

      {/* Página */}
      <main>
        {/* FOTO PRINCIPAL (com fallback) */}
        <div
          className="page-header"
          style={{ backgroundImage: `url('${hero}')` }}
        >
          <h1>Experiências</h1>
        </div>

        {/* Categorias (igual Amenities) */}
        <div className="gallery-categories section-container">
          <button
            className="gallery-filter"
            onClick={() => navigate("/gallery")}
          >
            Todos
          </button>
          <button
            className="gallery-filter"
            onClick={() => navigate("/property")}
          >
            Propriedade
          </button>
          <button className="gallery-filter" onClick={() => navigate("/beach")}>
            Praia
          </button>
          <button
            className="gallery-filter"
            onClick={() => navigate("/amenities")}
          >
            Comodidades
          </button>
          <button className="gallery-filter active">Experiências</button>
        </div>

        {/* Intro */}
        <section className="section experiences-intro-section">
          <h2>Viva cada momento</h2>
          <p className="events-intro" data-aos="fade-up">
            Mantivemos as mesmas imagens base para troca futura, sem perder o
            layout.
          </p>
          <div
            className="events-statement"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="statement-line"></div>
            <h3>Sol, mar e descanso — do seu jeito.</h3>
            <div className="statement-line"></div>
          </div>
        </section>

        {/* Grid com as MESMAS imagens */}
        <section className="section experiences-grid-section">
          <h2>Em Destaque</h2>

          <div className="gallery-grid">
            {imgs.map((img, i) => (
              <div
                className="gallery-item"
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 50}
              >
                <a
                  href={`/images/${img.src}`}
                  data-lightbox="experiences"
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
