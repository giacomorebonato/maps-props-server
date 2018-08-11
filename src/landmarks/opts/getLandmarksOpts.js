let getLandmarkOpts = {
  schema: {
    querystring: {
      lat: { type: 'number' },
      lng: { type: 'number' }
    },
    required: ['lat', 'lng']
  }
}

module.exports = getLandmarkOpts
