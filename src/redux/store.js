import { createStore, applyMiddleware } from 'redux'
import reducers from './reducer'
import state from './state'
import thunk from 'redux-thunk'



export default createStore(reducers, state, applyMiddleware(thunk))