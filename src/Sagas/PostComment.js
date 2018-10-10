import { PostCommentData } from './../API/Comment'
import { actions, types } from './../Actions/Comment'
import { call, put, throttle } from 'redux-saga/effects'

function* postCommentHandler (data){
  try {
    const response = yield call(PostCommentData ,data.comment.email ,data.comment.inputText ,data.comment.albumId )
    if(response.ok) {
        yield put(actions.PostCommentResolved(yield response.json()))
    }
  } catch (e) {
        console.log(e)
        yield put(actions.PostCommentRejected(error))
  }
}

export default function*() {
  yield throttle(7, types.POST_COMMENT, postCommentHandler)
}