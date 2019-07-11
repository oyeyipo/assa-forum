import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from 'jwt-decode';

// Register User
export const registerUser = (userData, history) => (dispatch) => {
    axios
        .post("api/users/", userData)
        .then((res) => history.push("/login"))
        .catch((err) => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    );
};

// Login - Get User token
export const loginUser = (userData) => (dispatch) => {
    axios
        .post("/api/token/", userData)
        .then((res) => {
            // SAve to localStorage
            const {access} = res.data;
            // set token to ls
            localStorage.setItem("jwtToken", access);
            // set token to Auth header
            setAuthToken(access);
            // Decode token to get user data
            const decoded = jwt_decode(access);
            // Set current user
            dispatch(setCurrentUser(decoded));
        })
        .catch((err) => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    );
};

// Set logged in user
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

// Log user out
export const logoutUser = () => dispatch => {
    // Remove token from localStorage
    localStorage.removeItem('jwtToken');

    // Remove the auth header for future requests
    setAuthToken(false);

    // Set the current user to an {} which will also set isAuthenticated to false
    dispatch(setCurrentUser({}));
};