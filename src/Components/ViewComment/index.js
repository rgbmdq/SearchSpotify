import ViewComment from './ViewComment'
import { withRouter } from 'react-router-dom'
import { actions } from '../../Actions/Comment'
import { actionsAlbums } from '../../Actions/Albums'
import { connect } from 'react-redux'


const mapDispatchToProps = dispatch => ({
  onSearch(albumId) {
    dispatch(actions.SearchComments(albumId))
  },
  onPost(comment){
    dispatch(actions.PostComment(comment))
  },
  onSearchAlbumData(albumId) {
    dispatch(actionsAlbums.AlbumDataSearch(albumId))
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
