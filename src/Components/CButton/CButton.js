import React from 'react'
import PropTypes from 'prop-types'
import style from './style.scss'


export default class Album extends React.Component {
  static get propTypes() {
    return {
        //onClick: PropTypes.func,
        text: PropTypes.string.isRequired
    }
  }

  render() {
    return (
      <button className={style.buttonView}>
        {this.props.text}
      </button>
    )
  }
}
