import { useEffect, useState } from "react";

function Navbar() {
  const [mostrarFijo, setMostrarFijo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 230) {
        setMostrarFijo(true);
      } else {
        setMostrarFijo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Menú original */}

      <div className="barra">
        <div className="barra_in">
          <h4>
            <a href="">inicio</a>
          </h4>
        </div>
        <div className="barra_so">
          <h4>
            <a href="#sobre_mi">sobre mi</a>
          </h4>
        </div>
        <div className="barra_tr">
          <h4>
            <a href="#trabajo">trabajo</a>
          </h4>
        </div>
      </div>

      {/* Menú fijo que aparece con scroll */}
      {mostrarFijo && (
        <div className="menu-fixed">
          <a className="menu_in" href="#inicio">
            inicio
          </a>

          <a className="menu_so" href="#sobre_mi">
            sobre mi
          </a>

          <a className="menu_tr" href="#trabajo">
            trabajo
          </a>
        </div>
      )}
    </>
  );
}

export default Navbar;
