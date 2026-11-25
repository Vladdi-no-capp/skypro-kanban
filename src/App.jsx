import { useState } from "react";
import "./App.css";
import { GlobalStyle, Wrapper } from "./App.styled.js";
import AppRoutes from "./routes/AppRoutes.jsx";

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      <GlobalStyle />
      <Wrapper data-testid="app-wrapper">
        <AppRoutes
          isAuth={isAuth}
          onLogin={() => setIsAuth(true)}
          onLogout={() => setIsAuth(false)}
        />
      </Wrapper>
    </>
  );
}
