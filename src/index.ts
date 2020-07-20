import * as express from 'express';
import { SERVER_PORT } from './environment';
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
app.get('/form-templates', (req, res) => {});

// Create a form-template
app.post('/form-templates', (req, res) => {});

// Update a form-template
app.put('/form-templates/:id', (req, res) => {});

// Retrieve a form-template
app.get('/form-templates/:id', (req, res) => {});

app.listen(SERVER_PORT, function () {
  console.log(`Server running on ${SERVER_PORT}!`);
});
