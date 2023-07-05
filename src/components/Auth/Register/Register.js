import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <section className="auth">
      <Link className="auth__logo header__logo" to="/"></Link>
        <h1 className="auth__header">Добро пожаловать!</h1>
        <form className="auth__form" action="#" noValidate>
          <span className="auth__field_name">Имя</span>
          <input className="auth__field" type="text" />
          <span className="auth__field_name">E-mail</span>
          <input className="auth__field" type="email" />
          <span className="auth__field_name">Пароль</span>
          <input className="auth__field" type="password" />
          <button className="auth__button" type="submit">
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
