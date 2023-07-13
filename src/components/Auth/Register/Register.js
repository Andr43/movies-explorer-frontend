import { React, useState } from "react";
import { Link } from "react-router-dom";

function Register(props) {
  const [formValue, setFormValue] = useState({
    userName: "",
    email: "",
    password: "",
  });
  // const [isValidated, setIsValidated] = useState(false);
  const formRegister = document.querySelector(".auth__form");

  // const validationCheck = () => {
  //   const buttonSubmit = document.querySelector('.auth__button');
  //   if(!props.registeredIn || formValue === ""){
  //     buttonSubmit.classList.add('auth__button_inactive')
  //   } else {
  //     buttonSubmit.classList.remove('auth__button_inactive');
  //     setIsValidated(true);
  //   }
  // }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const formSubmit = (e) => {
    // validationCheck();
    // if(isValidated){
      e.preventDefault();
      props.onRegisterSubmit(formValue.userName, formValue.email, formValue.password, formRegister);
    // } else {
    //   console.error('Ошибка')
    //   return
    // }
  };

  return (
    <>
      <section className="auth">
      <Link className="auth__logo header__logo" to="/"></Link>
        <h1 className="auth__header">Добро пожаловать!</h1>
        <form className="auth__form" onSubmit={formSubmit} action="#" noValidate>
          <span className="auth__field_name">Имя</span>
          <input className="auth__field" name="userName" onChange={handleChange} value={formValue.userName} type="text" />
          <span className="auth__field_name">E-mail</span>
          <input className="auth__field" name="email" onChange={handleChange} value={formValue.email} type="email" />
          <span className="auth__field_name">Пароль</span>
          <input className="auth__field" name="password" onChange={handleChange} value={formValue.password} type="password" />
          <button className="auth__button auth__button_inactive" type="submit">
            Зарегистрироваться
          </button>
          <div className="auth__links">
            <span className="auth__question">Уже зарегистрированы?</span>
            <Link className="auth__link" to="/signin">
              Войти
            </Link>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;
