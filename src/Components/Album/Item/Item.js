import React from 'react'
import PropTypes from 'prop-types'
import style from './style.scss'
import CButton from './../../CButton/CButton'
export default class Item extends React.Component {
  static get propTypes() {
    return {
        album: PropTypes.object,
    }
  }

  constructor() {
    super()
  }
  render() {
    return (
      <div className={style.itemView}>
        <div className={style.itemImg}><img src={this.props.album.images[1].url} /></div>
        <div className={style.dataItem}>
          <h3>{this.props.album.artists[0].name}</h3>
          <h1>{this.props.album.name}</h1>
          <div className={style.botContainer}>  
            
            <i id={style.iconVol} className={"material-icons"}>volume_up</i>         
            <div className={style.listen}>
              <a id={style.textVol} href={this.props.album.artists[0].href}>Listen on Spotify</a>
            </div>
            <div className={style.CButtonContainer}>
              <CButton text={"VIEW COMMENTS"} className={style.CButton} /* onClick={this.props.onClick} *//>
            </div>
                    
          </div>
        </div>
      </div>
    )
  }
}

