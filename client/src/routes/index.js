import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "../pages/User";
import { UnespOurinhos } from "../pages/projects/corridaUnespOurinhos";
import Admin from "../pages/Admin";
import Painel from "../pages/Admin/Painel";

function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/unespourinhos" element={<UnespOurinhos />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Admin/Painel" element={<Painel />} />
      </Routes>
    </Router>
  );
}

export default Routers;
