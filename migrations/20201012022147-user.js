module.exports = {
  up: async (queryInterface, Sequelize) => {
    const out = await queryInterface.createTable('user', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,

      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.STRING,

      },
      updatedAt: {
        type: Sequelize.STRING,

      },

    });
    return out;
  },

  down: async (queryInterface, Sequelize) => {
    const out1 = await queryInterface.dropTable('user');
    return out1;
  },

};
