import { fork, all } from 'redux-saga/effects'
import Search from './Search'
import SearchComment from './SearchComment';
import SearchAlbumData from './SearchAlbumData';
import PostComment from './PostComment';

export default function*() {
  yield all([fork(Search),fork(SearchComment),fork(SearchAlbumData),fork(PostComment)])
}