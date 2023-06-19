import { Link } from "react-router-dom";
import Header from "../Header/Header.js";

function Profile() {
  return (
    <>
      <Header />
      <section className="profile">
        <h1 className="profile__name">Привет, Андрей!</h1>
        <form className="profile__form" action="#" noValidate>
          <div className="profile__edit">
            <p className="profile__par">Имя</p>
            <input className="profile__field" type="text" placeholder="Андрей" />
          </div>
          <div className="profile__edit">
            <p className="profile__par">E-mail</p>
            <input className="profile__field" type="email" placeholder="pochta@yandex.ru" />
          </div>
            <button className="profile__button_submit">Редактировать</button>
            <Link className="profile__button_log-out" to="/signout">
              Выйти из аккаунта
            </Link>
        </form>
      </section>
    </>
  );
}

export default Profile;
