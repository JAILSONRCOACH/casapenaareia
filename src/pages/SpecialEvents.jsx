import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/style.css";

export default function SpecialEvents() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out", once: true });
  }, []);

  return (
    <main>
      <div
        className="page-header"
        style={{ backgroundImage: "url('images/events-header.jpg')" }}
      >
        <h1>Eventos Especiais</h1>
      </div>

      <section className="section events-intro-section">
        <h2>Momentos Inesquecíveis à Beira-Mar</h2>
        <p className="events-intro">
          Celebre os momentos mais importantes da sua vida em um cenário
          paradisíaco. A Casa Pé na Areia oferece o ambiente perfeito para
          eventos exclusivos, onde o luxo encontra a beleza natural.
        </p>
        <div className="events-statement" data-aos="fade-up">
          <div className="statement-line"></div>
          <h3>Cada detalhe importa. Cada momento é único.</h3>
          <div className="statement-line"></div>
        </div>
      </section>

      <section className="section events-types-section">
        <div className="events-types">
          <div className="event-type" data-aos="fade-up">
            <div className="event-type-image">
              <img src="images/wedding-event.jpg" alt="Casamento à Beira-Mar" />
            </div>
            <div className="event-type-content">
              <h3>Casamentos</h3>
              <p>Diga "sim" com o pôr do sol como testemunha.</p>
              <ul className="event-features">
                <li>Cerimônias à beira-mar</li>
                <li>Recepções sob as estrelas</li>
              </ul>
            </div>
          </div>

          <div
            className="event-type reverse"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="event-type-image">
              <img src="images/birthday-event.jpg" alt="Aniversário" />
            </div>
            <div className="event-type-content">
              <h3>Aniversários e Celebrações</h3>
              <p>Comemore datas especiais em grande estilo.</p>
              <ul className="event-features">
                <li>Decoração personalizada</li>
                <li>Fotografia profissional</li>
              </ul>
            </div>
          </div>

          <div className="event-type" data-aos="fade-up" data-aos-delay="200">
            <div className="event-type-image">
              <img src="images/corporate-event.jpg" alt="Evento Corporativo" />
            </div>
            <div className="event-type-content">
              <h3>Eventos Corporativos</h3>
              <p>
                Transforme reuniões de trabalho em experiências inspiradoras.
              </p>
              <ul className="event-features">
                <li>Salas de reunião equipadas</li>
                <li>Serviço de coffee break</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        className="event-spaces-section"
        style={{ backgroundImage: "url('images/spaces-bg.jpg')" }}
      >
        <div className="spaces-overlay"></div>
        <div className="spaces-content" data-aos="fade-up">
          <h2>Nossos Espaços</h2>
          <div className="spaces-grid">
            <div className="space-card">
              <h3>Deck Panorâmico</h3>
              <p>Vista 180° para o mar, perfeito para recepções.</p>
            </div>
            <div className="space-card">
              <h3>Salão Cristal</h3>
              <p>Ambiente elegante com vista para o mar.</p>
            </div>
            <div className="space-card">
              <h3>Gazebo Praia</h3>
              <p>Ideal para cerimônias intimistas.</p>
            </div>
            <div className="space-card">
              <h3>Sala Executiva</h3>
              <p>Equipado com tecnologia audiovisual.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-section">
        <h2>Serviços & Fornecedores</h2>
        <div className="services-grid">
          <div className="service-item" data-aos="fade-up">
            <h3>Gastronomia</h3>
            <p>Menu personalizado por chef executivo.</p>
          </div>
          <div className="service-item" data-aos="fade-up" data-aos-delay="100">
            <h3>Bar Premium</h3>
            <p>Seleção de bebidas e coquetéis personalizados.</p>
          </div>
          <div className="service-item" data-aos="fade-up" data-aos-delay="200">
            <h3>Música & Entretenimento</h3>
            <p>DJs, bandas e artistas para criar a atmosfera perfeita.</p>
          </div>
        </div>
      </section>

      <footer>
        <p>
          &copy; 2025 Casa Pé na Areia – Caminho de Moisés. Todos os direitos
          reservados.
        </p>
      </footer>
    </main>
  );
}
