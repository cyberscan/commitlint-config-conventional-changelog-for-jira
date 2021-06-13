const merge = require("lodash/merge");

const base = require("@commitlint/config-angular");

const types = {
    feat: {
        description: "A new feature",
        title: "Features",
    },
    fix: {
        description: "A bug fix",
        title: "Bug Fixes",
    },
    docs: {
        description: "Documentation only changes",
        title: "Documentation",
    },
    refactor: {
        description:
            "A code change that neither fixes a bug nor adds a feature",
        title: "Code Refactoring",
    },
    test: {
        description: "Adding missing tests or correcting existing tests",
        title: "Tests",
    },
    style: {
        description:
            "Formatting changes that do not affect the meaning of the code",
        title: "Style Conventions",
    },
    build: {
        description:
            "Changes that affect the build system or external dependencies",
        title: "Builds",
    },
    ci: {
        description: "Changes to our CI configuration files and scripts",
        title: "Continuous Integrations",
    },
    chore: {
        description: "Other changes that don't modify src or test files",
        title: "Chores",
    },
    revert: {
        description: "Reverts a previous commit",
        title: "Reverts",
    },
    perf: {
        description: "A code change that improves performance",
        title: "Performance Improvements",
    },
    wip: {
        description: "Work in progress (skip commitlint)",
        title: "Work in Progress",
    },
};

module.exports = merge(base, {
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
        // Skip linting if commit message starts with "wip: "
        (msg) => msg.startsWith("wip: "),
        // Skip linting if env var COMMITLINT_DISABLE is set
        () =>
            process.env.COMMITLINT_DISABLE !== undefined &&
            (process.env.COMMITLINT_DISABLE.toLowerCase() === "true" ||
                process.env.COMMITLINT_DISABLE === "1"),
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
});
