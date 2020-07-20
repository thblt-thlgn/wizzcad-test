import { Model } from 'sequelize';
import { InputType, InputAttributes } from '../typing';

export default class FormInput extends Model<InputAttributes> implements InputAttributes {
  public name!: string;
  public type!: InputType;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}
