const uuidv4 = require('uuid').v4;

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('film', [{
    id: uuidv4(),
    film: 'IT',
    times: '2',
    watched: 'true',
    createdOn: '3 oct',
    createdAt: new Date(),
    updatedAt: new Date(),
  }]),

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('profile', null, {});
     */
  },
};
