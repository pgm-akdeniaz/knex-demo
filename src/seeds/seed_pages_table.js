const tableName = "pages";

const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex(tableName).truncate();
  await knex(tableName).insert([
    { title: "Home", slug: "home", is_homepage: true, contact: "Home content" },
    {
      title: "About",
      slug: "about",
      is_homepage: false,
      contact: "About content",
    },
    {
      title: "Contact",
      slug: "contact",
      is_homepage: false,
      contact: "Contact content",
    },
  ]);
};

export { seed };
