import PopUser from "../PopUser/PopUser.jsx";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="#" aria-label="На главную">
              <img src="/images/logo.png" alt="Логотип Skypro" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="#" aria-label="На главную">
              <img
                src="/images/logo_dark.png"
                alt="Логотип Skypro для тёмной темы"
              />
            </a>
          </div>
          <nav className="header__nav" aria-label="Основная навигация">
            <a className="header__btn-main-new _hover01" id="btnMainNew" href="#popNewCard">
              Создать новую задачу
            </a>
            <a href="#user-set-target" className="header__user _hover02">
              Ivan Ivanov
            </a>
            <PopUser />
          </nav>
        </div>
      </div>
    </header>
  );
}
