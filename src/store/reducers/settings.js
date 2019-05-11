import * as R from 'ramda'
import {SAVE_SETTINGS, RESET_SETTINGS} from '../actions/actionTypes'

const initialState = {
    username: 'username',
    interfacecolor: 'white',
    clockdisplay: '12',
    sendmessagetype: false,
    language: 'eng'
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case SAVE_SETTINGS:
            return R.merge(state, {
                username: payload.username,
                interfacecolor: payload.interfacecolor,
                clockdisplay: payload.clockdisplay,
                sendmessagetype: payload.sendmessagetype,
                language: payload.language
            })
        case RESET_SETTINGS:
            console.log('reset reduces')
            return state = initialState
        default: return state
    }
}