import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "../pages/User";
import { UnespOurinhos } from "../pages/projects/corridaUnespOurinhos";
import Admin from "../pages/Admin";
import Painel from "../pages/Admin/Painel";
import { SaudeAtiva } from '../pages/projects/corridaSaudeAtiva'

function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/unespourinhos" element={<UnespOurinhos />} />
        <Route path="/saudeativa" element={<SaudeAtiva />} />
      </Routes>
    </Router>
  );
}

export default Routers;
