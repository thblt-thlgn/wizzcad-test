'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.createTable('formInputs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      type: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ['TEXT', 'INTEGER', 'FLOAT', 'BOOLEAN', 'ENUM'],
      },
      formTemplateId: {
        allowNull: true,
        type: Sequelize.UUID,
        references: {
          model: 'formTemplates',
          key: 'id',
        },
      },
      formSectionId: {
        allowNull: true,
        type: Sequelize.UUID,
        references: {
          model: 'formSections',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    }),

  down: async (queryInterface) => queryInterface.dropTable('formInputs'),
};
