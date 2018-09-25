import React from 'react'
import PropTypes from 'prop-types'
import style from './style.scss'



export default class ItemComment extends React.Component {

  static get propTypes() {
    return {
      comment: PropTypes.object,
    }
  }
  
  constructor() {
    super()
  }


  render() {
    return (
      <div className={style.itemComment}>   
        <div className={style.circleContainer}>
          <div className={style.circle} />
        </div>      
        <div className={style.paragraph}>
          <h3>{this.props.comment.email}</h3>
          <p>{this.props.comment.text}</p>
        </div>
      </div>
    )
  }
}
