import { METHODS, HeaderFactory } from './utils'

/**
 * Get album from the application
 * @param {string} album - data
 */

export const GetData = album => {
  return fetch(`${process.env.API_URL}/search?q=${album}`, {
    method: METHODS.GET,
    headers: HeaderFactory()
  })
}


export const GetSpecificAlbum = id => {
  return fetch(`${process.env.API_URL}/album/${id}`, {
    method: METHODS.GET,
    headers: HeaderFactory()
  })
}
