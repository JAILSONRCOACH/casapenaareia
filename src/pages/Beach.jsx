import React, { useEffect } from "react";
import "../assets/style.css";

export default function Beach() {
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

  return (
    <>
      {/* Cabeçalho */}
      <header className="top-header header-light">
        <div className="menu-trigger" id="menu-trigger">
          <span className="menu-icon">
            <i className="fas fa-bars" />
          </span>
          <span className="menu-text">MENU</span>
        </div>
        <button className="booking-button">RESERVAR AGORA</button>
      </header>

      {/* Menu lateral */}
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

      {/* Conteúdo principal */}
      <main>
        <div
          className="page-header"
          style={{ backgroundImage: "url('/images/lucenapraia.jpg')" }}
        >
          <h1>Nossa Praia</h1>
        </div>

        {/* Filtro de categorias */}
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
          <button className="gallery-filter active">Praia</button>
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

        <section className="section beach-section">
          <h2>Caminho de Moisés</h2>
          <p className="section-intro">
            Conheça o fenômeno natural que dá nome à nossa casa: o Caminho de
            Moisés, uma faixa de areia que surge durante a maré baixa,
            permitindo que as pessoas caminhem pelo mar como se estivessem
            atravessando as águas a pé.
          </p>

          {/* Galeria */}
          <div className="gallery-grid">
            {[
              {
                src: "caminhodemoises01.png",
                title: "Caminho de Moisés",
                desc: "O fenômeno natural que dá nome à nossa casa",
              },
              {
                src: "praia.png",
                title: "Praia de Pontinha",
                desc: "Areias brancas e águas cristalinas",
              },
              {
                src: "bomsucesso.jpg",
                title: "Pôr do Sol em Lucena",
                desc: "Momentos mágicos ao entardecer",
              },
              {
                src: "coqueirosdelucena.png",
                title: "Coqueiral de Lucena",
                desc: "A beleza natural que emoldura nossa praia",
              },
              {
                src: "riomiriri.png",
                title: "Rio Miriri",
                desc: "Encontro das águas doces com o mar",
              },
              {
                src: "fotoigrejadaguia.jpg",
                title: "Atrações Costeiras",
                desc: "Explore a costa e descubra atrativos históricos",
              },
            ].map((img, i) => (
              <div className="gallery-item" key={i}>
                <a
                  href={`/images/${img.src}`}
                  data-lightbox="beach"
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

          {/* Informações */}
          <div className="beach-info">
            <h3>Sobre o Caminho de Moisés</h3>
            <div className="info-content">
              <div className="info-text">
                <p>
                  O Caminho de Moisés é um fenômeno natural raro que ocorre em
                  Lucena...
                </p>
                <p>
                  Este fenômeno acontece devido à formação de um banco de
                  areia...
                </p>
                <p>
                  A melhor época para observar é durante as marés baixas de
                  sizígia...
                </p>
              </div>
              <div className="tide-schedule">
                <h4>Horários das Marés</h4>
                <p>
                  Consulte diariamente os horários das marés para aproveitar ao
                  máximo o fenômeno do Caminho de Moisés.
                </p>
                <button
                  className="tide-button"
                  onClick={() =>
                    alert(
                      "Horários das marés para hoje:\n\nMaré baixa: 08:30 e 20:45\nMaré alta: 02:15 e 14:50\n\nMelhor horário: 08:30 às 10:30"
                    )
                  }
                >
                  <i className="fas fa-water" /> Ver Tábua de Marés
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer>
        <p>
          &copy; 2025 Casa Pé na Areia – Caminho de Moisés. Todos os direitos
          reservados.
        </p>
      </footer>
    </>
  );
}
