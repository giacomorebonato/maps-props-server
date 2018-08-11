exports.shorthands = undefined

const LANDMARKS_TABLE = 'landmarks'

exports.up = pgm => {
  pgm.createType('category', ['apartment', 'company'])
  pgm.createTable(LANDMARKS_TABLE, {
    id: 'id',
    category: { type: 'category', notNull: true },
    location: { type: 'GEOGRAPHY(Point)', notNull: true },
    name: { type: 'varchar(1000)', notNull: true },
    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp')
    }
  })
}

exports.down = pgm => {
  pgm.dropTable(LANDMARKS_TABLE)
}