const { Model } = require("objection");
const knex = require("../config/database");
const Role = require("./role");

Model.knex(knex);

class User extends Model {
  static get tableName() {
    return "user";
  }

  static get relationMappings() {
    return {
      role: {
        relation: Model.BelongsToOneRelation,
        modelClass: Role,
        join: {
          from: "user.role_id",
          to: "role.id",
        },
      },
    };
  }
}

module.exports = User;
