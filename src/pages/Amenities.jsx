import React, { useEffect } from "react";
import "../assets/style.css";

export default function Amenities() {
  useEffect(() => {
    const menuTrigger = document.getElementById("menu-trigger");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.getElementById("close-btn");

    if (menuTrigger && sidebar && closeBtn) {
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

      document.addEventListener("click", function (event) {
        if (
          !sidebar.contains(event.target) &&
          !menuTrigger.contains(event.target) &&
          sidebar.classList.contains("active")
        ) {
          sidebar.classList.remove("active");
          document.body.style.overflow = "";
        }
      });

      return () => {
        menuTrigger.removeEventListener("click", openMenu);
        closeBtn.removeEventListener("click", closeMenu);
      };
    }
  }, []);

  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src =
      "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
    script1.async = true;

    const script2 = document.createElement("script");
    script2.src =
      "https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.4/js/lightbox.min.js";
    script2.async = true;

    script2.onload = () => {
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
    };

    document.body.appendChild(script1);
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
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
          <h1>Nossas Comodidades</h1>
        </div>

        <div className="gallery-categories section-container">
          <button
            className="gallery-filter"
            onClick={() => (window.location.href = "/gallery")}
          >
            Todos
          </button>
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
          <button className="gallery-filter active">Comodidades</button>
          <button
            className="gallery-filter"
            onClick={() => (window.location.href = "/experiences")}
          >
            Experiências
          </button>
        </div>

        <section className="section amenities-section">
          <h2>Conheça Nossas Instalações</h2>

          <div className="gallery-grid">
            {[
              {
                src: "fotoigrejadaguia.jpg",
                title: "Igreja Nossa Senhora da Guia",
                desc: "Construção do século VIII, próxima à pousada",
              },
              {
                src: "praia.png",
                title: "Piscina",
                desc: "Relaxe com uma vista espetacular",
              },
              {
                src: "riomiriri.png",
                title: "Restaurante",
                desc: "Gastronomia típica com ingredientes frescos",
              },
              {
                src: "coqueirosdelucena.png",
                title: "Redário",
                desc: "Momento de relaxamento entre os coqueiros",
              },
              {
                src: "bomsucesso.jpg",
                title: "Sala de Estar",
                desc: "Ambiente aconchegante com vista para o jardim",
              },
              {
                src: "caminhodemoises01.png",
                title: "Área Externa",
                desc: "Espaços ao ar livre para aproveitar a natureza",
              },
            ].map((img, i) => (
              <div className="gallery-item" key={i}>
                <a
                  href={`/images/${img.src}`}
                  data-lightbox="amenities"
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

          <p className="section-intro">
            Na Casa Pé na Areia, seu conforto é nossa prioridade. Por isso,
            oferecemos diversas comodidades para tornar sua estadia ainda mais
            agradável e inesquecível.
          </p>

          <div className="amenities-grid">
            <div className="amenity-category">
              <h3>
                <i className="fas fa-utensils"></i> Gastronomia
              </h3>
              <ul className="amenity-list">
                <li>Café da manhã regional completo</li>
                <li>Restaurante com culinária local e internacional</li>
                <li>Serviço de quarto 24 horas</li>
                <li>Bar na piscina</li>
                <li>Área para churrasco</li>
              </ul>
            </div>

            <div className="amenity-category">
              <h3>
                <i className="fas fa-wifi"></i> Conectividade
              </h3>
              <ul className="amenity-list">
                <li>Wi-Fi gratuito em todas as áreas</li>
                <li>Smart TVs nos quartos</li>
                <li>Estação de trabalho</li>
                <li>Tomadas USB</li>
              </ul>
            </div>

            <div className="amenity-category">
              <h3>
                <i className="fas fa-swimming-pool"></i> Lazer
              </h3>
              <ul className="amenity-list">
                <li>Piscina com vista para o mar</li>
                <li>Deck com espreguiçadeiras</li>
                <li>Redário com vista para o oceano</li>
                <li>Sala de jogos</li>
                <li>Biblioteca com literatura regional</li>
              </ul>
            </div>

            <div className="amenity-category">
              <h3>
                <i className="fas fa-concierge-bell"></i> Serviços
              </h3>
              <ul className="amenity-list">
                <li>Recepção 24 horas</li>
                <li>Concierge</li>
                <li>Serviço de lavanderia</li>
                <li>Estacionamento gratuito</li>
                <li>Transporte para atrações locais</li>
              </ul>
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
