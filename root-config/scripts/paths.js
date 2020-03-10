const path = require('path');

// paths are relative to repo's root directory because they are included in npm scripts,
// which are run from that location.
const pkgJsonPath = path.resolve('package.json');
const pkgJsonBackupPath = path.resolve('package.json.backup');
const dotenv = path.resolve('.env');

module.exports = {
  pkgJsonPath,
  pkgJsonBackupPath,
  dotenv,
};
