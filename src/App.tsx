import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import AppMain from "./components/AppMain";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Navigate to="/login" />} />
        <Route path="/app" element={<AppMain />} />
      </Routes>
    </Router>
  );
}
//empieza por aqui aver si encuentras algo
export default App;
