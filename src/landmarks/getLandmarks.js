let psql = require('../psql')
let isValidCoordinates = require('is-valid-coordinates')

async function getLandmarks(request, reply) {
  let { lat, lng } = request.query

  if (!isValidCoordinates(lat, lng)) {
    throw new Error('Coordinates not valid')
  }

  let km = 1000 * 50
  let { rows } = await psql.query(`
    SELECT
      id, category, name, ST_AsGeoJSON(location) AS location
    FROM
      landmarks
    WHERE
      ST_DWithin(location, ST_MakePoint(${lng}, ${lat})::geography, ${km});
  `)

  return {
    center: [lng, lat],
    landmarks: rows.map(row => ({
      ...row,
      location: JSON.parse(row.location).coordinates
    }))
  }
}

module.exports = getLandmarks
