import imageSuccess from "../../images/good-result-icon.png";
import imageUnsuccess from "../../images/bad-result-icon.png";

function ResultPopup() {
  return (
    <section className="popup-result">
      <div className="popup-result__container">
        <img className="popup-result__image" alt="Картинка успешного или неудачного результата выполения запроса" src={imageSuccess || imageUnsuccess} />
        <p className="popup-result__par">{"Вы успешно зарегистрировались!" || "Что-то пошло не так..."}</p>
      <button className="popup-result__button"></button>
      </div>
    </section>
  );
}

export default ResultPopup;
