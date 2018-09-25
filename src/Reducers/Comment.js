/**
 * Import the actions
 */
import { types } from '../Actions/Comment'


/*
 the state always will be an obj
 here we put all the comment
*/
export default (state = { comments:[]}, action) => {
  switch (action.type) {
    case types.SEARCH_COMMENT_RESOLVED:
      console.log(action.payload)
      return{
        ...state,
        comments: action.payload
    }

    case types.SEARCH_COMMENT_REJECTED:
      return {
        ...state,
        error: action.error
      }

    // with "..." clone the element and add the action what we want
    case types.POST_COMMENT_RESOLVED:
      return{

        ...state,
       comments: [...state.comments, action.comment]
      }
    
      case types.POST_COMMENT_REJECTED:
        return{
          ...state,
          error: action.error
        }
    default:
      return state
  }
}