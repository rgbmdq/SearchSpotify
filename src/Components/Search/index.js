import Search from './Search'
import { connect } from 'react-redux'
import { actionsAlbums } from '../../Actions/Albums'
import { withRouter } from 'react-router-dom'


// We Dispatch the Action
const mapDispatchToProps = dispatch => ({
  onSearch(album) {
    dispatch(actionsAlbums.Search(album))
  }
})

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Search)
)
