import { Link } from "react-router-dom";
import Header from "../Header/Header.js";

function Profile(props) {
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
            <button type="submit" className="profile__button_submit">Редактировать</button>
            <button className="profile__button_log-out" onClick={props.onSignOut}>
              Выйти из аккаунта
            </button>
        </form>
      </section>
    </>
  );
}

export default Profile;
