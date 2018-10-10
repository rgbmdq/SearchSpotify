import React from 'react'
import PropTypes from 'prop-types'
import style from './style.scss'
import Item from './Item'


// convert the array into Commponent
const arToComponent = (albums) =>{
  if(!albums || albums.length === 0){
    return null;
  }
    return(
        albums.map( (album) => (<Item key={album.id} album={album} />))
    )
}
export default class Album extends React.Component {
  static get propTypes() {
    return {
        albums: PropTypes.array,
    }
  }
  render() {
    return (
      <div  className={style.itemContainer}>
        {arToComponent(this.props.albums)}
      </div>
    )
  }
}
