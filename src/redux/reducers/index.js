import { combineReducers } from 'redux'
import movieReducer from './movieReducer'
import usersReducer from './usersReducer'

export default combineReducers({
	movie: movieReducer,
	users: usersReducer,
})
