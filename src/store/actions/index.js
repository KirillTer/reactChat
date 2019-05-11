import {SAVE_SETTINGS, RESET_SETTINGS} from './actionTypes'

export const saveSettings = settings => dispatch => {
    dispatch({type: SAVE_SETTINGS, payload: settings})
}

export const resetSettings = () => dispatch => {
    dispatch({type: RESET_SETTINGS})
}