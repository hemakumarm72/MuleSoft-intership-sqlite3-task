module.exports = {
  up: async (queryInterface, Sequelize) => {
    const out = await queryInterface.createTable('profile', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
        allowNull: false,

      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      education: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mobileno: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      linkedin: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
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
    const out1 = await queryInterface.dropTable('profile');
    return out1;
  },

};
