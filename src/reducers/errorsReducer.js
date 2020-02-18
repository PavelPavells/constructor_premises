// ********** IMPORT VARIABLES FROM TYPES ********** //
import { GET_ERRORS } from '../actions/types';

const initialState = {}

// ********** REDUCER FOR ERRORS ********** //
export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ERRORS:
            return action.payload
        default: return state;
    }
}