
import thunk from 'redux-thunk'
import rootReducer from './reducer'
import { createStore, applyMiddleware } from 'redux'

const initialState = {
    matrix: [['', '', ''], ['', '', ''], ['', '', '']],
    flag: 'x',
    checked: [[false, false, false], [false, false, false], [false, false, false]],
    finish: false
}

const middleware = [thunk]

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
)

export default store;