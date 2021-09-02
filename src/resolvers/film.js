export default {
  Query: {
    getFilms: async (_, __, { db }) => db.film.findAll(),
    getFilmById: async (_, { id }, { db }) => db.film.findByPk(id),
  },
  Mutation: {
    createFilm: async (_, {
      film, times, watched, createdOn,
    }, { db }) => {
      const filmData = await db.film.create({
        film,
        times,
        watched,
        createdOn,
      });

      return filmData;
    },

    updateFilm: async (_, {
      id, film, times, watched, createdOn,
    },
    { db }) => {
      const updateData = await db.film.update({
        film,
        times,
        watched,
        createdOn,
      }, {
        where: {
          id,
        },
      });
      if (updateData) {
        return true;
      }
      return false;
    },

    deleteFilm: async (_, { id },
      { db }) => {
      const deleteData = await db.film.destroy({
        where: {
          id,
        },
      });
      if (deleteData) {
        return true;
      }
      return false;
    },
  },
};
