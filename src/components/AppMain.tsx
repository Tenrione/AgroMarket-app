import React, { useState } from "react";
import NavbarComponent from "./Navbar";
import Cart from "./Cart";

function AppMain() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "bg-dark text-white" : "bg-light text-dark"}>
      <NavbarComponent toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <div className="container mt-4">
        <h2>Bienvenido a la App Principal</h2>
        <Cart />
        {/* Aquí puedes agregar más contenido de tu ecommerce */}
      </div>
    </div>
  );
}

export default AppMain;
