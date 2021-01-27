export const SET_USER = "SET_USER";
export const SET_TOKEN = "SET_TOKEN";

export const setUser = user => ({
  type: SET_USER,
  user: user
});

export const setToken = token => ({
  type: SET_TOKEN,
  token: token
});