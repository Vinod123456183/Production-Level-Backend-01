const crypto = require("crypto");
module.exports = () => {
  return crypto.randomBytes(8);
};
