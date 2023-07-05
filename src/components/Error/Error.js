import { useNavigate, Link } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  return (
      <section className="error">
        <h1 className="error__header">404</h1>
        <h2 className="error__sub-header">Страница не найдена</h2>
            <Link className="error__link" to="" onClick={() => navigate(-1)}>
              Назад
            </Link>
      </section>
  );
}

export default Error;