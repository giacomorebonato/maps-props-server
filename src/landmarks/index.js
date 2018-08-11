let createLandmark = require('./createLandmark')
let createLandmarkOpts = require('./opts/createLandmarkOpts')
let deleteLandmark = require('./deleteLandmark')
let getLandmarks = require('./getLandmarks')
let getLandmarksOpts = require('./opts/getLandmarksOpts')

const ROUTE = '/landmarks'

module.exports = function(fastify, _opts, next) {
  fastify.delete(ROUTE + '/:id', deleteLandmark)
  fastify.get(ROUTE, getLandmarksOpts, getLandmarks)
  fastify.post(ROUTE, createLandmarkOpts, createLandmark)

  next()
}
