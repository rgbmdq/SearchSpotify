import { GetData } from './../API/Album'
import { actionsAlbums, types } from './../Actions/Albums'
import { call, put, takeEvery } from 'redux-saga/effects'

function* searchHandler (data){
  try {
    console.log(data.album)
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
  yield takeEvery(types.SEARCH_ALBUM, searchHandler)
}