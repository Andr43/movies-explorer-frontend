import { React, useState } from "react";
function buttonChangeSwitch(){
  const buttonChange = document.querySelector(".search-form__button_change");
  buttonChange.classList.toggle("search-form__button_change_active")
}

function SearchForm(props) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (evt) => {
    setSearchValue(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.filmsSearch(searchValue);
  };

  return (
    <form
      className="search-form"
      action="#"
      onSubmit={handleSubmit}
      noValidate
    >
      <input type="search" className="search-form__search" placeholder="Фильм" onChange={handleSearchChange} value={searchValue} required/>
      <button className="search-form__button_save" type="submit">
        Найти
      </button>
      <div className="search-form__shorts">
      <button onClick={buttonChangeSwitch} className="search-form__button_change" type="button"></button>
      <p className="search-form__par">Короткометражки</p>
      </div>
    </form>
  );
}

export default SearchForm;