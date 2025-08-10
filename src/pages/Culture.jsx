import React, { useEffect } from "react";
import "../assets/style.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Culture() {
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

    AOS.init({ duration: 800, easing: "ease-out", once: true });

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
            <i className="fas fa-bars" />
          </span>
          <span className="menu-text">MENU</span>
        </div>
        <button className="booking-button">RESERVAR AGORA</button>
      </header>

      <nav className="sidebar" id="sidebar">
        <div className="close-btn" id="close-btn">
          <i className="fas fa-times" />
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
            <a href="/culture" className="active">
              Cultura
            </a>
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
          style={{ backgroundImage: "url('/images/cultura.jpg')" }}
        >
          <h1>Cultura & Tradição</h1>
        </div>

        <section className="section culture-section" data-aos="fade-up">
          <h2>Riqueza Cultural de Lucena</h2>
          <p>
            Lucena é um verdadeiro tesouro de tradições nordestinas, onde o som
            do forró, as festas populares e a culinária típica encantam
            visitantes de todo o país.
          </p>
          <p>
            Durante sua estadia, você terá a oportunidade de vivenciar
            manifestações culturais autênticas, como o Bumba Meu Boi, o Coco de
            Roda e o tradicional São João com quadrilhas e comidas típicas.
          </p>
        </section>

        <section className="section" data-aos="fade-up">
          <h2>Atividades Culturais Disponíveis</h2>
          <ul className="culture-list">
            <li>
              <i className="fas fa-music" /> Noites de Forró Pé-de-Serra
            </li>
            <li>
              <i className="fas fa-utensils" /> Oficina de Culinária Regional
            </li>
            <li>
              <i className="fas fa-palette" /> Feira de Artesanato Local
            </li>
            <li>
              <i className="fas fa-drum" /> Apresentações Folclóricas
            </li>
            <li>
              <i className="fas fa-book" /> Visita Guiada ao Centro Histórico
            </li>
          </ul>
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
