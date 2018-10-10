import React from 'react'
import PropTypes from 'prop-types'
import style from './style.scss'

export default class CommentForm extends React.Component {

  static get propTypes() {
    return {
      onSubmit: PropTypes.func
    }
  }
  
  constructor() {
    super()
    this._submit = this._submit.bind(this)
    this._updateInputs = this._updateInputs.bind(this)
    this._validateEmail = this._validateEmail.bind(this)
    this._validateInputs = this._validateInputs.bind(this)
    this._validateText = this._validateText.bind(this)
    this.state = {
      email: '',
      textInput: '',
      validations: this._validateInputs()
    }
  }
  _validateInputs(email = '', textInput = '') {
    return {
      email: this._validateEmail(email),
      textInput: this._validateText(textInput)
    }
  }

  /**
   * Validate Email Text
   * @param {string} email - Email Input
   * @return {boolean} - Input is Valid
   */
  _validateEmail(email = '') {
    if (email === '') return { valid: false, text: '' }
    else if (!/\S+@\S+\.\S+/.test(email))
      return { valid: false, text: 'This is not a valid email' }
    else return { valid: true, text: '' }
  }

  /**
   * Validate Text
   * @param {string} Text - Text
   * @return {boolean} - Input is Valid
   */
  _validateText(textInput = '') {
    if (textInput === '') return { valid: false, text: '' }
    else if (textInput.length < 5)
      return { valid: false, text: 'The Text is too short' }
    else return { valid: true, text: '' }
  }

  _updateInputs(email, textInput) {
    const validations = this._validateInputs(email, textInput)
    this.setState({
      email,
      textInput,
      validations,
      isValid: Object.keys(validations).every(key => validations[key])
    })
  }

  _submit() {
    this.props.onSubmit(this.state.email, this.state.textInput)
  }


  render() {
    return (
      <div className={style.formComment}>
        
        <div className={style.topContainer}>
          <div className={style.circleContainer}>
            <div className={style.circle} />
          </div>
          <div className={style.inputContainer}>
            <input 
              className={style.inputEmail} 
              id={'inputEmail'} 
              type={"email"} 
              placeholder={'e-mail'}
              value={this.state.email}
              onChange={val => this._updateInputs(val.target.value, this.state.textInput)}
            /> 
            <input 
              className={style.inputText} 
              id={'inputText'}
              type={'text'} 
              placeholder={'write your comment'}
              value={this.state.textInput}
              onChange={val => this._updateInputs(this.state.email, val.target.value)} 
            /> 
          </div> 
        </div>
        <div className={style.botContainer}>
          <button 
            className={style.buttonAdd} 
            disabled={!this.state.isValid}
            onClick={this._submit}>ADD
          </button>  
        </div>
      </div>
    )
  }
}
