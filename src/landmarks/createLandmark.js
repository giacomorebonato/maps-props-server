let psql = require('../psql')
let isValidCoordinates = require('is-valid-coordinates')

async function createLandmark(request, reply) {
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
