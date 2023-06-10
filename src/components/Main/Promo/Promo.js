import projectLogo from "../../../images/project__logo.svg";
import { Link } from "react-router-dom";
import NavTab from "../NavTab/NavTab.js";
import AboutProject from "../AboutProject/AboutProject.js";
import Techs from "../Techs/Techs.js";
import AboutMe from "../AboutMe/AboutMe.js";

function Promo(props) {
  return (
    <>
    <section className="promo">
      <header className="promo__header">
        <img
          src={projectLogo}
          alt="логотип страницы промо"
          className="promo__logo"
        />
        <nav className="promo__links">
          <Link className="promo__link" onClick={props.onSignOut} to="/signup">
            Регистрация
          </Link>
          <Link
            className="promo__link promo__link__signin"
            onClick={props.onSignOut}
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
   <NavTab />
   <AboutProject />
   <Techs />
   <AboutMe />
   </>
  );
}

export default Promo;
