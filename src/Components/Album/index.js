import Album from './Album'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  albums: state.Album.albums.items
})

//Redux is responsible for passing the states in to the component "Album"
export default connect(
    mapStateToProps,
    null
  )(Album)

