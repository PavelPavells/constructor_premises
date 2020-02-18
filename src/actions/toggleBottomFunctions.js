import { TOGGLE_ARROW_BACK, TOGGLE_ARROW_GO, TOGGLE_RULES, TOGGLE_LAYERS } from './types';

/** ********** FUNCTION FOR CHANGE LEFT ARROW ********** */
export const toggleArrowBack = () => ({
    type: TOGGLE_ARROW_BACK
})
/** ********** FUNCTION FOR CHANGE RIGHT ARROW ********** */
export const toggleArrowGo = () => ({
    type: TOGGLE_ARROW_GO
})

/** ********** FUNCTION FOR TOGGLE RULES ********** */
export const toggleRules = () => ({
    type: TOGGLE_RULES
})

/** ********** FUNCTION FOR TOGGLE LAYERS ********** */
export const toggleLayers = () => ({
    type: TOGGLE_LAYERS
})