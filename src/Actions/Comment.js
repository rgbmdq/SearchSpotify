export const types = {
  SEARCH_COMMENT_RESOLVED: 'SEARCH_COMMENT_RESOLVED',
  SEARCH_COMMENT_REJECTED: 'SEARCH_COMMENT_REJECTED',
  POST_COMMENT_RESOLVED: 'POST_COMMENT_RESOLVED',
  POST_COMMENT_REJECTED: 'POST_COMMENT_REJECTED',
  SEARCH_COMMENT: 'SEARCH_COMMENT',
  POST_COMMENT: 'POST_COMMENT'
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
  
  SearchComments(albumId) {
    return{
      type: types.SEARCH_COMMENT,
      albumId
    }
  },

  PostComment(comment) {
    return{
      type: types.POST_COMMENT,
      comment
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
