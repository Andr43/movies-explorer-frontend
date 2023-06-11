function Portfolio() {
  return (
    <section className="portfolio" name="portfolio">
      <h2 className="portfolio__name">Портфолио</h2>
      <div className="portfolio__list">
        <a
          target="_blank"
          className="portfolio__source"
          href="https://andr43.github.io/how-to-learn/"
        >
          Статичный сайт
        </a>
        <a
          target="_blank"
          className="portfolio__source"
          href="https://andr43.github.io/russian-travel/"
        >
          Адаптивный сайт
        </a>
        <a
          target="_blank"
          className="portfolio__source"
          href="https://andr43.github.io/react-mesto-auth/"
        >
          Одностраничное приложение с авторизацией
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
