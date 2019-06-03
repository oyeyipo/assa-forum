import { GET_ERRORS } from "./types";
import axios from "axios";
 

// Register User
export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post("api/users/", userData)
    .then((res) => history.push("/login"))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login -Get User token
export const loginUser = (userData) => (dispatch) => {
  axios
    .post("/api/token/", userData)
    .then((res) => {
      // SAve to localStorage
      const { access } = res.data;
      // set token to ls
      localStorage.setItem("jwtToken", access);
      // set token to Auth header
      // setAuthToken(access);
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
