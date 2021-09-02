module.exports = {
  up: async (queryInterface, Sequelize) => {
    const out = await queryInterface.createTable('movies', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
        allowNull: false,
      },
      Name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Actor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Actress: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      YearOfRelease: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      Directorname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Description: {
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
    const deleteData = await queryInterface.dropTable('movies');
    return deleteData;
  },
};
