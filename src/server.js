require('dotenv').config()

let cors = require('cors')
let fastify = require('fastify')({
  logger: true
})
let isDevelopment = () => process.env.NODE_ENV === 'development'

if (isDevelopment()) {
  fastify.use(cors())
}

fastify.register(require('fastify-swagger'), {
  swagger: {
    info: {
      title: 'Test swagger',
      description: 'testing the fastify swagger api',
      version: '0.1.0'
    },
    host: 'localhost',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
  },
  exposeRoute: isDevelopment()
})

fastify.register(require('./landmarks'))

fastify.listen(process.env.PORT, function(err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`Server listening on ${address}`)
})
