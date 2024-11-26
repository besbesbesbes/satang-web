import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Satang from "../pages/Satang";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Satang />} />
      </Routes>
    </Router>
  );
}
