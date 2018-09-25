import ViewComment from './ViewComment'
import { withRouter } from 'react-router-dom'
import { actions } from '../../Actions/Comment'
import { actionsAlbums } from '../../Actions/Albums'
import { connect } from 'react-redux'


const mapDispatchToProps = dispatch => ({
  onSearchCommentSuccess(id) {
    dispatch(actions.CommentSearchResolved(id))
  },
  onSearchCommentFailure(error){
    dispatch(actions.CommentSearchRejected(error))
  },
  onSearchAlbumDataSuccess(album) {
    dispatch(actionsAlbums.AlbumSearchIdResolved(album))
  },
  onSearchAlbumDataFailure(error) {
    dispatch(actionsAlbums.AlbumSearchIdRejacteded(error))
  },
  onPostCommentSuccess(comment) {
    dispatch(actions.PostCommentResolved(comment))
  },
  onPostCommentFailure(error) {
    dispatch(actions.PostCommentRejected(error))
  },
})


const mapStateToProps = state => ({
  album: state.Album.album,
  comments: state.Comment.comments
})

//Redux will pass the state in to "ViewComment"
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ViewComment)
)
