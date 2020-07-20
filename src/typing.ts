export enum InputType {
  TEXT = 'TEXT',
  INTEGER = 'INTEGER',
  FLOAT = 'FLOAT',
  BOOLEAN = 'BOOLEAN',
  ENUM = 'ENUM',
}

export interface Input {
  name: string;
  type: InputType;
}

export interface Section {
  name?: string;
  subSections: Section[];
  inputs: Input[];
}

export interface Form {
  name?: string;
  sections: Section[];
  inputs: Input[];
}
