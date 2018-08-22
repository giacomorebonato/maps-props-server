require('dotenv').config()

let cors = require('cors')
let fastify = require('fastify')({
  logger: true
})

if (process.env.NODE_ENV === 'development') {
  fastify.use(cors())
}

fastify.register(require('./landmarks'))

fastify.listen(process.env.PORT, function(err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`Server listening on ${address}`)
})
