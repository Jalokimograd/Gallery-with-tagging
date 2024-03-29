const { Model } = require("objection");
const knex = require("../config/database");

Model.knex(knex);

class Category extends Model {
  static get tableName() {
    return "category";
  }
}

module.exports = Category;
