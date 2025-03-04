import knexConfig from "../lib/Knex.js";
import { Model } from "objection";
import UserMeta from "./UserMeta.js";

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

  static get relationMappings() {
    return {
      meta: {
        relation: Model.HasOneRelation,
        modelClass: UserMeta,
        join: {
          from: "users.id",
          to: "user_meta.user_id",
        },
      },
    };
  }
}

export default User;
