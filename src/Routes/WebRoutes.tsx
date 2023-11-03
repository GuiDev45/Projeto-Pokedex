import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Pokedex from "../Pages/Pokedex";

export default function WebRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="pokedex" element={<Pokedex />} />
    </Routes>
  );
}
