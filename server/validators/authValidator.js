/**
 * AUTH VALIDATORS
 * Lightweight validation helpers for auth-related request bodies.
 * Returns an array of error messages. Empty array = valid.
 */

/**
 * Validates the register request body.
 * @param {object} body - req.body
 * @returns {string[]} Array of validation error messages
 */
const validateRegister = (body) => {
  const errors = [];
  const { name, email, password } = body;

  if (!name || name.trim().length < 2) {
    errors.push('Name must be at least 2 characters.');
  }

  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    errors.push('Please provide a valid email address.');
  }

  if (!password || password.length < 6) {
    errors.push('Password must be at least 6 characters.');
  }

  return errors;
};

/**
 * Validates the login request body.
 * @param {object} body - req.body
 * @returns {string[]} Array of validation error messages
 */
const validateLogin = (body) => {
  const errors = [];
  const { email, password } = body;

  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    errors.push('Please provide a valid email address.');
  }

  if (!password) {
    errors.push('Password is required.');
  }

  return errors;
};

module.exports = { validateRegister, validateLogin };
