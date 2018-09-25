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
        error: action.error
      }
      

    case types.SEARCH_SPECIFIC_RESOLVED:
    return {
      ...state,
      album: action.payload
    }

    case types.SEARCH_SPECIFIC_REJECTED:
      return{
        ...state,
        error: action.error
      }

    default:
      return state
  }
}