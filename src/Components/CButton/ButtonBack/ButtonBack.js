import React from 'react'
import PropTypes from 'prop-types'
import style from './style.scss'


export default class ButtonBack extends React.Component {
  static get propTypes() {
    return {     
      onClick: PropTypes.func,
      text: PropTypes.string.isRequired
    }
  }
  render() {
    return (
      <button className={style.buttonView} onClick={this.props.onClick}>
        <i id={style.iconLeft} className={"material-icons"}>chevron_left</i> <p className={style.text}>{this.props.text}</p>
      </button>
    )
  }
  
}
