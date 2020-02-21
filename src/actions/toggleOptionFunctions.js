/** ********** IMPORT VARIABLES FROM TYPES ********** */
import { TOGGLE_TURNSTILLE_BLOCK, TOGGLE_ROOM_BLOCK, TOGGLE_ANADROMOUS_BLOCK, TOGGLE_WALL_BLOCK, TOGGLE_FENCING_BLOCK } from './types';

/** ********** FUNCTION FOR TOGGLE TURNSTILLE BLOCK ********** */
export const toggleTurnstilleBlock = () => ({
    type: TOGGLE_TURNSTILLE_BLOCK
})

/** ********** FUNCTION TOGGLE ROOM BLOCK ********** */
export const toggleRoomBlock = () => ({
    type: TOGGLE_ROOM_BLOCK
})

/** ********** FUNCTION FOR TOGGLE ANADROMOUS BLOCK ********** */
export const toggleAnadromousBlock = () => ({
    type: TOGGLE_ANADROMOUS_BLOCK
})

/** ********** FUNCTION FOR TOGGLE WALL BLOCK ********** */
export const toggleWallBlock = () => ({
    type: TOGGLE_WALL_BLOCK
})

/** ********** FUNCTION FOR TOGGLE FENCING BLOCK ********** */
export const toggleFencingBlock = () => ({
    type: TOGGLE_FENCING_BLOCK
})