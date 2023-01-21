import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "../pages/User";

function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<User />} />
      </Routes>
    </Router>
  );
}

export default Routers;
