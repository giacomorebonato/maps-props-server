exports.shorthands = undefined

const DAFTS_TABLE = 'dafts'
const DAFT_DEAL = 'daft_deal'

/**
 * @typedef {import('node-pg-migrate').MigrationBuilder} MigrationBuilder*
 * @param {MigrationBuilder} pgm
 */
exports.up = pgm => {
  pgm.createType(DAFT_DEAL, ['sale', 'rent'])
  pgm.createTable(DAFTS_TABLE, {
    id: 'id',
    daftId: {
      type: 'bigint',
      notNull: true,
      unique: true
    },
    cost: {
      notNull: true,
      type: 'integer'
    },
    dealType: {
      type: DAFT_DEAL,
      notNull: true
    },
    squareMeters: {
      type: 'integer',
      notNull: false
    },
    url: { type: 'text', notNull: true },
    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp')
    }
  })
}

exports.down = pgm => {
  pgm.dropTable(DAFTS_TABLE)
}
