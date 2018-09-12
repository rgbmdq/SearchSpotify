import { types } from '../Actions/Albums'

export default (state = {albums:{items:[]}}, action) => {
  switch (action.type) {
    case types.SEARCH_ALBUM_RESOLVED:
      return {
        ...state,
        ...action.payload
      }

    case types.SEARCH_ALBUM_REJECTED:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}