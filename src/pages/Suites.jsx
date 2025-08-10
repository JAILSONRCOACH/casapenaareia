import React, { useEffect } from "react";
import "../assets/style.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

export default function Suites() {
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

    return () => {
      menuTrigger?.removeEventListener("click", openMenu);
      closeBtn?.removeEventListener("click", closeMenu);
    };
  }, []);

  const suites = [
    {
      title: "Suíte Luxo",
      price: "R$ 450",
      images: ["suite-luxo-1.jpg", "suite-luxo-2.jpg", "suite-luxo-3.jpg"],
      description:
        "Nossa Suíte Luxo oferece uma experiência exclusiva com vista privilegiada para o mar...",
      features: [
        ["fa-bed", "Cama King"],
        ["fa-mountain", "Vista para o Mar"],
        ["fa-wifi", "Wi-Fi Premium"],
        ["fa-snowflake", "Ar-condicionado"],
        ["fa-bath", "Banheira"],
        ["fa-coffee", "Máquina de Café"],
      ],
    },
    {
      title: "Suíte Família",
      price: "R$ 600",
      images: [
        "suite-familia-1.jpg",
        "suite-familia-2.jpg",
        "suite-familia-3.jpg",
      ],
      description:
        "Ideal para famílias, nossa Suíte Família oferece amplo espaço com dois quartos...",
      features: [
        ["fa-users", "Até 5 Pessoas"],
        ["fa-door-open", "2 Quartos"],
        ["fa-couch", "Sala de Estar"],
        ["fa-umbrella-beach", "Varanda"],
        ["fa-tv", "Smart TV"],
        ["fa-utensils", "Minibar"],
      ],
    },
    {
      title: "Suíte Premium",
      price: "R$ 850",
      images: [
        "suite-premium-1.jpg",
        "suite-premium-2.jpg",
        "suite-premium-3.jpg",
      ],
      description:
        "A mais exclusiva de nossas acomodações, a Suíte Premium oferece uma experiência incomparável...",
      features: [
        ["fa-infinity", "Vista 180°"],
        ["fa-swimming-pool", "Spa Privativo"],
        ["fa-concierge-bell", "Serviço de Mordomo"],
        ["fa-glass-cheers", "Bar Premium"],
        ["fa-sun", "Deck Privativo"],
        ["fa-star", "Experiências Exclusivas"],
      ],
    },
  ];

  const extras = [
    {
      icon: "fa-utensils",
      title: "Café da Manhã Exclusivo",
      desc: "Desfrute de um café da manhã gourmet servido em sua suíte ou à beira-mar.",
    },
    {
      icon: "fa-spa",
      title: "Massagem & Spa",
      desc: "Relaxe com tratamentos terapêuticos no conforto da sua suíte.",
    },
    {
      icon: "fa-car",
      title: "Serviço de Transfer",
      desc: "Transporte privativo do aeroporto com toda comodidade.",
    },
    {
      icon: "fa-glass-martini-alt",
      title: "Experiência Gastronômica",
      desc: "Jantares privativos com menu exclusivo do chef.",
    },
  ];

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
            <a href="/suites" className="active">
              Suítes
            </a>
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
          style={{ backgroundImage: "url('/images/suites-header.jpg')" }}
        >
          <h1>Nossas Suítes</h1>
        </div>

        <section className="section suites-section">
          <h2>Conforto e Elegância</h2>
          <p className="suites-intro">
            Nossas suítes foram projetadas para oferecer o máximo de conforto e
            sofisticação...
          </p>

          <div className="suites-container">
            {suites.map((suite, index) => (
              <div className="suite-card" key={index}>
                <div className="suite-slider">
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay, EffectFade]}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    effect="fade"
                    loop
                    className="suite-swiper"
                  >
                    {suite.images.map((img, idx) => (
                      <SwiperSlide key={idx}>
                        <img src={`/images/${img}`} alt={suite.title} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                <div className="suite-content">
                  <div className="suite-header">
                    <h3>{suite.title}</h3>
                    <div className="suite-price">
                      A partir de <span>{suite.price}</span> / noite
                    </div>
                  </div>
                  <p className="suite-description">{suite.description}</p>

                  <div className="suite-features">
                    {suite.features.map(([icon, label], i) => (
                      <div className="feature" key={i}>
                        <i className={`fas ${icon}`}></i>
                        <span>{label}</span>
                      </div>
                    ))}
                  </div>

                  <button className="suite-button">Ver Disponibilidade</button>
                </div>
              </div>
            ))}
          </div>

          <div className="extras-section">
            <h3>Serviços Adicionais</h3>
            <p>Personalize sua estadia com nossos serviços premium</p>

            <div className="extras-grid">
              {extras.map((item, idx) => (
                <div className="extra-item" key={idx}>
                  <i className={`fas ${item.icon}`}></i>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
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
