import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <section className="auth">
      <Link className="auth__logo header__logo" to="/"></Link>
        <h1 className="auth__header">Рады видеть!</h1>
        <form className="auth__form" action="#" noValidate>
          <span className="auth__field_name">E-mail</span>
          <input className="auth__field" type="email" />
          <span className="auth__field_name">Пароль</span>
          <input className="auth__field" type="password" />
          <button className="auth__button auth__button_login" type="submit">
            Войти
          </button>
          <div className="auth__links">
            <span className="auth__question">Еще не зарегистрированы?</span>
            <Link className="auth__link" to="/signup">
              Регистрация
            </Link>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;