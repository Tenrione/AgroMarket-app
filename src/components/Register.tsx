import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Moon, Sun } from "lucide-react";

const themes = {
  light: {
    background: "rgba(255, 255, 255, 0.85)",
    cardBackground: "rgba(255, 255, 255, 0.9)",
    primary: "#0d6efd",
    secondary: "#6c757d",
    text: "#212529",
    inputBg: "rgba(255, 255, 255, 0.9)",
    gradient: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
  },
  dark: {
    background: "rgba(33, 37, 41, 0.85)",
    cardBackground: "rgba(33, 37, 41, 0.9)",
    primary: "#3d8bfd",
    secondary: "#adb5bd",
    text: "#ffffff",
    inputBg: "rgba(33, 37, 41, 0.9)",
    gradient: "linear-gradient(135deg, #1e2124 0%, #2c3e50 100%)",
  },
};

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    user: "",
    province: "",
    termsAccepted: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();

  const currentTheme = isDarkMode ? themes.dark : themes.light;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const newValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert("Debes aceptar los términos y condiciones para continuar");
      return;
    }
    console.log("Registrándose con: ", formData);
    navigate("/app");
  };

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        margin: 0,
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: currentTheme.gradient,
        transition: "all 0.3s ease-in-out",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          background: currentTheme.cardBackground,
          color: currentTheme.text,
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
          borderRadius: "15px",
          maxWidth: "500px",
          width: "100%",
          padding: "2rem",
          transition: "all 0.3s ease-in-out",
          position: "relative",
        }}
      >
        <button
          className="position-absolute top-0 end-0 m-3 btn"
          onClick={toggleTheme}
          style={{
            background: "transparent",
            border: "none",
            padding: "8px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.3s ease",
            transform: isDarkMode ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          {isDarkMode ? (
            <Sun size={24} color={currentTheme.text} />
          ) : (
            <Moon size={24} color={currentTheme.text} />
          )}
        </button>

        <h2 className="text-center mb-4" style={{ color: currentTheme.text }}>
          Registro
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                background: currentTheme.inputBg,
                color: currentTheme.text,
                border: `1px solid ${currentTheme.secondary}`,
                transition: "all 0.3s ease-in-out",
              }}
            />
          </div>

          <div className="mb-3 position-relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="form-control"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
              required
              style={{
                background: currentTheme.inputBg,
                color: currentTheme.text,
                border: `1px solid ${currentTheme.secondary}`,
                transition: "all 0.3s ease-in-out",
              }}
            />
            <button
              type="button"
              className="btn position-absolute end-0 top-50 translate-middle-y"
              onClick={togglePasswordVisibility}
              style={{
                border: "none",
                padding: "0 10px",
                background: "transparent",
              }}
            >
              {showPassword ? (
                <EyeOff size={20} color={currentTheme.secondary} />
              ) : (
                <Eye size={20} color={currentTheme.secondary} />
              )}
            </button>
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="user"
              className="form-control"
              placeholder="Usuario"
              value={formData.user}
              onChange={handleChange}
              required
              style={{
                background: currentTheme.inputBg,
                color: currentTheme.text,
                border: `1px solid ${currentTheme.secondary}`,
                transition: "all 0.3s ease-in-out",
              }}
            />
          </div>

          <div className="mb-3">
            <select
              name="province"
              id="province"
              className="form-select"
              value={formData.province}
              onChange={handleChange}
              required
              style={{
                background: currentTheme.inputBg,
                color: currentTheme.text,
                border: `1px solid ${currentTheme.secondary}`,
                transition: "all 0.3s ease-in-out",
              }}
            >
              <option value="" disabled>
                Seleccione su provincia
              </option>
              <option value="bocas-del-toro">Bocas del Toro</option>
              <option value="cocle">Coclé</option>
              <option value="colon">Colón</option>
              <option value="chiriqui">Chiriquí</option>
              <option value="darien">Darién</option>
              <option value="herrera">Herrera</option>
              <option value="los-santos">Los Santos</option>
              <option value="panama">Panamá</option>
              <option value="panama-oeste">Panamá Oeste</option>
              <option value="veraguas">Veraguas</option>
              <option value="comarca-guna-yala">Comarca Guna Yala</option>
              <option value="comarca-embera">Comarca Emberá-Wounaan</option>
              <option value="comarca-ngabe-bugle">Comarca Ngäbe-Buglé</option>
            </select>
          </div>

          <div className="mb-4">
            <div className="form-check">
              <input
                type="checkbox"
                name="termsAccepted"
                id="termsAccepted"
                className="form-check-input"
                checked={formData.termsAccepted}
                onChange={handleChange}
                required
                style={{
                  borderColor: currentTheme.secondary,
                }}
              />
              <label
                htmlFor="termsAccepted"
                className="form-check-label"
                style={{ color: currentTheme.text }}
              >
                He leído y acepto los{" "}
                <a
                  href="/terminos-y-condiciones"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: currentTheme.primary }}
                >
                  términos y condiciones
                </a>{" "}
                y la{" "}
                <a
                  href="/privacidad"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: currentTheme.primary }}
                >
                  política de privacidad
                </a>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="btn w-100 mb-3"
            style={{
              background: currentTheme.primary,
              color: "#fff",
              border: "none",
              padding: "10px",
              transition: "all 0.3s ease-in-out",
            }}
          >
            Registrarse
          </button>
        </form>

        <p className="text-center mb-0">
          ¿Ya tienes cuenta?{" "}
          <button
            className="btn btn-link p-0"
            onClick={() => navigate("/login")}
            style={{
              color: currentTheme.primary,
              textDecoration: "none",
            }}
          >
            Iniciar Sesión
          </button>
        </p>
      </div>
    </div>
  );
}

export default Register;
