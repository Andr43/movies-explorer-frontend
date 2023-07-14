export const BASE_URL = "https://api.diploma.yandex.nomoredomains.rocks";

const checkStatus = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return res.json().then(errorData => {
      throw new Error(`Ошибка ${errorData.status}. ${errorData.message}`);
    });
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
  }).then((res) => {
    return checkStatus(res);
  });
};

export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  }).then((res) => {
    if (res.ok) {
      return res;
    } else {
      return res.json().then(errorData => {
        throw new Error(`Ошибка ${errorData.status}. ${errorData.message}`);
      });
    }
  });
};

export const getUserInfo = () => {
  return fetch(`${BASE_URL}/users/me`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    return checkStatus(res);
  });
};

export const updateUserInfo = (name, email) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  }).then((res) => {
    return checkStatus(res);
  });
};

export const signout = () => {
  return fetch(`${BASE_URL}/signout`, {
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      return res;
    } else {
      return Promise.reject(console.error(`Ошибка: ${res.status}.`));
    }
  });
};
