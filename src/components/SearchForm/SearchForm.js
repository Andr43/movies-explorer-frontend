function buttonChangeSwitch(){
  const buttonChange = document.querySelector(".search-form__button_change");
  buttonChange.classList.toggle("search-form__button_change_active")
}

function SearchForm() {
  return (
    <form
      className="search-form"
      action="#"
      noValidate
    >
      <input type="search" className="search-form__search" placeholder="Фильм"/>
      <button className="search-form__button_save" type="submit">
        Найти
      </button>
      <button onClick={buttonChangeSwitch} className="search-form__button_change" type="button"></button>
      <p className="search-form__par">Короткометражки</p>
    </form>
  );
}

export default SearchForm;