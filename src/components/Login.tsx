import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeContext";

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

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const currentTheme = isDarkMode ? themes.dark : themes.light;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Iniciando sesión con: ", formData);
    navigate("/app");
  };

  const handleSocialLogin = (provider) => {
    console.log(`Iniciando sesión con ${provider}`);
    // Implementar lógica de inicio de sesión social aquí
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
          Iniciar Sesión
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

          <div className="mb-3 d-flex justify-content-between align-items-center">
            <div className="form-check">
              <input
                type="checkbox"
                name="rememberMe"
                id="rememberMe"
                className="form-check-input"
                checked={formData.rememberMe}
                onChange={handleChange}
                style={{
                  borderColor: currentTheme.secondary,
                }}
              />
              <label
                htmlFor="rememberMe"
                className="form-check-label"
                style={{ color: currentTheme.text }}
              >
                Recordarme
              </label>
            </div>
            <a
              href="/forgot-password"
              style={{ color: currentTheme.primary, textDecoration: "none" }}
            >
              ¿Olvidó la contraseña?
            </a>
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
            Iniciar Sesión
          </button>
        </form>

        <div className="text-center mb-3">
          <p>O inicia sesión con:</p>
          <div className="d-flex justify-content-center gap-2">
            <button
              onClick={() => handleSocialLogin("Google")}
              className="btn"
              style={{
                background: currentTheme.inputBg,
                border: `1px solid ${currentTheme.secondary}`,
                padding: "10px",
                borderRadius: "50%",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"
                  fill={currentTheme.text}
                />
              </svg>
            </button>
            <button
              onClick={() => handleSocialLogin("Apple")}
              className="btn"
              style={{
                background: currentTheme.inputBg,
                border: `1px solid ${currentTheme.secondary}`,
                padding: "10px",
                borderRadius: "50%",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M22 17.607c-.786 2.28-3.139 6.317-5.563 6.361-1.608.031-2.125-.953-3.963-.953-1.837 0-2.412.923-3.932.983-2.572.099-6.542-5.827-6.542-10.995 0-4.747 3.308-7.1 6.198-7.143 1.55-.028 3.014 1.045 3.959 1.045.949 0 2.727-1.29 4.596-1.101.782.033 2.979.315 4.389 2.377-3.741 2.442-3.158 7.549.858 9.426zm-5.222-17.607c-2.826.114-5.132 3.079-4.81 5.531 2.612.203 5.118-2.725 4.81-5.531z"
                  fill={currentTheme.text}
                />
              </svg>
            </button>
          </div>
        </div>

        <p className="text-center mb-0">
          ¿No tienes cuenta?{" "}
          <button
            className="btn btn-link p-0"
            onClick={() => navigate("/register")}
            style={{
              color: currentTheme.primary,
              textDecoration: "none",
            }}
          >
            Registrarse
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
