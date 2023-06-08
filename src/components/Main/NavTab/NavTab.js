import { Link } from "react-router-dom";

function NavTab(props) {
  return (
    <nav className="nav-tab">
      <Link className="nav-tab__link" onClick={props.onSignOut} to="#about-project">
        О проекте
      </Link>
      <Link className="nav-tab__link" onClick={props.onSignOut} to="#techs">
        Технологии
      </Link>
      <Link className="nav-tab__link" onClick={props.onSignOut} to="#about-me">
        Студент
      </Link>
    </nav>
  );
}

export default NavTab;
