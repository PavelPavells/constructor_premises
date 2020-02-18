import { TOGGLE_COLOR_PICKER, TOGGLE_PALLETTE, SAVE_PROJECT, SETTINGS } from './types';

/** ********** FUNCTION FOR TOGGLE COLOR PICKER ********** */
export const toggleColorPicker = () => ({
    type: TOGGLE_COLOR_PICKER
})

/** ********** FUNCTION FOR TOGGLE PALLETTE ********** */
export const togglePalette = () => ({
    type: TOGGLE_PALLETTE
})

/** ********** FUNCTION FOR SAVE PROJECTS ********** */
export const saveProject = projects => {
    return {
        type: SAVE_PROJECT,
        payload: projects
    }
}

/** ********** FUNCTION FOR TOGGLE SETTINGS ********** */
export const settings = () => ({
    type: SETTINGS
})