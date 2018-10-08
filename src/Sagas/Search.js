import { GetData } from './../API/Album'
import { actionsAlbums, types } from './../Actions/Albums'
import { call, put, throttle } from 'redux-saga/effects'

function* searchHandler (data){
  try {
    const response = yield call(GetData, data.album)
    if(response.ok) {
        yield put(actionsAlbums.SearchResolved(yield response.json()))
    }
  } catch (e) {
        console.log(e)
        yield put(actionsAlbums.SearchFailure(error))
  }
}

export default function*() {
  yield throttle(7, types.SEARCH_ALBUM, searchHandler)
}