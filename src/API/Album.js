import { METHODS, HeaderFactory } from './utils'

/**
 * Get query from the application
 * @param {string} query - data
 */

export const GetData = query => {
  return fetch(`${process.env.API_URL}/search?q=${query}`, {
    method: METHODS.GET,
    headers: HeaderFactory()
  })
}
