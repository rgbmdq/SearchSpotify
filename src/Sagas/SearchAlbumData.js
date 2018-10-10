import { GetSpecificAlbum } from './../API/Album'
import { actionsAlbums, types } from './../Actions/Albums'
import { call, put, throttle } from 'redux-saga/effects'

function* searchAlbumDataHandler (album){
  try {
    const response = yield call(GetSpecificAlbum, album.albumId)
    if(response.ok) {
        yield put(actionsAlbums.AlbumSearchIdResolved(yield response.json()))
    }
  } catch (e) {
        console.log(e)
        yield put(actionsAlbums.AlbumSearchIdRejacteded(error))
  }
}

export default function*() {
  yield throttle(7, types.SEARCH_ALBUM_DATA, searchAlbumDataHandler)
}