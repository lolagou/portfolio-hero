import React from "react";
import "./App.css";
import corazon from "./corazon.png"; // asegurate de que exista

// ====== Componente principal ======
export default function PortfolioHero() {
  const pills = ["Sobre mi", "Habilidades", "Educacion", "Contactarme"];

  return (
    <div className="ph-root">
      {/* NAVBAR CENTRADA */}
      <header className="ph-top">
        <nav className="ph-pillbar" aria-label="Secciones">
          {pills.map((label, i) => (
            <button
              key={label}
              className={`ph-pill ${i === pills.length - 1 ? "is-active" : ""}`}
              type="button"
            >
              {label}
            </button>
          ))}
        </nav>
        <div className="ph-burger" aria-hidden><span/><span/><span/></div>
      </header>

      {/* HERO */}
      <main className="ph-hero">
        <div className="ph-left">
          <h1 className="ph-title">Lola Emma Nuñez Gouget</h1>
          <p className="ph-sub">Estudiante bioingenieria</p>

          <div className="ph-right">
          <img className="ph-heart" src={corazon} alt="Corazón" />
        </div>

          {/* CARRUSEL DOBLE (dentro del hero) */}
          <div className="ph-carousel-in" aria-label="Cualidades">
            <div className="ph-track top"><Row/><Row/></div>
            <div className="ph-track bottom"><Row/><Row/></div>
          </div>
        </div>

      </main>

      {/* SECCIÓN FORTALEZAS (continúa al hacer scroll) */}
      <StrengthsSection />
    </div>
  );
}

// ====== Fila del carrusel (duplicada para loop perfecto) ======
function Row() {
  return (
    <div className="ph-row">
      <span>Autodidacta</span>
      <span>Responsable</span>
      <span>Proactiva</span>
      <span className="ph-dim">Trabajo en equipo</span>
      <span className="ph-dim">Apasionada</span>
      <span className="ph-dim">Comunicativa</span>
    </div>
  );
}

// ====== Sección Fortalezas (2×2) ======
function StrengthsSection() {
  const items = [
    {
      n: "01",
      h: "Pensamiento Analítico\n& Resolución de Problemas",
      p: "Me destaco por analizar sistemas complejos y encontrar soluciones funcionales.",
    },
    {
      n: "02",
      h: "Aprendizaje Autónomo",
      p: "Me motiva aprender de manera constante y explorar nuevos campos tecnológicos. Busco comprender a fondo los procesos biológicos.",
    },
    {
      n: "03",
      h: "Creatividad Técnica",
      p: "Me gusta imaginar nuevas formas de aplicar la tecnología en el área de la salud, desde simulaciones hasta prototipos funcionales.",
    },
    {
      n: "04",
      h: "Trabajo Colaborativo",
      p: "Disfruto trabajar en equipos interdisciplinarios con médicos, ingenieros y científicos.",
    },
  ];

  return (
    <section className="s-root">
      <div className="s-grid">
        {items.map((it) => (
          <article key={it.n} className="s-card">
            <div className="s-num">{it.n}</div>
            <h3 className="s-title">
              {it.h.split("\n").map((line, i) => (
                <span key={i} className="s-line">
                  {line}<br/>
                </span>
              ))}
            </h3>
            <p className="s-text">{it.p}</p>
            <div className="s-hr" aria-hidden />
          </article>
        ))}
      </div>
    </section>
  );
}
