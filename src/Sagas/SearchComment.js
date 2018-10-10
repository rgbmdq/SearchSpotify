import { GetCommentData } from './../API/Comment'
import { actions, types } from './../Actions/Comment'
import { call, put, throttle } from 'redux-saga/effects'

function* searchCommentHandler (albumId){
  try {
    const response = yield call(GetCommentData, albumId)
    if(response.ok) {
        yield put(actions.CommentSearchResolved(yield response.json()))
    }
  } catch (e) {
        console.log(e)
        yield put(actions.CommentSearchRejected(e))
  }
}

export default function*() {
  yield throttle(7, types.SEARCH_COMMENT, searchCommentHandler)
}