import knexConfig from "../lib/Knex.js";
import { Model } from "objection";
<<<<<<< HEAD
import UserMeta from "./UserMeta.js";
=======
>>>>>>> 4ba4e28f173cfa8b554d3b43e2b6d6c6811f1c32

// instantiate the model
Model.knex(knexConfig);

// define the NavigationItem model
class User extends Model {
  static get tableName() {
    return "users";
  }

  static get idColumn() {
    return "id";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["firstname", "lastname", "bio"],
      properties: {
        id: { type: "integer" },
        firstname: { type: "string", minLength: 1, maxLength: 255 },
        lastname: { type: "string", maxLength: 255 },
        bio: { type: "string", minLength: 1 },
      },
    };
  }
<<<<<<< HEAD

  static get relationMappings() {
    return {
      meta: {
        relation: Model.HasOneRelation,
        modelClass: UserMeta,
        join: {
          from: "users.id",
          to: "user_meta.user_id",
=======
  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: UserMeta,
        join: {
          from: "user_meta.user_id",
          to: "users.id",
>>>>>>> 4ba4e28f173cfa8b554d3b43e2b6d6c6811f1c32
        },
      },
    };
  }
}

export default User;
