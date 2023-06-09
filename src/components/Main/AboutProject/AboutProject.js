function AboutProject() {
  return (
    <div className="about-project" name="about-project">
      <h2 className="about-project__name">О проекте</h2>
      <div className="about-project__about">
        <h3 className="about-project__header">
          Дипломный проект включал 5 этапов
        </h3>
        <h3 className="about-project__header">
          На выполнение диплома ушло 5 недель
        </h3>
        <p className="about-project__par">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
        <p className="about-project__par">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <div className="about-project__terms">
        <p className="about-project__one-week">1 неделя</p>
        <p className="about-project__four-weeks">4 недели</p>
        <p className="about-project__back-end">Back-end</p>
        <p className="about-project__front-end">Front-end</p>
      </div>
    </div>
  );
}

export default AboutProject;
