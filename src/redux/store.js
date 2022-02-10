import { createStore, combineReducers } from 'redux'
import userReducer from './reducers/userReducer'

const appReducer = combineReducers({
    userReducer: userReducer
})

export default createStore(appReducer)