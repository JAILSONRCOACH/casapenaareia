import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../assets/style.css";

export default function Contact() {
  const [open, setOpen] = useState(false);

  // trava/destrava scroll quando o menu abre
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    console.log("Contato:", payload);
    // TODO: enviar para API/n8n/Supabase
  };

  return (
    <>
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
        <a
          href="https://wa.me/558330112982?text=Ol%C3%A1%21%20Quero%20reservar%20na%20Casa%20P%C3%A9%20na%20Areia%20%E2%80%93%20Caminho%20de%20Mois%C3%A9s."
          target="_blank"
          rel="noreferrer"
          className="booking-button"
        >
          RESERVAR AGORA
        </a>
      </header>

      {/* sidebar */}
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

      <main>
        <div
          className="page-header"
          style={{ backgroundImage: "url('/images/contact-header.jpg')" }}
        >
          <h1>Entre em Contato</h1>
        </div>

        <section className="section contact-intro-section">
          <h2>Estamos à Sua Disposição</h2>
          <p className="contact-intro">
            Seja para fazer uma reserva, solicitar informações ou compartilhar
            suas impressões, estamos sempre prontos para atendê-lo com a atenção
            e cuidado que você merece.
          </p>
        </section>

        <section className="section contact-main-section">
          <div className="contact-container">
            <div className="contact-form-wrapper">
              <h3>Envie-nos uma Mensagem</h3>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nome Completo</label>
                  <input type="text" id="name" name="name" required />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Telefone</label>
                    <input type="tel" id="phone" name="phone" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Assunto</label>
                  <select id="subject" name="subject" required defaultValue="">
                    <option value="" disabled>
                      Selecione um assunto
                    </option>
                    <option value="reservations">Reservas</option>
                    <option value="information">Informações</option>
                    <option value="feedback">Feedback</option>
                    <option value="events">Eventos</option>
                    <option value="partnerships">Parcerias</option>
                    <option value="other">Outro</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mensagem</label>
                  <textarea id="message" name="message" rows="5" required />
                </div>

                <div className="form-group privacy-policy">
                  <input type="checkbox" id="privacy" name="privacy" required />
                  <label htmlFor="privacy">
                    Concordo com a{" "}
                    <Link to="/privacy">Política de Privacidade</Link>
                  </label>
                </div>

                <button type="submit" className="submit-button">
                  Enviar Mensagem
                </button>
              </form>
            </div>

            <div className="contact-info-wrapper">
              <div className="contact-info-card">
                <h3>Informações de Contato</h3>

                <div className="contact-info-items">
                  <div className="contact-info-item">
                    <div className="contact-icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="contact-details">
                      <h4>Endereço</h4>
                      <p>
                        Praia do Caminho de Moisés, s/n
                        <br />
                        CEP: 00000-000
                        <br />
                        Cidade - Estado
                      </p>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="contact-details">
                      <h4>Telefone</h4>
                      <p>
                        <a href="tel:+551134567890">+55 (11) 3456-7890</a>
                      </p>
                      <p>Segunda a Domingo, 8h às 22h</p>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-icon">
                      <i className="fab fa-whatsapp" />
                    </div>
                    <div className="contact-details">
                      <h4>WhatsApp</h4>
                      <p>
                        <a
                          href="https://wa.me/5511987654321"
                          target="_blank"
                          rel="noreferrer"
                        >
                          +55 (11) 98765-4321
                        </a>
                      </p>
                      <a
                        href="https://wa.me/5511987654321"
                        className="whatsapp-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Iniciar conversa <i className="fas fa-arrow-right" />
                      </a>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <div className="contact-details">
                      <h4>E-mail</h4>
                      <p>
                        <a href="mailto:contato@casapenaareia.com.br">
                          contato@casapenaareia.com.br
                        </a>
                      </p>
                      <p>
                        <a href="mailto:reservas@casapenaareia.com.br">
                          reservas@casapenaareia.com.br
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="social-media">
                  <h4>Siga-nos</h4>
                  <div className="social-icons">
                    <a href="#" className="social-icon" aria-label="Instagram">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#" className="social-icon" aria-label="Facebook">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#" className="social-icon" aria-label="Twitter">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#" className="social-icon" aria-label="Pinterest">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </div>
                </div>
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
