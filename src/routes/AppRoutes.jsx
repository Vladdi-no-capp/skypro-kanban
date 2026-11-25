import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute.jsx";

function LoginPlaceholder() {
  return <h1>Вход</h1>;
}

function NotFoundPlaceholder() {
  return <h1>Страница не найдена</h1>;
}

function BoardPlaceholder() {
  return <h1>Доска задач</h1>;
}

export default function AppRoutes({ isAuth }) {
  return (
    <Routes>
      <Route path="/login" element={<LoginPlaceholder />} />
      <Route
        path="/"
        element={
          <ProtectedRoute isAuth={isAuth}>
            <BoardPlaceholder />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFoundPlaceholder />} />
    </Routes>
  );
}
