
exports.up = function(knex) {
    return knex.schema.createTable("movies", tbl => {
        tbl.increments('movie_id');
        tbl.string('imdb_id');
        tbl.string('title')
          .notNullable();
        tbl.text('description');
        tbl.string('release_date');
        tbl.string('rating');
        tbl.string('image_url');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('movies');
  };
  