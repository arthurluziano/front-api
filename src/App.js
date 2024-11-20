/* eslint-disable react/jsx-no-comment-textnodes */
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        // Redireciona o usuário automaticamente para a url "/login".
        <Route path="/" element={<Navigate to="/login" />} />

        // Carrega o conteúdo da page Login.
        <Route path="/login" element={<Login />} />

        // Carrega o conteúdo da page SignUp.
        <Route path="/signup" />

        // Carrega o conteúdo da page ForgotPassword
        <Route path="/forgot-password" />
      </Routes>
    </BrowserRouter>
  )
}