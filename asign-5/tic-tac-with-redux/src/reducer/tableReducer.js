import { NEW_STATE, UPDATE, FINISH } from "../action/types"

const initialState = {
    matrix: [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
    flag: 'x',
    checked: [[false, false, false], [false, false, false], [false, false, false]],
    finish: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case NEW_STATE:
            return {
                ...state,
            }
        case UPDATE:
            return {
                ...state,
                matrix: action.matr,
                flag: action.fl,
                checked: action.check,
                finish: action.fin
            }
        case FINISH:
            return {
                ...state,
                finish:action.fin
            }

        default:
            return {
                ...state
            }
    }
}