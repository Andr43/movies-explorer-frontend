import { Link } from "react-router-dom";

function HeaderPromo() {
  return (
    <header className="promo__header">
      <Link className="promo__logo header__logo" to="/"></Link>
      <nav className="promo__links">
        <Link className="promo__link" to="/signup">
          Регистрация
        </Link>
        <Link className="promo__link promo__link_signin" to="/signin">
          Войти
        </Link>
      </nav>
    </header>
  );
}

export default HeaderPromo;
