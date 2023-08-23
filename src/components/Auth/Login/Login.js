import { React, useState } from "react";
import { Link } from "react-router-dom";
import ResultPopup from "../../ResultPopup/ResultPopup.js";

function Login(props) {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isValidated, setIsValidated] = useState(false);
  const formLogin = document.querySelector(".auth__form");

  const handleChange = (e) => {
    const { name, value } = e.target;
    const buttonSubmit = document.querySelector('.auth__button');
    setFormValue({
      ...formValue,
      [name]: value,
    });
    setErrors({...errors, [name]: e.target.validationMessage });
    const isValidated = e.target.closest("form").checkValidity();
    setIsValidated(isValidated);
    if(isValidated){
      buttonSubmit.classList.remove('auth__button_inactive');
    } else {
      buttonSubmit.classList.add('auth__button_inactive');
    }
  };


  const formSubmit = (e) => {
    e.preventDefault();
    if(isValidated){
      props.onLoginSubmit(formValue.email, formValue.password, formLogin);
    } else {
      return
    }
  };

  return (
    <>
      <section className="auth">
      <Link className="auth__logo header__logo" to="/"></Link>
        <h1 className="auth__header">Рады видеть!</h1>
        <form className="auth__form" action="#" onSubmit={formSubmit} noValidate>
          <span className="auth__field_name">E-mail</span>
          <input className="auth__field" name="email" onChange={handleChange} value={formValue.email} type="email" required />
          <span className="auth__field_name_error">{errors.email}</span>
          <span className="auth__field_name">Пароль</span>
          <input className="auth__field" name="password" onChange={handleChange} value={formValue.password} type="password" minLength={2} maxLength={30} required />
          <span className="auth__field_name_error">{errors.password}</span>
          {props.fetchError && <span className="auth__error">{props.fetchError.toString()}</span>}
          <button className="auth__button auth__button_login" type="submit">
            Войти
          </button>
          <div className="auth__links">
            <span className="auth__question">Еще не зарегистрированы?</span>
            <Link className="auth__link" to="/signup">
              Регистрация
            </Link>
          </div>
          {props.loggedIn && <ResultPopup />}
        </form>
      </section>
    </>
  );
}

export default Login;