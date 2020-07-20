import { Sequelize, DataTypes } from 'sequelize';
import { InputType } from './typing';
import FormInput from './models/form-input';
import FormSection from './models/form-section';
import FormTemplate from './models/form-template';

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
});

FormInput.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM,
      values: Object.values(InputType),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'formInputs',
    paranoid: true,
  },
);

FormSection.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'formSections',
    paranoid: true,
  },
);

FormTemplate.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'formTemplates',
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
