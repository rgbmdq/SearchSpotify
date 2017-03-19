import { ResolvedActionFactory, RejectedActionFactory } from './utils'

export const types = {
  LOGOUT_INTENT: 'LOGOUT_INTENT',

  AUTHENTICATE_INTENT: 'AUTHENTICATE_INTENT',
  AUTHENTICATE_INTENT_RESOLVED: 'AUTHENTICATE_INTENT_RESOLVED',
  AUTHENTICATE_INTENT_REJECTED: 'AUTHENTICATE_INTENT_REJECTED',

  USER_CREATE_INTENT: 'USER_CREATE_INTENT',
  USER_CREATE_INTENT_RESOLVED: 'USER_CREATE_INTENT_RESOLVED',
  USER_CREATE_INTENT_REJECTED: 'USER_CREATE_INTENT_REJECTED',

  USER_UPDATE_INTENT: 'USER_UPDATE_INTENT',
  USER_UPDATE_INTENT_RESOLVED: 'USER_UPDATE_INTENT_RESOLVED',
  USER_UPDATE_INTENT_REJECTED: 'USER_UPDATE_INTENT_REJECTED',

  USER_ACTIVATE_INTENT: 'USER_ACTIVATE_INTENT',
  USER_ACTIVATE_INTENT_RESOLVED: 'USER_ACTIVATE_INTENT_RESOLVED',
  USER_ACTIVATE_INTENT_REJECTED: 'USER_ACTIVATE_INTENT_REJECTED',
}

export const actions = {
  /**
   * Generates an Logout Action
   */
  Logout() {
    return { type: types.LOGOUT_INTENT }
  },

  /**
   * Generates an Authentication Action
   * @param {string} email - Email to log into the application
   * @param {string} password - Password to log into the application
   */
  Authenticate(email, password) {
    return {
      type: types.AUTHENTICATE_INTENT,
      data: { email, password }
    }
  },
  
  /**
   * Generates an Authentication Resolved Action
   * @param {object} response - Fetch API response
   * @param {object} payload - Fetch API Payload encoded as JSON
   */
  AuthenticateResolved(response, payload) {
    return ResolvedActionFactory(types.AUTHENTICATE_INTENT_RESOLVED, response, payload)
  },
  
  /**
   * Generates an Authentication Rejected Action
   * @param {object} error - Fetch API response
   * @param {object} payload - Fetch API Payload encoded as JSON
   */
  AuthenticateRejected(error, payload) {
    return RejectedActionFactory(types.AUTHENTICATE_INTENT_REJECTED, error, payload)
  },

  /**
   * Generates an User Create Action
   * @param {object} data - Data required to create an user
   */
  UserCreate(data) {
    return {
      type: types.USER_CREATE_INTENT,
      data
    }
  },

  /**
   * Generates an User Create Resolved Action
   * @param {object} response - Fetch API response
   * @param {object} payload - Fetch API Payload encoded as JSON
   */
  UserCreateResolved(response, payload) {
    return ResolvedActionFactory(types.USER_CREATE_INTENT_RESOLVED, response, payload)
  },

  /**
   * Generates an User Create Rejected Action
   * @param {object} error - Fetch API response
   * @param {object} payload - Fetch API Payload encoded as JSON
   */
  UserCreateRejected(error, payload) {
    return RejectedActionFactory(types.USER_CREATE_INTENT_REJECTED, error, payload)
  },

  /**
   * Generates an User Update Action
   * @param {object} data - Data required to update an user
   */
  UserUpdate(data) {
    return {
      type: types.USER_UPDATE_INTENT,
      data
    }
  },

  /**
   * Generates an User Update Resolved Action
   * @param {object} response - Fetch API response
   * @param {object} payload - Fetch API Payload encoded as JSON
   */
  UserUpdateResolved(response, payload) {
    return ResolvedActionFactory(types.USER_UPDATE_INTENT_RESOLVED, response, payload)
  },

  /**
   * Generates an User Update Rejected Action
   * @param {object} error - Fetch API response
   * @param {object} payload - Fetch API Payload encoded as JSON
   */
  UserUpdateRejected(error, payload) {
    return RejectedActionFactory(types.USER_UPDATE_INTENT_REJECTED, error, payload)
  },

  /**
   * Generates an User Activate Action
   * @param {object} token - Token to activate an user
   */
  UserActivate(token) {
    return {
      type: types.USER_ACTIVATE_INTENT,
      token
    }
  },

  /**
   * Generates an User Activate Resolved Action
   * @param {object} response - Fetch API response
   * @param {object} payload - Fetch API Payload encoded as JSON
   */
  UserActivateResolved(response, payload) {
    return ResolvedActionFactory(types.USER_ACTIVATE_INTENT_RESOLVED, response, payload)
  },

  /**
   * Generates an User Update Rejected Action
   * @param {object} error - Fetch API response
   * @param {object} payload - Fetch API Payload encoded as JSON
   */
  UserActivateRejected(error, payload) {
    return RejectedActionFactory(types.USER_ACTIVATE_INTENT_REJECTED, error, payload)
  }
}