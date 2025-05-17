'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('pets', 'status', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'perdido',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('pets', 'status');
  }
};