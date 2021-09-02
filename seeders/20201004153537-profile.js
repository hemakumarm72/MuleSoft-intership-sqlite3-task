const uuidv4 = require('uuid').v4;

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('profile', [
      {
        id: uuidv4(),
        username: 'hemakumarm123',
        email: 'hemakumarm123@gmail.com',
        gender: 'male',
        age: '20',
        address: 'demo city',
        education: 'Be',
        mobileno: '1234567890',
        linkedin: 'http://demo.lonked',
        description: 'likes more good things',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]),

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('profile', null, {});
     */
  },
};
