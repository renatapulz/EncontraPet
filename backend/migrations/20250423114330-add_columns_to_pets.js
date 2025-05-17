module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('pets', 'foto', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn('pets', 'caracteristicas_fisicas', {
      type: Sequelize.TEXT,
      allowNull: false,
    });
    await queryInterface.addColumn('pets', 'ultimo_local_visto', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn('pets', 'contato_nome', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn('pets', 'contato_telefone', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn('pets', 'recompensa', {
      type: Sequelize.FLOAT,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('pets', 'foto');
    await queryInterface.removeColumn('pets', 'caracteristicas_fisicas');
    await queryInterface.removeColumn('pets', 'ultimo_local_visto');
    await queryInterface.removeColumn('pets', 'contato_nome');
    await queryInterface.removeColumn('pets', 'contato_telefone');
    await queryInterface.removeColumn('pets', 'recompensa');
  }
};
