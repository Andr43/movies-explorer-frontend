import { Link } from "react-router-dom";

function HeaderMobileMenu() {
  return (
    <header className="header-mobile">
      <div className="header-mobile__container">
      <button className="header-mobile__button"></button>
      <nav className="header-mobile__menu">
        <Link className="header-mobile__link" to="/">
          Главная
        </Link>
        <Link className="header-mobile__link header-mobile__link_active" to="/movies">
          Фильмы
        </Link>
        <Link className="header-mobile__link" to="/saved-movies">
          Сохранённые фильмы
        </Link>
        <Link
          className="header__link-account"
          to="/profile"
        >
          Аккаунт
        </Link>
      </nav>
      </div>
    </header>
  );
}

export default HeaderMobileMenu;
