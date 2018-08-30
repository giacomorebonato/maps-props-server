let psql = require('../psql')

/**
 * @param {import('fastify').FastifyRequest} request
 * @param {import('fastify').FastifyReply} reply
 */
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
