# @dgc-org/commitlint-config-conventional-changelog-for-jira

Shareable `commitlint` config enforcing the [Angular commit convention](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit) and [Jira Smart Commit Syntax](https://support.atlassian.com/jira-software-cloud/docs/process-issues-with-smart-commits/). Based on [@commitlint/config-angular](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-angular#commitlintconfig-angular).

Use with [@dgc-org/cz-conventional-changelog-for-jira](https://www.npmjs.com/package/@dgc-org/cz-conventional-changelog-for-jira), [@commitlint/cli](https://www.npmjs.com/package/@commitlint/cli).

## Getting started

```shell_session
npm install --save-dev @dgc-org/commitlint-config-conventional-changelog-for-jira @commitlint/cli
echo "module.exports = {extends: ['@dgc-org/commitlint-config-conventional-changelog-for-jira']};" > commitlint.config.js
```

## Disabling commitlint

In some cases it might be useful to be able to skip linting, e.g. when lacking access to Jira or having to do nasty things in GitOps. This configuration skips the linting process altogether if either of these conditions are satisfied:

- Commit message starts with `WIP:`, e.g. `WIP: the office is burning down, need to save my work`
- Environment variable `COMMITLINT_DISABLE` is set to `true` (case-insensitive) or `1`
- Environment variable `COMMITIZEN_DISABLE` is set to `true` (case-insensitive) or `1`

This mechanism should only be used in situations where there's no alternative to it, rather than to ignore fixable validation failures.

## Rules

### Problems

The following rules are considered problems for `@dgc-org/commitlint-config-conventional-changelog-for-jira` and will yield a non-zero exit code when not met.
Consult [docs/rules](https://conventional-changelog.github.io/commitlint/#/reference-rules) for a list of available rules.

#### type-enum

- **condition**: `type` is found in value
- **rule**: `always`
- **value**

```shell_session
[
  "feat",
  "fix",
  "docs",
  "refactor",
  "test",
  "style",
  "build",
  "ci",
  "chore",
  "revert",
  "perf",
]
```

```shell_session
echo "foo: some message" # fails
echo "fix: some message" # passes
```

#### type-case

- **description**: `type` is in case `value`
- **rule**: `always`
- **value**

```shell_session
'lowerCase'
```

```shell_session
echo "FIX: some message" # fails
echo "fix: some message" # passes
```

#### type-empty

- **condition**: `type` is empty
- **rule**: `never`

```shell_session
echo ": some message" # fails
echo "fix: some message" # passes
```

#### scope-case

- **condition**: `scope` is in case `value`
- **rule**: `always`

```shell_session
'lowerCase'
```

```shell_session
echo "fix(SCOPE): some message" # fails
echo "fix(scope): some message" # passes
```

#### subject-case

- **condition**: `subject` is in one of the cases `['sentence-case', 'start-case', 'pascal-case', 'upper-case']`
- **rule**: `never`

```shell_session
echo "fix(SCOPE): Some message" # fails
echo "fix(SCOPE): Some Message" # fails
echo "fix(SCOPE): SomeMessage" # fails
echo "fix(SCOPE): SOMEMESSAGE" # fails
echo "fix(scope): some message" # passes
echo "fix(scope): some Message" # passes
```

#### subject-empty

- **condition**: `subject` is empty
- **rule**: `never`

```shell_session
echo "fix:" # fails
echo "fix: some message" # passes
```

#### subject-full-stop

- **condition**: `subject` ends with `value`
- **rule**: `never`
- **value**

```shell_session
'.'
```

```shell_session
echo "fix: some message." # fails
echo "fix: some message" # passes
```

#### header-max-length

- **condition**: `header` has `value` or less characters
- **rule**: `always`
- **value**

```shell_session
72
```

```shell_session
echo "fix: some message that is way too long and breaks the line max-length by several characters" # fails
echo "fix: some message" # passes
```

### Warnings

The following rules are considered warnings for `@dgc-org/commitlint-config-conventional-changelog-for-jira` and will print warning messages when not met.

#### body-leading-blank

- **condition**: Body begins with blank line
- **rule**: `always`
