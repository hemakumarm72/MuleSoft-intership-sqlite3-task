module.exports = {
  up: async (queryInterface, Sequelize) => {
    const out = await queryInterface.createTable('film', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
        allowNull: false,

      },
      film: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      times: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      watched: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      createdOn: {
        type: Sequelize.BOOLEAN,
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
    const out1 = await queryInterface.dropTable('film');
    return out1;
  },
};
