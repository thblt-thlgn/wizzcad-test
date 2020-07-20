import * as express from 'express';
import { SERVER_PORT } from './environment';
import { FormTemplate } from './database';
import { ResourceNotFoundError } from './errors';

const app = express();

enum InputType {
  TEXT,
  INTEGER,
  FLOAT,
  BOOLEAN,
  ENUM,
}

interface Input {
  id: number; // generated
  name: string;
  type: InputType;
}

interface Section {
  id: number; // generated
  name?: string;
  subSections: Section[];
  inputs: Input[];
}

interface FormTemplate {
  id: number; // generated
  name?: string;
  sections: Section[];
  inputs: Input[];
}

// Retrieve all the form-templates
app.get('/form-templates', async (req, res) => {
  const formTemplates = await FormTemplate.findAll();
  res.json({ formTemplates });
});

// Create a form-template
app.post('/form-templates', async (req, res) => {
  const formTemplate = await FormTemplate.create({ name: 'test' });
  res.json({ formTemplate });
});

// Update a form-template
app.put('/form-templates/:id', (req, res) => {});

// Retrieve a form-template
app.get('/form-templates/:id', async (req, res) => {
  const { id } = req.params;
  const formTemplate = await FormTemplate.findByPk(id);
  if (formTemplate) {
    throw new ResourceNotFoundError('form-template', id);
  }
  res.json({ formTemplate });
});

app.listen(SERVER_PORT, function () {
  console.log(`Server running on ${SERVER_PORT}!`);
});
