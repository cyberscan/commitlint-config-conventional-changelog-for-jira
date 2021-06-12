const types = require('./commit-types');

module.exports = {
  // Pre-defined sets of rules to extend
  extends: ['@commitlint/config-angular'],
  // parserPreset is responsible for splitting commit messages into lexemes
  // ref: https://github.com/conventional-changelog/commitlint/blob/master/docs/reference-configuration.md#parser-presets
  parserPreset: './parser-preset',
  // Rules defined here override or extend those from rulesets specified in extends: above
  rules: {
    // Custom list of valid commit types (overrides @commitlint/config-angular)
    'type-enum': types.rules['type-enum'],
    // Require references to tickets (overrides @commitlint/rules)
    'references-empty': [2, 'never'],
  },
  // Inline plugin for additional rules
  // ref: https://github.com/conventional-changelog/commitlint/blob/master/docs/reference-plugins.md#local-plugins
  plugins: [
    {
      rules: {},
    },
  ],
};
