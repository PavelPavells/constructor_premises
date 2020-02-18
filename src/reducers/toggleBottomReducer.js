/** ********** IMPORT VARIABLES FROM TYPES ********** */
import { TOGGLE_ARROW_BACK, TOGGLE_ARROW_GO, TOGGLE_RULES, TOGGLE_LAYERS } from '../actions/types';

const initialState = {
    toggleArrowBack: false,
    toggleArrowGo: false,
    toggleRules: false,
    toggleLayers: false
}

/** ********** REDUCER FOR CHANGE BOTTOM MENU ********** */
export default function(state = initialState, action) {
    switch(action.type) {
        case TOGGLE_ARROW_BACK:
            return {
                ...state,
                toggleArrowBack: !state.toggleArrowBack
            }
        case TOGGLE_ARROW_GO:
            return {
                ...state,
                toggleArrowGo: !state.toggleArrowGo
            }
        case TOGGLE_RULES:
            return {
                ...state,
                toggleRules: !state.toggleRules
            }
        case TOGGLE_LAYERS:
            return {
                ...state,
                toggleLayers: !state.toggleLayers
            }
        default: return state;
    }
}