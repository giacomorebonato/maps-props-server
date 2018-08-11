let psql = require('../psql')

async function deleteLandmark(request, reply) {
  let { id } = request.params
  await psql.query(
    `
    DELETE FROM
      landmarks
    WHERE
      id = $1`,
    [id]
  )

  reply.code(200)
}

module.exports = deleteLandmark
