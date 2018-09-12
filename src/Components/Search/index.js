import Search from './Search'
import { connect } from 'react-redux'
import { actions } from '../../Actions/Albums'
import { withRouter } from 'react-router-dom'

const mapDispatchToProps = dispatch => ({
  onSearchSuccess(query) {
    dispatch(actions.SearchResolved(query))
  },
  onSearchFailure(error){
    dispatch(actions.SearchRejected(error))
  }
})

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Search)
)
