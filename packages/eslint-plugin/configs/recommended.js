module.exports = {
  plugins: ['encode-spec-engine-eslint-plugin'],
  rules: {
    'encode-spec-engine-eslint-plugin/no-http-url': 'warn',
    'encode-spec-engine-eslint-plugin/no-secret-info': 'error',
  },
};
