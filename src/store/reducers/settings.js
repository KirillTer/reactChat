import * as R from 'ramda'
import {SAVE_SETTINGS, RESET_SETTINGS} from '../actions/actionTypes'

const initialState = {
    username: 'username',
    interfacecolor: 'white',
    clockdisplay: '12',
    sendmessagetype: '0',
    language: 'eng'
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case SAVE_SETTINGS:
            return R.merge(state, payload)
        case RESET_SETTINGS:
            console.log('reset reduces')
            return state = initialState
        default: return state
    }
}