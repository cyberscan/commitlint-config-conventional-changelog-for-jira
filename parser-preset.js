const allowedEmotes = require("./commit-types").emoteList;

module.exports = {
  parserOpts: {
    // <type>(<scope>): <[ticket-id]> <subject>
    headerPattern: /^(\w*)(\(\w+\))?:\s(\[[A-Z0-9]+-[0-9]+\])\s(.*)$/,
    headerCorrespondence: ['type', 'scope', 'ticket', 'subject'],
    // TODO: load valid tickets from Jira
    issuePrefixes: ['ITCORE-'],
  },
};
