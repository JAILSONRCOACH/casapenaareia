// src/pages/Offers.jsx
import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/style.css";

export default function Offers() {
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
          style={{ backgroundImage: "url('/images/offers-header.jpg')" }}
        >
          <h1>Ofertas</h1>
        </div>

        {/* Intro */}
        <section className="section offers-intro-section">
          <h2>Pacotes & Descontos Exclusivos</h2>
          <p className="offers-intro" data-aos="fade-up">
            Reserve direto conosco e aproveite condições especiais, benefícios e
            atendimento personalizado à beira-mar.
          </p>
          <div
            className="events-statement"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="statement-line"></div>
            <h3>Mais tempo na praia. Mais vantagem no seu bolso.</h3>
            <div className="statement-line"></div>
          </div>
        </section>

        {/* Destaques */}
        <section className="section featured-offers-section">
          <h2>Ofertas em Destaque</h2>

          <div className="activities-grid">
            {/* Card 1 */}
            <article className="activity-card" data-aos="fade-up">
              <div className="activity-image">
                <img
                  src="/images/offer-romance.jpg"
                  alt="Pacote Romance à Beira-Mar"
                />
              </div>
              <div className="activity-content">
                <h3>
                  <i className="fas fa-heart" /> Romance à Beira-Mar
                </h3>
                <p>
                  2 diárias para o casal + decoração especial + espumante de
                  boas-vindas.
                </p>
                <ul className="activity-features">
                  <li>Late check-out (mediante disponibilidade)</li>
                  <li>Café da manhã artesanal</li>
                </ul>
                <div className="offer-price">
                  <span className="price-label">a partir de</span>{" "}
                  <strong className="price">R$ 1.390</strong>{" "}
                  <span className="price-note">/casal</span>
                </div>
                <div className="offer-actions">
                  <button className="booking-button" onClick={reservar}>
                    Reservar
                  </button>
                  <Link to="/suites" className="outline-button">
                    Ver Suítes
                  </Link>
                </div>
              </div>
            </article>

            {/* Card 2 */}
            <article
              className="activity-card"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="activity-image">
                <img src="/images/offer-midweek.jpg" alt="Diárias de Semana" />
              </div>
              <div className="activity-content">
                <h3>
                  <i className="fas fa-sun" /> Dias de Semana (-10%)
                </h3>
                <p>
                  Desconto para hospedagens de domingo a quinta. Aproveite a
                  praia vazia.
                </p>
                <ul className="activity-features">
                  <li>Mínimo de 2 diárias</li>
                  <li>Check-in facilitado</li>
                </ul>
                <div className="offer-price">
                  <span className="price-label">desconto</span>{" "}
                  <strong className="price">-10%</strong>
                </div>
                <div className="offer-actions">
                  <button className="booking-button" onClick={reservar}>
                    Reservar
                  </button>
                  <Link to="/contact" className="outline-button">
                    Falar com a equipe
                  </Link>
                </div>
              </div>
            </article>

            {/* Card 3 */}
            <article
              className="activity-card"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="activity-image">
                <img src="/images/offer-longstay.jpg" alt="Long Stay 5=4" />
              </div>
              <div className="activity-content">
                <h3>
                  <i className="fas fa-umbrella-beach" /> Long Stay 5=4
                </h3>
                <p>
                  Fique 5 noites e pague 4. Mais tempo para curtir o Caminho de
                  Moisés.
                </p>
                <ul className="activity-features">
                  <li>Válido o ano inteiro (exceto feriados)</li>
                  <li>Pagamento facilitado</li>
                </ul>
                <div className="offer-price">
                  <span className="price-label">pague</span>{" "}
                  <strong className="price">4 diárias</strong>{" "}
                  <span className="price-note">e fique 5</span>
                </div>
                <div className="offer-actions">
                  <button className="booking-button" onClick={reservar}>
                    Reservar
                  </button>
                  <Link to="/gallery" className="outline-button">
                    Ver Galeria
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Temporadas */}
        <section className="section seasonal-offers-section">
          <h2>Ofertas de Temporada</h2>
          <div className="spaces-grid">
            <div className="space-card" data-aos="fade-up">
              <h3>
                <i className="fas fa-church" /> Feriados & Páscoa
              </h3>
              <p>
                Pacotes com mínimo de diárias e atividades especiais na praia.
              </p>
            </div>
            <div className="space-card" data-aos="fade-up" data-aos-delay="100">
              <h3>
                <i className="fas fa-gift" /> Réveillon & Verão
              </h3>
              <p>
                Alta temporada com condições diferenciadas para reservas
                antecipadas.
              </p>
            </div>
            <div className="space-card" data-aos="fade-up" data-aos-delay="200">
              <h3>
                <i className="fas fa-leaf" /> Baixa Temporada
              </h3>
              <p>
                Período mais tranquilo, melhor custo-benefício e clima
                agradável.
              </p>
            </div>
          </div>
          <p className="note" data-aos="fade-up">
            *Valores e disponibilidade podem variar conforme datas. Consulte
            nossa equipe.
          </p>
        </section>

        {/* Benefícios */}
        <section className="section benefits-section">
          <h2>Vantagens de Reservar Direto</h2>
          <div className="services-grid">
            <div className="service-item" data-aos="fade-up">
              <h3>
                <i className="fas fa-tag" /> Melhor Preço
              </h3>
              <p>Sem taxas de plataforma. Condições especiais de pagamento.</p>
            </div>
            <div
              className="service-item"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3>
                <i className="fas fa-clock" /> Flexibilidade
              </h3>
              <p>
                Alterações simples mediante disponibilidade e política vigente.
              </p>
            </div>
            <div
              className="service-item"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3>
                <i className="fas fa-headset" /> Suporte Direto
              </h3>
              <p>
                Atendimento personalizado antes, durante e após a hospedagem.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ curto */}
        <section className="section faq-section">
          <h2>Perguntas Frequentes</h2>
          <div className="faq-list" data-aos="fade-up">
            <details>
              <summary>Como funciona a política de cancelamento?</summary>
              <p>
                Segue as regras de cada temporada/pacote. Confirme na reserva
                com nossa equipe.
              </p>
            </details>
            <details>
              <summary>Animais de estimação são permitidos?</summary>
              <p>
                Consulte previamente. Podemos aceitar pets de pequeno porte em
                diárias específicas.
              </p>
            </details>
            <details>
              <summary>Check-in e check-out</summary>
              <p>
                Check-in às 14h e check-out às 12h (pode variar conforme a
                oferta).
              </p>
            </details>
          </div>
        </section>

        {/* CTA */}
        <section className="section cta-section" data-aos="fade-up">
          <div className="events-statement">
            <div className="statement-line"></div>
            <h3>Garanta sua data agora.</h3>
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
