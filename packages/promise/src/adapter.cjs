const Promise = require("./index.cjs")

function resolved(value) {
  return Promise.resolve(value);
}

function rejected(reason) {
  return Promise.reject(reason);
}

function deferred() {
  return Promise.withResolvers();
}

module.exports = {
  resolved,
  rejected,
  deferred,
};
