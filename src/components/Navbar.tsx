import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../components/CartContext"; // Importa el contexto

const Navbar: React.FC = () => {
  const { getTotal } = useCart(); // Obtiene la función getTotal del contexto

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Ecommerce
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul
            className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style={{}}
          >
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Productos
              </Link>
            </li>
          </ul>
          <span className="navbar-text">
            Total a pagar: ${getTotal()} {/* Muestra el total a pagar */}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
