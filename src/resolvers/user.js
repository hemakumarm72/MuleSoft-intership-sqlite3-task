import bcrypt from 'bcrypt';

export default {
  Query: {
    getUser: async (_, __, { db }) => db.user.findAll(),
    getUserById: async (_, { id }, { db }) => db.user.findByPk(id),
  },

  Mutation: {
    createdRegister: async (_, {
      email, password,
    }, { db }) => {
      const usercheck = await db.user.findOne({ where: { email } });
      if (usercheck === null) {
        const passwords = bcrypt.hashSync(password, 10);
        const Userdata = await db.user.create({
          email,
          password: passwords,
        });
        return {
          data: Userdata,
          message: 'User successfull',
        };
      }
      return {
        message: 'User already exits',
      };
    },

    loginUser: async (_, {
      email, password,
    }, { db }) => {
      const login = await db.user.findOne({
        where: { email },
      });
      if (login === null) {
        return false;
      }
      // email found

      const hashtypes = JSON.stringify(login);
      console.log(hashtypes);
      const passwordData = JSON.parse(hashtypes);
      const hash = bcrypt.compareSync(password, passwordData.password);
      if (hash === true) {
        return true;
      }
      return false;
    },

  },
};
