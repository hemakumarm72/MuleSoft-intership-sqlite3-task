export default {
  Query: {
    getProfile: async (_, __, { db }) => db.profile.findAll(),
    getProfileById: async (_, { id }, { db }) => db.profile.findByPk(id),
  },

  Mutation: {
    createProfile: async (_, {
      username, email, gender, age, address, education, mobileno, linkedin, description,
    }, { db }) => {
      const profile = await db.profile.create({
        username,
        email,
        gender,
        age,
        address,
        education,
        mobileno,
        linkedin,
        description,

      });
      return profile;
    },
    updateProfile: async (_, {
      id, username, email, gender, age, address, education, mobileno, linkedin, description,
    },
    { db }) => {
      const updateprofiledata = await db.profile.update({
        username,
        email,
        gender,
        age,
        address,
        education,
        mobileno,
        linkedin,
        description,
      }, {
        where: {
          id,
        },

      });
      if (updateprofiledata) {
        return true;
      }
      return false;
    },

    deleteProfile: async (_, { id },
      { db }) => {
      const deleteprofiledata = await db.profile.destroy({
        where: {
          id,
        },
      });
      if (deleteprofiledata) {
        return true;
      }
      return false;
    },

  },

};
