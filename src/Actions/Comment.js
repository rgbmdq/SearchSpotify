export const types = {
  SEARCH_COMMENT_RESOLVED: 'SEARCH_COMMENT_RESOLVED',
  SEARCH_COMMENT_REJECTED: 'SEARCH_COMMENT_REJECTED',
  POST_COMMENT_RESOLVED: 'POST_COMMENT_RESOLVED',
  POST_COMMENT_REJECTED: 'POST_COMMENT_REJECTED',
}

export const actions = {
  /**
   * @param {object} response - Fetch API response
   * @param {object} payload - Fetch API Payload encoded as JSON
   */
  CommentSearchResolved(payload) {
    return {
      type: types.SEARCH_COMMENT_RESOLVED,
      payload
    }
  },

  CommentSearchRejected(error) {
    return {
      type: types.SEARCH_COMMENT_REJECTED,
      error
    }
  },

  PostCommentResolved(comment) {
    return {
      type: types.POST_COMMENT_RESOLVED,
      comment
    }
  },

  PostCommentRejected(error) {
    return {
      type: types.POST_COMMENT_REJECTED,
      error
    }
  }
}
