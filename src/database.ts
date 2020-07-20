import { Sequelize, DataTypes } from 'sequelize';

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
});

export const FormInput = sequelize.define(
  'formInputs',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM,
      values: ['TEXT', 'INTEGER', 'FLOAT', 'BOOLEAN', 'ENUM'],
      allowNull: false,
    },
  },
  {
    paranoid: true,
  },
);

export const FormSection = sequelize.define(
  'formSections',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    paranoid: true,
  },
);

export const FormTemplate = sequelize.define(
  'formTemplates',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    paranoid: true,
  },
);

FormInput.belongsTo(FormSection);
FormInput.belongsTo(FormTemplate);

FormSection.hasMany(FormSection);
FormSection.hasMany(FormInput);
FormSection.belongsTo(FormSection);
FormSection.belongsTo(FormTemplate);

FormTemplate.hasMany(FormSection);
FormTemplate.hasMany(FormInput);
