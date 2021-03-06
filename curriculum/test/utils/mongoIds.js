const Joi = require('joi');
const findIndex = require('lodash/findIndex');
Joi.objectId = require('joi-objectid')(Joi);

const schema = Joi.objectId();
const duplicatedProjectIds = [
  'bd7158d8c442eddfaeb5bd18',
  '587d78af367417b2b2512b03',
  '587d78af367417b2b2512b04',
  '587d78b0367417b2b2512b05',
  'bd7158d8c242eddfaeb5bd13'
];

class MongoIds {
  constructor() {
    this.knownIds = [];
  }
  check(id, title) {
    try {
      schema.validate(id);
    } catch {
      throw Error(`Expected a valid ObjectId for ${title}, but got ${id}`);
    }

    const idIndex = findIndex(this.knownIds, existing => id === existing);
    if (idIndex !== -1 && !duplicatedProjectIds.includes(id)) {
      throw Error(`The id for challenge ${title} appears more than once.
      With the exception of duplicatedProjectIds this should not happen.
    `);
    }
    this.knownIds = [...this.knownIds, id];
  }
}

module.exports = MongoIds;
