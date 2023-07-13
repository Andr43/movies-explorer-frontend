import Header from "../Header/Header.js";
import { React, useState } from "react";

function Profile(props) {
  const [inputValue, setInputValue] = useState({
    name: '',
    email: ''
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleUpdateUser(inputValue);
  };

  return (
    <>
      <Header />
      <section className="profile">
        <h1 className="profile__name">{`Привет, ${props.currentUser.name}!`}</h1>
        <form
          className="profile__form"
          action="#"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="profile__edit">
            <p className="profile__par">Имя</p>
            <input
              className="profile__field"
              onChange={handleInputChange}
              value={inputValue.name}
              type="text"
              name="name"
              placeholder={props.currentUser.name}
            />
          </div>
          <div className="profile__edit">
            <p className="profile__par">E-mail</p>
            <input
              className="profile__field"
              onChange={handleInputChange}
              value={inputValue.email}
              type="email"
              name="email"
              placeholder={props.currentUser.email}
            />
          </div>
          <button type="submit" className="profile__button_submit">
            Редактировать
          </button>
        </form>
        <button
          type="button"
          className="profile__button_log-out"
          onClick={props.onSignOut}
        >
          Выйти из аккаунта
        </button>
      </section>
    </>
  );
}

export default Profile;
