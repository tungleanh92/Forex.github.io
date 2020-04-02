import * as types from './types';

var initialState = true;
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_MENU:
            return !state;
        case types.CLOSE_MENU:
            state = false;
            return state;
        default:
            return state
    }
}

export default reducer