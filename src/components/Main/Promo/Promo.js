import Header from "../../Header/Header.js";
import HeaderPromo from "../../Header/HeaderPromo.js";

function Promo(props) {
  return (
    <section className="promo">
      {props.loggedIn ? <Header /> : <HeaderPromo />}
      <div className="promo__main">
        <h1 className="promo__par">
          Учебный проект студента факультета Веб-разработки.
        </h1>
      </div>
    </section>
  );
}

export default Promo;
