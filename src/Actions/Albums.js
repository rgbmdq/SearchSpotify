export const types = {
  SEARCH_ALBUM_RESOLVED: 'SEARCH_ALBUM_RESOLVED',
  SEARCH_LIST_RESOLVED: 'SEARCH_LIST_RESOLVED'
}

export const actions = {
  /**
   * @param {object} response - Fetch API response
   * @param {object} payload - Fetch API Payload encoded as JSON
   */
  SearchResolved(payload) {
    return {
      type: types.SEARCH_ALBUM_RESOLVED,
      payload
    }
  },

  SearchRejected(error) {
    return {
      type: types.SEARCH_ALBUM_REJECTED,
      error
    }
  }
}
