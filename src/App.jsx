import "./App.css";
import Navbar from "./HoverImage"; // Asegurate que el path sea correcto

function App() {
  return (
    <>
      <div class="parent">
        <div id="inicio" class="div1">
          <h1 className="h1_pr1">AGUSTIN RODRIGUEZ</h1>
          <h2 className="h2_pr1">desarollador web </h2>

          <div className="bnt_father">
            <div className="ig_link_wrapper-ig">
              <a href="https://www.instagram.com/ap_dev2/">
                <img
                  className="ig_img"
                  src="src/imagen/instagram.png"
                  alt="Instagram"
                  onMouseEnter={(e) => {
                    e.target.classList.remove("leave");
                    e.target.classList.add("hover");
                  }}
                  onMouseLeave={(e) => {
                    e.target.classList.remove("hover");
                    e.target.classList.add("leave");
                  }}
                />
              </a>
            </div>
            <div className="ig_link_wrapper-gt">
              <a href="https://github.com/pache111">
                <img
                  className="ig_img"
                  src="src/imagen/github.png"
                  alt="Instagram"
                  onMouseEnter={(e) => {
                    e.target.classList.remove("leave");
                    e.target.classList.add("hover");
                  }}
                  onMouseLeave={(e) => {
                    e.target.classList.remove("hover");
                    e.target.classList.add("leave");
                  }}
                />
              </a>
            </div>
            <div className="ig_link_wrapper-ln">
              <a href="https://www.linkedin.com/in/agus-pacheco-0b6100327/">
                <img
                  className="ig_img"
                  src="src/imagen/linkedin.png"
                  alt="Instagram"
                  onMouseEnter={(e) => {
                    e.target.classList.remove("leave");
                    e.target.classList.add("hover");
                  }}
                  onMouseLeave={(e) => {
                    e.target.classList.remove("hover");
                    e.target.classList.add("leave");
                  }}
                />
              </a>
            </div>
            <div className="ig_lnk_wrapper_cv">
              <a className="a_cv" href="src/public/cv de a.pdf" download>
                <button
                  onMouseEnter={(e) => {
                    e.target.classList.remove("leave");
                    e.target.classList.add("hover");
                  }}
                  onMouseLeave={(e) => {
                    e.target.classList.remove("hover");
                    e.target.classList.add("leave");
                  }}
                  className="btn_cv"
                >
                  Descargar CV
                </button>
              </a>
            </div>
          </div>
        </div>
        <div class="div2">
          <img
            className="img-mi"
            src="src/imagen/WhatsApp Image 2025-07-12 at 7.16.50 PM.jpeg"
            alt=""
          />
        </div>
        <div>
          <Navbar />
        </div>
      </div>

      <section id="sobre_mi" className="sobre_mi">
        <div className="sobre_h2">
          <h2>SOBRE MI - ABOUT ME</h2>

          <div class="parent_mi">
            <div class="div1_mi">
              <p className="inf">
                Soy Agustín Rodríguez, estudiante de Ingeniería en Informática
                en la Universidad de Buenos Aires (UBA) con 20 años de edad.
                Poseo sólidos conocimientos en desarrollo web frontend (HTML,
                CSS, JavaScript, React) y buenas bases en backend (Node.js). Me
                adapto con rapidez a nuevos entornos tecnológicos y tengo una
                fuerte capacidad de aprendizaje autónomo, lo que me permite
                integrarme y aportar valor en equipos de desarrollo con
                eficiencia.
              </p>
            </div>
            <div class="div2_mi">
              <p className="inf">
                I'm Agustín Rodríguez, a 20-year-old Computer Engineering
                student at the University of Buenos Aires (UBA). I have strong
                skills in web development, particularly in frontend technologies
                such as HTML, CSS, JavaScript, and React, and solid foundational
                knowledge of backend development using Node.js. I'm highly
                adaptable to new technologies and environments, with a fast
                learning curve and a proactive mindset that allows me to
                contribute effectively in development teams.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="trabajo" className="trabajo">
        <div>
          <h2>TRABAJO - WORK</h2>
        </div>
        <div className="parent-gg">
          <div className="gg_dev">
            <p className="gg">
              Aquí encontrará muestras de trabajos que he realizado. Este
              portafolio será actualizado de forma constante.
            </p>

            <div className="div_web">
              <a href="https://ejercicio7.online/">
                <img
                  className="web_1"
                  src="src/imagen/Captura de pantalla 2025-07-14 164013.png"
                  alt=""
                />
              </a>
              <img
                className="img_hover"
                src="src/imagen/icons8-html-5-50.png"
                alt="hover"
              />
              <img
                className="css_hover"
                src="src/imagen/icons8-css3-50.png"
                alt=""
              />
            </div>
          </div>

          <div className="tex-div">
            <p className="ff">
              Here you will find samples of work I have done. This portfolio
              will be updated regularly.
            </p>
            <div className="div_web">
              <a href="">
                <img
                  className="web_1"
                  src="src/imagen/Captura de pantalla 2025-07-08 132057.png"
                  alt=""
                />
              </a>
              <img
                className="img_hover_2"
                src="src/imagen/icons8-html-5-50.png"
                alt="hover"
              />
              <img
                className="css_hover_2"
                src="src/imagen/icons8-css3-50.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default App;
