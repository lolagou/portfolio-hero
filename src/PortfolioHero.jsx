import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import "./App.css";
import corazon from "./corazon.png";
import me from "./me.png";
import proyecto from "./proyecto.png";


  export default function PortfolioHero() {
    const pillConfig = [
      { label: "Sobre mi", targetId: "sobre-mi" },
      { label: "Habilidades", targetId: "habilidades" },
      { label: "Educacion", targetId: "formacion" },
      { label: "Contactarme", targetId: "contacto" },
    ];
    const [menuOpen, setMenuOpen] = useState(false);
    const [activePill, setActivePill] = useState(0); 
  
    const handlePillClick = (index, targetId) => {
      setActivePill(index);
  
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
  
    return (
      <div className="ph-root">
        {/* NAVBAR CENTRADA */}
        <header className="ph-top">
          <nav className="ph-pillbar" aria-label="Secciones">
            {pillConfig.map((pill, i) => (
              <button
                key={pill.label}
                type="button"
                className={`ph-pill ${i === activePill ? "is-active" : ""}`}
                onClick={() => handlePillClick(i, pill.targetId)}
              >
                {pill.label}
              </button>
            ))}
          </nav>
        </header>

      {/* HERO */}
      <main className="ph-hero">
        <div className="ph-left">
          <h1 className="ph-title">Lola Emma Nuñez Gouget</h1>
          <p className="ph-sub">Estudiante bioingeniería</p>


          <img className="ph-heart" src={corazon} alt="Corazón" />


          {/* CARRUSEL DOBLE */}
          <div className="ph-carousel" aria-label="Cualidades">
            <div className="ph-track top">
              <Row />
              <Row />
            </div>
            <div className="ph-track bottom">
              <Row />
              <Row />
            </div>
          </div>
        </div>
      </main>

      {/* SECCIONES */}
      <AboutMeSection />
      <StrengthsSection />
      <FormationSection />
      <FeaturedProjectsSection />
      <FooterSection />

      {/* 👇 MENÚ DESPLEGABLE */}

    </div>
  );
}


// ====== Fila del carrusel ======
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

// ====== Sección ¿Quién soy? ======
function AboutMeSection() {
  return (
    <section className="about-root" id="sobre-mi">
      <div className="about-card">
      <img className="about-photo" src={me} alt="Lola Emma Nuñez Gouget" />

        <div className="about-copy">
          <h2 className="about-title">¿Quién soy?</h2>
          <p className="about-text">
            Soy estudiante de Bioingeniería, apasionada por la intersección entre la
            tecnología y la medicina. Me motiva desarrollar soluciones innovadoras que
            mejoren la calidad de vida de las personas y promuevan un futuro más
            sostenible. Tengo conocimientos en programación, análisis de imágenes
            médicas mediante IA y actualmente me estoy adentrando en el diseño e
            impresión de órganos artificiales.
          </p>

          <div className="about-contacts">
            <a className="contact-item" href="mailto:lolaemma2007@gmail.com">
              <span className="contact-text">lolaemma2007@gmail.com</span>
              <span className="contact-ico">✉️</span>
            </a>

            <a
              className="contact-item"
              href="https://www.linkedin.com/in/lolanun"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-text">@lolanun</span>
              <span className="contact-ico">in</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ====== Fortalezas ======
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
    <section className="s-root" id="habilidades">
      <div className="s-grid">
        {items.map((it) => (
          <article key={it.n} className="s-card">
            <div className="s-num">{it.n}</div>
            <h3 className="s-title">
              {it.h.split("\n").map((line, i) => (
                <span key={i} className="s-line">
                  {line}
                  <br />
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

// ====== Formación ======
function FormationSection() {
  const items = [
    {
      h: "St Patricks",
      p: "Comencé mis estudios en el colegio St. Patrick’s, donde cursé desde 2014 hasta 2019. Durante esos años desarrollé una base sólida en distintas áreas y logré alcanzar un alto nivel de inglés, tanto oral como escrito.",
    },
    {
      h: "Instituto Tecnológico ORT",
      p: "Entre 2020 y 2025 continué mi formación en nivel secundario, eligiendo la orientación en Tecnologías de la Información y la Comunicación. Aprendí a programar, trabajar en equipo y transformar mis ideas en proyectos reales.",
    },
    {
      h: "ITBA",
      p: "Actualmente curso el primer año de Bioingeniería en el ITBA, con enfoque en tecnología biomédica, donde busco integrar la ingeniería, la biología y la inteligencia artificial para mejorar la salud y la calidad de vida de las personas.",
    },
  ];

  const [active, setActive] = useState(0);
  const railRef = useRef(null);
  const dotRef = useRef(null);
  const cardRefs = useRef([]);

  const repositionDot = useCallback(() => {
    const rail = railRef.current;
    const dot = dotRef.current;
    const card = cardRefs.current[active];
    if (!rail || !dot || !card) return;

    const railRect = rail.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();

    const railTop = railRect.top + window.scrollY;
    const cardCenter = cardRect.top + window.scrollY + cardRect.height / 2;
    const y = cardCenter - railTop;

    dot.style.transform = `translateY(${y - 8}px)`;
  }, [active]);

  useLayoutEffect(() => {
    repositionDot();
    const onResize = () => repositionDot();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [repositionDot]);

  useEffect(() => {
    const id = setTimeout(repositionDot, 0);
    return () => clearTimeout(id);
  }, [repositionDot]);

  return (
    <section className="form-root" id="formacion">
      <h2 className="form-title">FORMACIÓN</h2>
      <div className="form-wrap">
        <div className="form-rail" ref={railRef}>
          <div className="form-rail-line" />
          <span className="form-dot" ref={dotRef} aria-hidden />
        </div>

        <div className="form-list">
          {items.map((it, i) => (
            <article
              key={it.h}
              className={`form-card ${i === active ? "is-active" : ""}`}
              onClick={() => setActive(i)}
              ref={(el) => (cardRefs.current[i] = el)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setActive(i)}
            >
              <h3 className="form-h">{it.h}</h3>
              <p className="form-p">{it.p}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );

  
}

// ====== Proyectos Destacados ======
function FeaturedProjectsSection() {

  <img className="feat-img" src={proyecto} alt="Bioimpresora 3D" />

  return (
    <section className="feat-root" id="proyectos">
      <div className="feat-grid">
        <div className="feat-copy">
          <h2 className="feat-title">PROYECTOS DESTACADOS</h2>
          <div className="feat-year">2025</div>
          <p className="feat-text">
            En este proyecto académico desarrollé un prototipo de sistema de
            bioimpresión 3D destinado a la creación de tejidos blandos compatibles
            con el cuerpo humano. El objetivo fue simular el proceso de generación
            de un órgano artificial funcional, utilizando biotintas a base de
            colágeno y células madre cultivadas en laboratorio.
          </p>
        </div>

        <div className="feat-media">
          <img className="feat-img" src={proyecto} alt="Bioimpresora 3D" />
        </div>
      </div>
    </section>
  );
}

// ====== Footer ======
function FooterSection() {
  return (
    <footer className="ft-root" id="contacto">
      <div className="ft-grid">

        {/* Contact */}
        <div className="ft-col">
          <h3 className="ft-title">Contact</h3>
          <p className="ft-note">Buenos Aires, Belgrano</p>
          <p className="ft-note">Horario: de 8am a 18pm</p>
          <p className="ft-note">1132903329</p>
        </div>

        {/* Site */}
        <div className="ft-col">
          <h3 className="ft-title">Site</h3>
          <a className="ft-link" href="#home">Home</a>
          <a className="ft-link" href="#sobre-mi">About</a>
          <a className="ft-link" href="#capabilities">Capabilities</a>
          <a className="ft-link" href="#blog">Blog</a>
        </div>

        {/* Social */}
        <div className="ft-col">
          <h3 className="ft-title">Social</h3>

          <a className="ft-link ft-iconrow" href="https://www.linkedin.com/in/lolanun" target="_blank" rel="noreferrer">
            <span className="ft-ico">in</span> Linkedin
          </a>

          <a className="ft-link ft-iconrow" href="mailto:lolaemma2007@gmail.com">
            <span className="ft-ico">✉️</span> Gmail
          </a>

          <a className="ft-link ft-iconrow" href="https://github.com/" target="_blank" rel="noreferrer">
            <span className="ft-ico">🐙</span> GitHub
          </a>
        </div>

        {/* Newsletter / CTA */}
        <div className="ft-col">
          <h3 className="ft-title">Newsletter</h3>
          <p className="ft-note">
            Si estás interesado en colaborar conmigo, no dudes en contactarme.
          </p>
          <a className="ft-btn" href="mailto:lolaemma2007@gmail.com">
  <span>Trabaja conmigo</span>
</a>
        </div>

      </div>
    </footer>
  );
}

