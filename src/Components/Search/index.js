import Search from './Search'
import { connect } from 'react-redux'
import { actionsAlbums } from '../../Actions/Albums'
import { withRouter } from 'react-router-dom'


// We Dispatch the Action
const mapDispatchToProps = dispatch => ({
  onSearchSuccess(album) {
    dispatch(actionsAlbums.SearchResolved(album))
  },
  onSearchFailure(error){
    dispatch(actionsAlbums.SearchRejected(error))
  }
})

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Search)
)
