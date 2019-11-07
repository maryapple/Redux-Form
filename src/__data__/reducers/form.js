import * as types from '../action-types'

const defaultState = {
    payload: {}
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case types.INIT_FETCH: {
            return {
                payload: action.payload
            }
        }
        case types.CHANGE: {
            return {
                payload: {
                    ...state.payload,
                    ...action.payload
                }
            }
        }
        default: {
            return state
        }
    }
}
