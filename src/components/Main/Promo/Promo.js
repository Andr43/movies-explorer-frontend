import { Link } from "react-router-dom";

function Promo() {
  return (
    <section className="promo">
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
      <div className="promo__main">
        <h1 className="promo__par">
          Учебный проект студента факультета Веб-разработки.
        </h1>
      </div>
    </section>
  );
}

export default Promo;
