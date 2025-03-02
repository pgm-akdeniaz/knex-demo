import knexConfig from "../lib/Knex.js";
import { Model } from "objection";

// instantiate the model
Model.knex(knexConfig);

// define the Pages model
export default class Page extends Model {
  static get tableName() {
    return "pages";
  }

  static get idColumn() {
    return "id";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["title", "slug"],
      properties: {
        id: { type: "integer" },
        title: { type: "string", minLength: 1, maxLength: 255 },
        slug: { type: "string", minLength: 1, maxLength: 255 },
        content: { type: "string" },
        is_homepage: { type: "boolean" },
      },
    };
  }
}
