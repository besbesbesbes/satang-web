import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useUserStore from "../stores/userStore";
import Satang from "../pages/Satang";
import Login from "../pages/Login";

export default function AppRouter() {
  const token = useUserStore((state) => state.token);

  return (
    <Router>
      <Routes>
        <Route path="*" element={token ? <Satang /> : <Login />} />
      </Routes>
    </Router>
  );
}
