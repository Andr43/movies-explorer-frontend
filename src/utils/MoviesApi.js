export const BASE_URL = "https://api.nomoreparties.co/beatfilm-movies";

const checkStatus = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(
    console.error(
      `Ошибка: ${res.status}.`
    ),
  );
};

export const getFilms = () => {
  return fetch(`${BASE_URL}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => {
    return checkStatus(res);
  })
  .then((data) => data);
};