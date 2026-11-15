import "./App.css";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import PopBrowse from "./components/PopBrowse/PopBrowse.jsx";
import PopExit from "./components/PopExit/PopExit.jsx";
import PopNewCard from "./components/PopNewCard/PopNewCard.jsx";
import { useEffect, useState } from "react";
import {
  GlobalStyle,
  Loading,
  Wrapper,
} from "./App.styled.js";

export default function App() {
  const [ isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
   return () => clearTimeout(timeout);
  }, []);

  return (
    <>
    <GlobalStyle />
    <Wrapper data-testid="app-wrapper">
      <PopExit />
      <PopNewCard />
      <PopBrowse />
      <Header />
   {isLoading ? (
  <Loading>Данные загружаются</Loading>
      ) : (
        <Main />
      )}
    </Wrapper>
    </>
  );
}
