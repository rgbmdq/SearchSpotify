import { combineReducers } from 'redux'
import Album from './Albums'
import User from './User'
import Notifications from './Notifications'

export default combineReducers({
  User,
  Notifications,
  Album
})
