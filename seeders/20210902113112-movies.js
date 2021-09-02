const uuidv4 = require('uuid').v4;

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('movies', [
      {
        id: uuidv4(),
        Name: '004',
        Actor: 'James Bond',
        Actress: 'Miss Giddens',
        YearOfRelease: 1978,
        Directorname: ' Gibraltar',
        Description:
          '004 was the code-name of an unnamed fictional intelligence operative of the Double-O Section, an ultra-covert unit within the Secret Intelligence Service (SIS/MI6).',
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
