import { FastifyRequest } from 'fastify'

let psql = require('../psql')
let isValidCoordinates = require('is-valid-coordinates')

/** @param {import('fastify').FastifyRequest} request */
async function createLandmark(request) {
  let { category, lat, lng, name } = request.body

  if (!isValidCoordinates(lng, lat)) {
    throw new Error('Coordinates not valid')
  }

  let { rows } = await psql.query(
    `
    INSERT INTO landmarks
      (category, name, location)
    VALUES
      ($1, $2, ST_GeomFromText('POINT(${lng} ${lat})'))
    RETURNING id`,
    [category, name]
  )

  return rows
}

module.exports = createLandmark
