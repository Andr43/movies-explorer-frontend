import aboutMeAvatar from "../../../images/about-me__avatar.jpg";

function AboutMe() {
  return (
    <section className="about-me" name="about-me">
      <h2 className="about-me__name main__name">Студент</h2>
      <div className="about-me__about">
        <h3 className="about-me__header">Андрей Мусинов</h3>
        <h4 className="about-me__sub-header">Фронтенд-разработчик, 23 года</h4>
        <p className="about-me__par">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, placeat.
          Nam perspiciatis sequi error. Eaque harum laudantium expedita autem
          nihil quae id adipisci, sequi obcaecati perferendis quis ab, porro
          ducimus illum quisquam soluta sit, beatae fugiat dolorum dignissimos
          eveniet saepe.
        </p>
        <img
          className="about-me__avatar"
          src={aboutMeAvatar}
          alt="Аватар студента, сделавшего проект"
        ></img>
          <div className="about-me__sources">
        <a
          target="_blank"
          href="https://github.com/Andr43"
          className="about-me__source"
        ></a>
        <a
          target="_blank"
          href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZZQwKQTZTkSGShKpkRsNtJchzdsrGnKVXBFcwdwQqRFTQdxdgslNQFkgFvqKXxCpRSFlV"
          className="about-me__source"
        ></a>
        <a
          target="_blank"
          href="https://t.me/AndreyM43"
          className="about-me__source"
        ></a>
        <a
          target="_blank"
          href="https://instagram.com/andrewmusinov?igshid=YmMyMTA2M2Y="
          className="about-me__source"
        ></a>
      </div>
      </div>
    </section>
  );
}

export default AboutMe;
