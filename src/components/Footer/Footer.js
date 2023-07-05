function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__name">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__sources">
        <p className="footer__source">© 2023</p>
        <a
          target="_blank"
          className="footer__source"
          href="https://practicum.yandex.ru/" 
          rel="noreferrer"
        >
          Яндекс.Практикум
        </a>
        <a
          target="_blank"
          className="footer__source"
          href="https://github.com/Andr43"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}

export default Footer;