export enum InputType {
  TEXT = 'TEXT',
  INTEGER = 'INTEGER',
  FLOAT = 'FLOAT',
  BOOLEAN = 'BOOLEAN',
  ENUM = 'ENUM',
}

export interface InputAttributes {
  name: string;
  type: InputType;
}

export interface FormSectionAttributes {
  name?: string;
}

export interface FormTemplateAttributes {
  name?: string;
}
