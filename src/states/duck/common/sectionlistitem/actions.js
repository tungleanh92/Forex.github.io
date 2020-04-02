import * as types from './types';

export const showMenu = () => {
    return {
        type: types.SHOW_MENU
    }
}

export const closeMenu = () => {
    return {
        type: types.CLOSE_MENU
    }
}