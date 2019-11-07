import axios from 'axios'

import * as types from '../action-types'

export const init = () => (dispatch) => {
    axios({
        method: 'post',
        url: '/init',
        data: {}
    }).then((response) => {
        dispatch({
            type: types.INIT_FETCH,
            payload: response.data
        })
    })
}

export const change = (name, value) => (dispatch) => {
    dispatch({
        type: types.CHANGE,
        payload: {
            [name]: value
        }
    })
}
/* 
const omit = (payload) => {
    const newObj = {...payload};
    [
        "lastNameWife",
        "firstNameWif",
        "middleNameWife"

    ].forEach((key) => {
        delete newObj[key];
    })
} */

export const send = () => (dispatch, getState) => {
    axios({
        method: 'post',
        url: '/send',
        data: getState().form.payload
    })
}
