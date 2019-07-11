import { GET_THREADS } from "../actions/types";
// import isEmpty from "../validation/is-empty";


const initialState = {
    isLoading: true,
    threads: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
    case GET_THREADS:
        return {
            ...state,
            isLoading: false,
            threads: action.payload
        };
    default:
        return state;
    }
}