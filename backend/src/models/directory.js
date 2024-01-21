const { Model } = require("objection");
const knex = require("../config/database");

Model.knex(knex);

class Directory extends Model {
  static get tableName() {
    return "directory";
  }
}

module.exports = Directory;
