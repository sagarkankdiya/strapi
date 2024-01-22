// Knex.js
// --------------
//     (c) 2013-present Tim Griesser
//     Knex may be freely distributed under the MIT license.
//     For details and documentation:
//     http://knexjs.org

import knex, { knex as _knex } from './lib/index'

/**
 * These export configurations enable JS and TS developers
 * to consume knex in whatever way best suits their needs.
 * Some examples of supported import syntax includes:
 * - `const knex = require('knex')`
 * - `const { knex } = require('knex')`
 * - `import * as knex from 'knex'`
 * - `import { knex } from 'knex'`
 * - `import knex from 'knex'`
 */
_knex = knex
knex = knex

export default knex
