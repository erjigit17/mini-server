const fastify = require('fastify')({ logger: true })
fastify.register(require('fastify-swagger'), {
  exposeRoute: true,
  routePrefix: '/docs',
  swagger: {
    info: {title: 'fastify-api'}
  },
})
const helmet = require('fastify-helmet')
fastify.register(require('./routes/items'))

const PORT = 5000


fastify.register(
  helmet,
  { contentSecurityPolicy: false }
)


const start = async () => {
  try {
    await fastify.listen(PORT)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
