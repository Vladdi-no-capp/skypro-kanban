import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute.jsx";
import LoginPage from "../pages/LoginPage/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage/RegisterPage.jsx";
import MainPage from "../pages/MainPage/MainPage.jsx";
import CardPage from "../pages/CardPage/CardPage.jsx";
import NewCardPage from "../pages/NewCardPage/NewCardPage.jsx";
import ExitPage from "../pages/ExitPage/ExitPage.jsx";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.jsx";

export default function AppRoutes({ isAuth, onLogin, onLogout }) {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage onLogin={onLogin} />} />
      <Route path="/register" element={<RegisterPage onLogin={onLogin} />} />
      <Route
        path="/"
        element={
          <ProtectedRoute isAuth={isAuth}>
            <MainPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/new-card"
        element={
          <ProtectedRoute isAuth={isAuth}>
            <NewCardPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/card/:id"
        element={
          <ProtectedRoute isAuth={isAuth}>
            <CardPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/exit"
        element={
          <ProtectedRoute isAuth={isAuth}>
            <ExitPage onLogout={onLogout} />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
