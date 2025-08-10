// src/pages/Recreation.jsx
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/style.css";

export default function Recreation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out", once: true });
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const reservar = () => {
    window.open(
      "https://wa.me/5583999999999?text=Olá! Quero reservar na Casa Pé na Areia.",
      "_blank"
    );
  };

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
        <div
          className="page-header"
          style={{ backgroundImage: "url('/images/recreation-header.jpg')" }}
        >
          <h1>Recreação</h1>
        </div>

        {/* Intro */}
        <section className="section recreation-intro-section">
          <h2>Curta a Praia, a Natureza e o Caminho de Moisés</h2>
          <p className="recreation-intro" data-aos="fade-up">
            Programas ao ar livre, experiências na maré baixa e atividades para
            todas as idades. Planeje seu dia e aproveite cada momento.
          </p>

          <div
            className="events-statement"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="statement-line"></div>
            <h3>Sol, mar e experiências autênticas o ano inteiro.</h3>
            <div className="statement-line"></div>
          </div>
        </section>

        {/* Atividades principais */}
        <section className="section recreation-activities-section">
          <h2>Atividades Imperdíveis</h2>
          <div className="activities-grid">
            <article className="activity-card" data-aos="fade-up">
              <div className="activity-image">
                <img
                  src="/images/activity-caminho.jpg"
                  alt="Caminho de Moisés na maré baixa"
                />
              </div>
              <div className="activity-content">
                <h3>
                  <i className="fas fa-water" /> Caminho de Moisés
                </h3>
                <p>
                  Trilha natural que surge na maré baixa. Consulte os horários
                  das marés para planejar.
                </p>
                <ul className="activity-features">
                  <li>Visuais incríveis</li>
                  <li>Fotos cinematográficas</li>
                </ul>
              </div>
            </article>

            <article
              className="activity-card"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="activity-image">
                <img
                  src="/images/activity-praia.jpg"
                  alt="Praia tranquila para banho"
                />
              </div>
              <div className="activity-content">
                <h3>
                  <i className="fas fa-umbrella-beach" /> Praia & Banho
                </h3>
                <p>
                  Água morna, ondas suaves e espaço para relaxar com a família.
                </p>
                <ul className="activity-features">
                  <li>Guarda-sol e cadeiras</li>
                  <li>Pôr do sol inesquecível</li>
                </ul>
              </div>
            </article>

            <article
              className="activity-card"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="activity-image">
                <img
                  src="/images/activity-sup.jpg"
                  alt="Stand up paddle no mar"
                />
              </div>
              <div className="activity-content">
                <h3>
                  <i className="fas fa-person-swimming" /> Stand Up Paddle
                </h3>
                <p>
                  Águas calmas perfeitas para remar com segurança e curtir a
                  vista.
                </p>
                <ul className="activity-features">
                  <li>Locais rasos e seguros</li>
                  <li>Experiência relaxante</li>
                </ul>
              </div>
            </article>

            <article
              className="activity-card"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="activity-image">
                <img
                  src="/images/activity-buggy.jpg"
                  alt="Passeio de buggy pelas dunas"
                />
              </div>
              <div className="activity-content">
                <h3>
                  <i className="fas fa-car-side" /> Passeio de Buggy
                </h3>
                <p>
                  Adrenalina e paisagens únicas. Indicação de parceiros
                  credenciados.
                </p>
                <ul className="activity-features">
                  <li>Roteiros fotogênicos</li>
                  <li>Guia local</li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        {/* Bem-estar */}
        <section className="section wellness-section">
          <h2>Bem-estar & Relax</h2>
          <div className="spaces-grid">
            <div className="space-card" data-aos="fade-up">
              <h3>
                <i className="fas fa-spa" /> Yoga ao Amanhecer
              </h3>
              <p>
                Prática leve com vista para o mar. Energia certa para o dia.
              </p>
            </div>
            <div className="space-card" data-aos="fade-up" data-aos-delay="100">
              <h3>
                <i className="fas fa-mug-hot" /> Café na Varanda
              </h3>
              <p>Silêncio, brisa do mar e aquele começo de dia perfeito.</p>
            </div>
            <div className="space-card" data-aos="fade-up" data-aos-delay="200">
              <h3>
                <i className="fas fa-star" /> Observação de Estrelas
              </h3>
              <p>Céu limpo e pouca luz — noites memoráveis à beira-mar.</p>
            </div>
          </div>
        </section>

        {/* Famílias e kids */}
        <section className="section family-section">
          <h2>Famílias & Crianças</h2>
          <div className="services-grid">
            <div className="service-item" data-aos="fade-up">
              <h3>
                <i className="fas fa-puzzle-piece" /> Espaço Kids
              </h3>
              <p>
                Jogos, brinquedos e área para os pequenos se divertirem com
                segurança.
              </p>
            </div>
            <div
              className="service-item"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3>
                <i className="fas fa-chess-board" /> Jogos de Tabuleiro
              </h3>
              <p>Diversão clássica para todos: xadrez, damas, cartas e mais.</p>
            </div>
            <div
              className="service-item"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3>
                <i className="fas fa-book-open" /> Cantinho da Leitura
              </h3>
              <p>
                Seleção de livros e revistas para relaxar em qualquer hora do
                dia.
              </p>
            </div>
          </div>
        </section>

        {/* Dicas rápidas */}
        <section className="section tips-section">
          <h2>Dicas & Segurança</h2>
          <ul className="tips-list" data-aos="fade-up">
            <li>
              <i className="fas fa-clock" /> Caminho de Moisés: consulte a maré
              baixa.
            </li>
            <li>
              <i className="fas fa-sun" /> Use protetor solar, chapéu e
              hidrate-se.
            </li>
            <li>
              <i className="fas fa-shoe-prints" /> Calçado leve para trilhas e
              caminhada na areia.
            </li>
            <li>
              <i className="fas fa-life-ring" /> Atividades aquáticas sempre com
              atenção às condições do mar.
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section className="section cta-section" data-aos="fade-up">
          <div className="events-statement">
            <div className="statement-line"></div>
            <h3>Pronto para viver tudo isso?</h3>
            <div className="statement-line"></div>
          </div>
          <div className="cta-actions">
            <button className="booking-button" onClick={reservar}>
              Reservar pelo WhatsApp
            </button>
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
