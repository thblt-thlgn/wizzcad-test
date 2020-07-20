import { Input, Section } from './typing';
import { sequelize, FormSection } from './database';

// export const createManyInput = async (
//   formTemplateId: number,
//   inputs: Input[],
//   transaction: Transaction,
// ) => {
//   const promises = inputs.map((input) =>
//     FormInput.create({ formTemplateId, ...input }, { transaction }),
//   );
//   return Promise.all(promises);
// };

export const createManySection = async (section: Section[]) =>
  sequelize.transaction((t) => {
    const promises = section.map((section) =>
      // should also create inputs
      FormSection.create(section, { transaction: t }),
    );
    return Promise.all(promises);
  });
