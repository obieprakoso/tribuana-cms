const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexNumber = /^[0-9]+$/;

const BooleanValidation = (
  text = true,
  fieldName = "Field Name",
  required = true
) => {
  if (text === null && required) {
    return `${fieldName} is required`;
  }

  return "";
};

const TextValidation = (
  text: string | null = "",
  maxLength = 255,
  fieldName = "Field Name",
  required = true
) => {
  if (text === null && required) {
    return `${fieldName} is required`;
  }
  if (text === "" && required) {
    return `${fieldName} is required`;
  }
  if (text && text?.length > maxLength) {
    return `${fieldName} max ${maxLength} charaters`;
  }
  if (/[^A-Z]/gi.test(text!)) {
    return `${fieldName} invalid`;
  }
  if (regexNumber.test(text!)) {
    return `${fieldName} invalid`;
  }

  return "";
};

const TextNumberValidation = (
  text: string | null = "",
  maxLength = 255,
  fieldName = "Field Name",
  required = true
) => {
  if (text === null && required) {
    return `${fieldName} is required`;
  }
  if (text === "" && required) {
    return `${fieldName} is required`;
  }
  if (!regexNumber.test(text!)) {
    return `${fieldName} not number`;
  }
  if (text && text?.toString().length > maxLength) {
    return `${fieldName} max ${maxLength} charaters`;
  }

  return "";
};

const EmailValidation = (
  text: string | null = "",
  maxLength = 255,
  fieldName = "Field Name",
  required = true
) => {
  if (text === null && required) {
    return `${fieldName} is required`;
  }
  if (text === "" && required) {
    return `${fieldName} is required`;
  }
  if (text && text?.length > maxLength) {
    return `${fieldName} max ${maxLength} charaters`;
  }
  if (text && !regexEmail.test(text)) {
    return `${fieldName} invalid`;
  }

  return "";
};

const PasswordValidation = (
  text: string | null = "",
  minLength = 8,
  maxLength = 12,
  fieldName = "Field Name",
  required = true
) => {
  if (text === null && required) {
    return `${fieldName} is required`;
  }
  if (text === "" && required) {
    return `${fieldName} is required`;
  }
  if (text && text?.length < minLength) {
    return `${fieldName} min ${minLength} charaters`;
  }
  if (text && text?.length > maxLength) {
    return `${fieldName} max ${maxLength} charaters`;
  }

  return "";
};

const ConfirmPasswordValidation = (
  text: string | null = "",
  minLength = 8,
  maxLength = 12,
  fieldName = "Field Name",
  required = true,
  valuePassword: string | null
) => {
  if (text !== valuePassword) {
    return `${fieldName} not match password`;
  }
  if (text === null && required) {
    return `${fieldName} is required`;
  }
  if (text === "" && required) {
    return `${fieldName} is required`;
  }
  if (text && text?.length < minLength) {
    return `${fieldName} min ${minLength} charaters`;
  }
  if (text && text?.length > maxLength) {
    return `${fieldName} max ${maxLength} charaters`;
  }

  return "";
};

export default {
  TextValidation,
  EmailValidation,
  PasswordValidation,
  TextNumberValidation,
  BooleanValidation,
  ConfirmPasswordValidation,
};
