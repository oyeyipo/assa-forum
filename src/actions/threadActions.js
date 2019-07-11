import { GET_THREADS } from "./types";
import axios from "axios";


// Threads - Get all threads 
export const getThreads = () => dispatch => {
    axios.get('api/threads/list/')
        .then((res) => {
            dispatch({
                type: GET_THREADS,
                payload: res.data
            });
        })
        .catch((err) => dispatch({
            type: GET_THREADS,
            payload: null
        }));
};