let createLandmarkOpts = {
  schema: {
    body: {
      type: 'object',
      properties: {
        category: { type: 'string' },
        lat: { type: 'number' },
        lng: { type: 'number' },
        name: { type: 'string' }
      },
      required: ['category', 'lat', 'lng', 'name']
    }
  }
}

module.exports = createLandmarkOpts
