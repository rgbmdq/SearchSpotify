import { METHODS, HeaderFactory } from './utils'

/**
 * Get id from the application
 * @param {string} id - data to get Data Comment
 */

export const GetCommentData = id => {
  return fetch(`${process.env.API_URL}/comments/${id}`, {
    method: METHODS.GET,
    headers: HeaderFactory()
  })
}

/**
 * Create A New Comment
 * @param {email} Comment - Comment Data to Create
 * @param {text} Comment - Comment Data to Create
 * @param {albumId} Comment - Comment Data to Create
 */

export const PostCommentData = (email, text, albumId) => {
  return fetch(`${process.env.API_URL}/comments`, {
    method: METHODS.POST,
    headers: HeaderFactory(),
    body: JSON.stringify({ email, text, albumId })
  })
}
