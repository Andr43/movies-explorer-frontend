function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="portfolio__name">Портфолио</h2>
      <div className="portfolio__list">
        <a
          target="_blank"
          className="portfolio__source"
          href="https://andr43.github.io/how-to-learn/"
          rel="noreferrer"
        >
          Статичный сайт
        </a>
        <a
          target="_blank"
          className="portfolio__source"
          href="https://andr43.github.io/russian-travel/"
          rel="noreferrer"
        >
          Адаптивный сайт
        </a>
        <a
          target="_blank"
          className="portfolio__source"
          href="https://andr43.github.io/react-mesto-auth/" 
          rel="noreferrer"
        >
          Одностраничное приложение с авторизацией
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
