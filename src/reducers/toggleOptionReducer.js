/** ********** IMPORT VARIABLES FROM TYPES ********** */
import { TOGGLE_TURNSTILLE_BLOCK, TOGGLE_ROOM_BLOCK, TOGGLE_ANADROMOUS_BLOCK, TOGGLE_WALL_BLOCK, TOGGLE_FENCING_BLOCK } from '../actions/types';

const initialState = {
    toggleTurnstilleBlock: false,
    toggleRoomBlock: false,
    toggleAnadromousBlock: false,
    toggleWallBlock: false,
    toggleFencingBlock: false
}

/** ********** REDUCER FOR CHANGE OPTION MENU ********** */
export default function(state = initialState, action) {
    switch(action.type) {
        case TOGGLE_TURNSTILLE_BLOCK:
            return {
                ...state,
                toggleTurnstilleBlock: !state.toggleTurnstilleBlock
            }
        case TOGGLE_ROOM_BLOCK:
            return {
                ...state,
                toggleRoomBlock: !state.toggleRoomBlock
            }
        case TOGGLE_ANADROMOUS_BLOCK:
            return {
                ...state,
                toggleAnadromousBlock: !state.toggleAnadromousBlock
            }
        case TOGGLE_WALL_BLOCK:
            return {
                ...state,
                toggleWallBlock: !state.toggleWallBlock
            }
        case TOGGLE_FENCING_BLOCK:
            return {
                ...state,
                toggleFencingBlock: !state.toggleFencingBlock
            }
        default: return state;
    }
}