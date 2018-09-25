export const types = {
  SEARCH_ALBUM_RESOLVED: 'SEARCH_ALBUM_RESOLVED',
  SEARCH_ALBUM_REJECTED: 'SEARCH_ALBUM_REJECTED',
  SEARCH_SPECIFIC_RESOLVED: 'SEARCH_SPECIFIC_RESOLVED',
  SEARCH_SPECIFIC_REJECTED: 'SEARCH_SPECIFIC_REJECTED'
}

export const actionsAlbums = {
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
  },
  
  //Album from component "ViewComment"

  AlbumSearchIdResolved(payload) {
    return {
      type: types.SEARCH_SPECIFIC_RESOLVED,
      payload
    }
  },

  AlbumSearchIdRejacted(error) {
    return {
      type: types.SEARCH_SPECIFIC_REJECTED,
      error
    }
  },
}
