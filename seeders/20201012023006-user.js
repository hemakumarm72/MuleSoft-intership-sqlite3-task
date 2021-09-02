const uuidv4 = require('uuid').v4;

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('user', [{
    id: uuidv4(),
    email: 'hemakumarm123',
    password: 'hemakumarm123@gmail.com',
    createdAt: new Date(),
    updatedAt: new Date(),
  }]),

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
