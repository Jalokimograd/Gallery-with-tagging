const { Model } = require("objection");
const knex = require("../config/database");
const Category = require("./category");
const Directory = require("./directory");

Model.knex(knex);

class File extends Model {
  static get tableName() {
    return "file";
  }

  static get relationMappings() {
    return {
      categories: {
        relation: Model.ManyToManyRelation,
        modelClass: Category,
        join: {
          from: "file.id",
          through: {
            from: "rel_file_category.file_id",
            to: "rel_file_category.category_id",
          },
          to: "category.id",
        },
      },
      directory: {
        relation: Model.BelongsToOneRelation,
        modelClass: Directory,
        join: {
          from: "file.directory_id",
          to: "directory.id",
        },
      },
    };
  }
}

module.exports = File;
