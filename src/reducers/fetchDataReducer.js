// ********** IMPORT VARIABLES FROM TYPES ********** //
import { FETCH_DATA_BEGIN, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from '../actions/fetchData';

const initialState = {
    items: [],
    loading: false,
    error: null
}

// ********** REDUCER FOR DATA REQUEST ********** //
export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_DATA_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.data
            }
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            }
        default: return state;
    }
}