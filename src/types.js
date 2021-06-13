module.exports = {
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
