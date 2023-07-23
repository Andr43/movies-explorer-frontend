import Header from "../Header/Header.js";
import { React, useState, useEffect } from "react";

function Profile(props) {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
  });
  const [isValidated, setIsValidated] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setInputValue(props.currentUser)
  }, []);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    const buttonSubmit = document.querySelector('.profile__button_submit');
    setInputValue({
      ...inputValue,
      [name]: value,
    });
    setErrors({...errors, [name]: evt.target.validationMessage });
    const isValidated = evt.target.closest("form").checkValidity();
    setIsValidated(isValidated);
    if(isValidated){
      buttonSubmit.classList.remove('profile__button_submit_inactive');
    } else {
      buttonSubmit.classList.add('profile__button_submit_inactive');
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if(inputValue.name === props.currentUser.name && inputValue.email === props.currentUser.email) {
      setIsValidated(false);
      console.error('Данные должны отличаться от указанных ранее.')
    } else if(isValidated){
      props.handleUpdateUser(inputValue.name, inputValue.email);
    } else {
      return
    }
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
              minLength={2}
              maxLength={30}
              name="name"
            />
          </div>
          <span className="auth__field_name_error">{errors.name}</span>
          <div className="profile__edit">
            <p className="profile__par">E-mail</p>
            <input
              className="profile__field"
              onChange={handleInputChange}
              value={inputValue.email}
              type="email"
              name="email"
            />
          </div>
          <span className="auth__field_name_error">{errors.email}</span>
          {props.fetchError && <span className="auth__error">{props.fetchError.toString()}</span>}
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
