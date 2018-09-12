import React from 'react'
import PropTypes from 'prop-types'
import style from './style.scss'
import { GetData } from '../../API/Album'

export default class Search extends React.Component {
  static get propTypes() {
    return {
      onSearchSuccess: PropTypes.func,   
      onSearchFailure: PropTypes.func
    }
  }

  constructor() {
    super()
      this.inputChanged = this.inputChanged.bind(this),
      this.onSearch = this.onSearch.bind(this) 
  }
  
  inputChanged(e) {
    this.setState({
        query: e.target.value
    })
  }

  onSearch() {
    if(this.state.query.length > 3) {
      GetData(this.state.query)
      .then(response => {
          response.json().then(response => this.props.onSearchSuccess(response))
      })
      .catch(error => this.props.onSearchFailure(error))}
  }

  render() {
    return (
      <div className={style.imputContainer}>
        <i onClick={this.onSearch} className={"material-icons"}>search</i>
        <input onKeyUp={this.onSearch} className={style.imputView} id='inputSearch' type='search' onChange={this.inputChanged} placeholder='Search' />
      </div>
    )
  }
}
