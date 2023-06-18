import projectLogo from "../../images/project__logo.svg";
import { Link } from "react-router-dom";
import HeaderMobileMenu from "./HeaderMobileMenu"

function burgerMenuOpen(){
const headerMobile = document.querySelector(".header-mobile");
headerMobile.classList.add("visible");
headerMobile.classList.remove("invisible");
}

function Header() {
  return (
    <>
    <header className="header">
      <img
        src={projectLogo}
        alt="логотип страницы"
        className="header__logo"
      />
      <nav className="header__menu">
      <Link className="header__link" to="/movies">
        Фильмы
      </Link>
      <Link className="header__link" to="/saved-movies">
        Сохранённые фильмы
      </Link>
      <Link className="header__link header__link-account" to="/profile">
        Аккаунт
      </Link>
      <button className="header__button" onClick={burgerMenuOpen}>
      </button>
      </nav>
    </header>
    <HeaderMobileMenu />
    </>
  );
}

export default Header;
