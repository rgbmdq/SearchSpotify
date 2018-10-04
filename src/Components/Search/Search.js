import React from 'react'
import PropTypes from 'prop-types'
import style from './style.scss'

export default class Search extends React.Component {
  static get propTypes() {
    return {
      onSearch: PropTypes.func
    }
  }

  constructor() {
    super()
      this.inputChanged = this.inputChanged.bind(this),
      this.onSearch = this.onSearch.bind(this) 
  }
  
  inputChanged(e) {
    this.setState({
        album: e.target.value
    })
  }
  
  onSearch() {
    if(this.state.album && this.state.album.trim().length > 3) {
      this.props.onSearch(this.state.album)
  }
  }
  render() {
    return (
      <div className={style.inputContainer}>
        <i onClick={this.onSearch} className={"material-icons"}>search</i>
        <input onKeyUp={this.onSearch} className={style.inputView} id='inputSearch' type='search' onChange={this.inputChanged} placeholder='Search' />
      </div>
    )
  }
}
