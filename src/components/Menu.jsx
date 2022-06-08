import React from "react";
import Logo from './Logo'
const Menu = () => {
    return (

      <header>
      <div className="px-3 py-2 bg-light text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
            <Logo />
            </a>
  
            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <li>
                <a href="#" className="nav-link text-secondary">
                Inicio
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-black">
                Historia
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-black">
                Productos
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-black">
                Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    );
}
export default Menu