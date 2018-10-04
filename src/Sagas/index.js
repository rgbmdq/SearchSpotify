import { fork, all } from 'redux-saga/effects'
import Search from './Search'

export default function*() {
  yield all([fork(Search)])
}