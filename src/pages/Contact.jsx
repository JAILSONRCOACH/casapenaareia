import React, { useEffect } from "react";
import "../assets/style.css";

export default function Contact() {
  useEffect(() => {
    const menuTrigger = document.getElementById("menu-trigger");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.getElementById("close-btn");

    menuTrigger.addEventListener("click", () => {
      sidebar.classList.add("active");
      document.body.style.overflow = "hidden";
    });

    closeBtn.addEventListener("click", () => {
      sidebar.classList.remove("active");
      document.body.style.overflow = "";
    });

    return () => {
      menuTrigger.removeEventListener("click", () => {});
      closeBtn.removeEventListener("click", () => {});
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
            <a href="/contact" className="active">
              Contato
            </a>
          </li>
        </ul>
      </nav>

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
              <form className="contact-form">
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
                  <select id="subject" name="subject" required>
                    <option value="" disabled selected>
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
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <div className="form-group privacy-policy">
                  <input type="checkbox" id="privacy" name="privacy" required />
                  <label htmlFor="privacy">
                    Concordo com a <a href="#">Política de Privacidade</a>
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
                      <i className="fas fa-map-marker-alt"></i>
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
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="contact-details">
                      <h4>Telefone</h4>
                      <p>+55 (11) 3456-7890</p>
                      <p>Segunda a Domingo, 8h às 22h</p>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-icon">
                      <i className="fab fa-whatsapp"></i>
                    </div>
                    <div className="contact-details">
                      <h4>WhatsApp</h4>
                      <p>+55 (11) 98765-4321</p>
                      <a href="#" className="whatsapp-link">
                        Iniciar conversa <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="contact-details">
                      <h4>E-mail</h4>
                      <p>contato@casapenaareia.com.br</p>
                      <p>reservas@casapenaareia.com.br</p>
                    </div>
                  </div>
                </div>

                <div className="social-media">
                  <h4>Siga-nos</h4>
                  <div className="social-icons">
                    <a href="#" className="social-icon">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="fab fa-pinterest-p"></i>
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
