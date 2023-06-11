function Footer() {
  return (
    <section className="footer">
      <h2 className="footer__name">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__sources">
        <p className="footer__source">© 2023</p>
        <a
          target="_blank"
          className="footer__source"
          href="https://practicum.yandex.ru/"
        >
          Яндекс.Практикум
        </a>
        <a
          target="_blank"
          className="footer__source"
          href="https://github.com/Andr43"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}

export default Footer;