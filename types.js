const types = [
  "feat",
	"fix",
  "docs",
  "refactor",
  "test",
  "style",
	"build",
	"ci",
  "chore",
	"perf",
	"revert",
];

module.exports.rules = {
	"type-enum": [2, "always", types],
};

module.exports.value = () => types;
