import Album from './Album'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => ({
  albums: state.Album.albums.items
})

//Redux se encarga de pasarle los states a el componente "Album"
export default withRouter(
  connect(
    mapStateToProps,
    null
  )(Album)
)
