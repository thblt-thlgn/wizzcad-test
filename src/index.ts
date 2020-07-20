import * as express from 'express';
import { SERVER_PORT } from './environment';
import { ResourceNotFoundError } from './errors';
import { createValidator } from 'express-joi-validation';
import * as Joi from '@hapi/joi';
import { InputType } from './typing';
import * as bodyParser from 'body-parser';
import FormTemplate from './models/form-template';
import FormInput from './models/form-input';
import FormSection from './models/form-section';

const app = express();
app.use(bodyParser.json());
const validator = createValidator({});

const formInputValidator = Joi.object().keys({
  name: Joi.string().required(),
  type: Joi.string().valid(...Object.values(InputType)),
});

const formSectionValidator = Joi.object().keys({
  name: Joi.string().optional(),
  // recursive objects is causing ts issues
  // subSections: Joi.array().items(formSectionValidator).optional(),
  formInputs: Joi.array().items(formInputValidator).min(1),
});

const formTemplateValidator = Joi.object().keys({
  name: Joi.string().optional(),
  formSections: Joi.array().items(formSectionValidator).optional(),
  formInputs: Joi.array().items(formInputValidator).optional(),
});

// Retrieve all the form-templates
app.get('/form-templates', async (req, res) => {
  const formTemplates = await FormTemplate.findAll({
    include: [
      FormInput,
      {
        target: FormSection,
        include: [FormInput, FormSection],
      },
    ],
  });
  res.json({ formTemplates });
});

// Create a form-template
app.post('/form-templates', validator.body(formTemplateValidator), async (req, res) => {
  const { body } = req;
  const formTemplate = await FormTemplate.create(body, {
    include: [FormInput, FormSection],
  });

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
