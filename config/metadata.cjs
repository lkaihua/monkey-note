const {
  author,
  dependencies,
  repository,
  version,
} = require("../package.json");

module.exports = {
  name: {
    "": "Monkey Note",
    cn: "大圣便笺",
    en: "Monkey Note",
  },
  namespace: "https://trim21.me/",
  version: version,
  author: author,
  source: repository.url,
  // 'license': 'MIT',
  match: ["*://www.example.com/", "*://example.com/*"],
  require: [
    `https://cdn.jsdelivr.net/npm/jquery@${dependencies.jquery}/dist/jquery.min.js`,
  ],
  grant: ["GM.xmlHttpRequest", "GM.registerMenuCommand"],
  connect: ["httpbin.org"],
  "run-at": "document-end",
};
