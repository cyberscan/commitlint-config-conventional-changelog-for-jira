const types = require("@dgc-org/cz-conventional-changelog-for-jira/commit-types");

module.exports = {
    // Pre-defined sets of rules to extend
    extends: ["@commitlint/config-angular"],
    // parserPreset is responsible for splitting commit messages into lexemes
    // ref: https://github.com/conventional-changelog/commitlint/blob/master/docs/reference-configuration.md#parser-presets
    parserPreset: {
        parserOpts: {
            // <type>(<scope>): <[ticket-id]> <subject>
            headerPattern: /^(\w*)(\(\w+\))?:\s(\[[A-Z0-9]+-[0-9]+\])\s(.*)$/,
            headerCorrespondence: ["type", "scope", "ticket", "subject"],
            // TODO: load valid tickets from Jira
            issuePrefixes: ["ITCORE-"],
        },
    },
    // Rules defined here override or extend those from rulesets specified in extends: above
    rules: {
        // Custom list of valid commit types (overrides @commitlint/config-angular)
        "type-enum": [2, "always", Object.keys(types)],
    },
    // Functions that return true if commitlint should ignore the given message.
    ignores: [
        // Skip linting if commit message starts with "WIP:"
        (msg) => msg.startsWith("WIP:"),
        // Skip linting if env var COMMITLINT_DISABLE is set
        () =>
            process.env.COMMITLINT_DISABLE !== undefined &&
            (process.env.COMMITLINT_DISABLE.toLowerCase() === "true" ||
                process.env.COMMITLINT_DISABLE === "1"),
        // Skip linting if env var COMMITIZEN_DISABLE is set
        () =>
            process.env.COMMITIZEN_DISABLE !== undefined &&
            (process.env.COMMITIZEN_DISABLE.toLowerCase() === "true" ||
                process.env.COMMITIZEN_DISABLE === "1"),
    ],
    // Help URL to display in error output
    helpUrl:
        "https://github.com/cyberscan/commitlint-config-conventional-changelog-for-jira#rules",
    // Inline plugin for additional rules
    // ref: https://github.com/conventional-changelog/commitlint/blob/master/docs/reference-plugins.md#local-plugins
    plugins: [
        {
            rules: {},
        },
    ],
};
