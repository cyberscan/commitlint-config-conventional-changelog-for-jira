const types = require('@dgc-org/cz-conventional-changelog-for-jira/commit-types');
const typeList = Object.keys(types);

module.exports = {
  value: () => typeList,
  rules: {
    'type-enum': [2, 'always', typeList],
  },
  types: types,
  typeList: typeList,
};
