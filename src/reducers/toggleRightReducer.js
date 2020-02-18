/** ********** IMPORT VARIABLES FROM TYPES ********** */
import { TOGGLE_COLOR_PICKER, TOGGLE_PALLETTE, SAVE_PROJECT, SETTINGS } from '../actions/types';

const initialState = {
    toggleColorPicker: false,
    togglePallette: false,
    saveProject: [],
    settings: false
}

/** ********** REDUCER FOR CHANGE RIGHT MENU ********** */
export default function(state = initialState, action) {
    switch(action.type) {
        case TOGGLE_COLOR_PICKER:
            return {
                ...state,
                toggleColorPicker: !state.toggleColorPicker,
            }
        case TOGGLE_PALLETTE:
            return {
                ...state,
                togglePallette: !state.togglePallette,
            }
        case SAVE_PROJECT:
            return {
                ...state,
                saveProject: state.saveProject.concat(action.payload)
            }
        case SETTINGS:
            return {
                ...state,
                settings: !state.settings
            }
        default: return state;
    }
}