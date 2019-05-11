import {SAVE_SETTINGS, RESET_SETTINGS} from './actionTypes'

export const saveSettingsAction = settings => dispatch => {
    dispatch({type: SAVE_SETTINGS, payload: settings})
}

export const resetSettingsAction = () => dispatch => {
    dispatch({type: RESET_SETTINGS})
}