// validation.js
const Joi = require('joi');

// Define the Joi schema for validating username and password
const authSchema = Joi.object({
  userName: Joi.string().min(3).required().messages({
    'string.base': '"userName" should be a type of text',
    'string.empty': '"userName" cannot be empty',
    'string.min': '"userName" should have a minimum length of 3',
    'any.required': '"userName" is a required field',
  }),
  password: Joi.string()
    .min(6)
    .pattern(new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])'))
    .required()
    .messages({
      'string.base': '"Password" should be a type of text',
      'string.empty': '"Password" cannot be empty',
      'string.min': '"Password" should have a minimum length of 6',
      'string.pattern.base': '"Password" must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
      'any.required': '"Password" is a required field',
    }),
});

module.exports = authSchema;
