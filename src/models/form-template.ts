import { Model } from 'sequelize';
import FormSection from './form-section';
import FormInput from './form-input';

export interface FormTemplateAttributes {
  name?: string;
}

export default class FormTemplate extends Model<FormTemplateAttributes>
  implements FormTemplateAttributes {
  public name?: string;
  public formSections!: FormSection[];
  public formInputs!: FormInput[];

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}
