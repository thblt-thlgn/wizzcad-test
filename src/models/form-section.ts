import { Model } from 'sequelize';
import { FormSectionAttributes } from 'src/typing';
import FormInput from './form-input';

export default class FormSection extends Model<FormSectionAttributes>
  implements FormSectionAttributes {
  public name?: string;
  public formSections!: FormSection[];
  public formInputs!: FormInput[];

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}
