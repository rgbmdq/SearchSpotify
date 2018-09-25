import React from 'react'
import PropTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress'
import style from './style.scss'
import CButton from './../../CButton/CButton'
import ButtonBack from '../../CButton/ButtonBack/ButtonBack';

export default class Item extends React.Component {
  static get propTypes() {
    return {
        redirect: PropTypes.bool,
        album: PropTypes.object,
        history: PropTypes.object
    }
  }
  constructor() {
    super()
    this.back = this.back.bind(this)
    this.viewComment = this.viewComment.bind(this)
  }
  //set buttons redirect
  viewComment() {
    const id = this.props.album.id;
    this.props.history.push('/ViewComment/'+ id )
  }
  back(){
    this.props.history.push('/')
  }

  render() {
    return this.props.album ? (
      <div className={style.itemView}>
        <div className={style.itemImg}><img src={this.props.album.images[0].url} /></div>
        <div className={style.dataItem}>
          <h3>{this.props.album.artists[0].name}</h3>
          <h1>{this.props.album.name}</h1>
          <div className={style.botContainer}>            
            <i id={style.iconVol} className={"material-icons"}>volume_up</i>         
            <div className={style.listen}>
              <a id={style.textVol} href={this.props.album.artists[0].external_urls.spotify} target={"_blank"}>Listen on Spotify</a>
            </div>
            <div className={style.CButtonContainer}>
              { 
                this.props.redirect == false
                ? (<ButtonBack text={"BACK TO SEARCH"} className={style.CButton} onClick={this.back} />)
                : (<CButton text={"VIEW COMMENTS"} className={style.CButton} onClick={this.viewComment} />)      
              }
            </div>                    
          </div>
        </div>
      </div>
    ) : (
      <div className={style.circularProgressContainer}> 
        <CircularProgress className={style.circularProgress} />
      </div>
    )
  }
}

