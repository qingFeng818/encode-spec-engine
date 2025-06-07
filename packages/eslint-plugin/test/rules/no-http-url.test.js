'use strict'
const rule = require('../../rules/no-http-url');
const { RuleTester } = require('eslint');

const ruleTester = new RuleTester();

ruleTester.run('no-http-url', rule, {
  valid: [
    {
      code: 'var test = "https://yuntao.com";',
    },
  ],

  invalid: [
    {
      code: "var test = 'http://yuntao.com';",
      output: "var test = 'http://yuntao.com';",
      errors: [
        {
          message: 'Recommended "http://yuntao.com" switch to HTTPS',
        },
      ],
    },
    {
      code: "<img src='http://yuntao.com' />",
      output: "<img src='http://yuntao.com' />",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      errors: [
        {
          message: 'Recommended "http://yuntao.com" switch to HTTPS',
        },
      ],
    },
  ],
});
