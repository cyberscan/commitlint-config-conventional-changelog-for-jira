const typeInfo = require('@dgc-org/cz-conventional-changelog-for-jira/commit-types');
const types = Object.keys(typeInfo);

module.exports.rules = {
  'type-enum': [2, 'always', types],
};

module.exports.value = () => types;
