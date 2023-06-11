import projectLogo from "../../../images/project__logo.svg";
import { Link } from "react-router-dom";

function Promo() {
  return (
    <section className="promo">
      <header className="promo__header">
        <img
          src={projectLogo}
          alt="логотип страницы промо"
          className="promo__logo"
        />
        <nav className="promo__links">
          <Link className="promo__link" to="/signup">
            Регистрация
          </Link>
          <Link
            className="promo__link promo__link__signin"
            to="/signin"
          >
            Войти
          </Link>
        </nav>
      </header>
      <main className="promo__main">
        <h1 className="promo__par">
          Учебный проект студента факультета Веб-разработки.
        </h1>
      </main>
    </section>
  );
}

export default Promo;
