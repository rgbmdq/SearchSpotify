import { combineReducers } from 'redux'
import Album from './Albums'
import Comment from './Comment'
import User from './User'
import Notifications from './Notifications'

/**
 * The combineReducers helper function turns an object whose 
 * values are different reducing functions into a single 
 * reducing function you can pass to createStore
 */
export default combineReducers({
  User,
  Notifications,
  Album,
  Comment
})
