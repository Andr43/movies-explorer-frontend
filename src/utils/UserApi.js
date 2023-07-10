export const BASE_URL = "https://api.diploma.yandex.nomoredomains.rocks";

const checkStatus = (res) => {
  if (res.ok) {
      return res.json()
  } else {
  return Promise.reject(
    console.error(
      `Ошибка: ${res.status}.`
    ),
  );
}
};

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      password: password,
      email: email,
    }),
  })
  .then((res) => {
    return checkStatus(res);
  });
};

export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    credentials: 'include',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password
    }),
  })
  .then((res) => {
    if(res.ok){
      return res
    } else {
      return Promise.reject(
        console.error(
          `Ошибка: ${res.status}.`
        ),
      );
    }
  });
};

export const signout = () => {
  return fetch(`${BASE_URL}/signout`, {
    method: "GET",
    credentials: 'include',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    })
    .then(checkStatus);
}
