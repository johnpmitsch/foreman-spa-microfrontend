// Adds plugins to package.json from a configuration file so they can be added in a dynamic
// manner and kept out of version control

/* eslint-disable no-console */

const fs = require('fs');
const paths = require('./paths');

/* eslint-disable-next-line import/no-dynamic-require */
const originalPackageJson = require(paths.pkgJsonPath);
const plugins = require('../plugins.js');

fs.writeFile(paths.pkgJsonBackupPath, JSON.stringify(originalPackageJson, null, 2), 'utf8', (err) => {
  if (err) throw err;
  console.log(`
Adding Foreman plugins to package.json, the original package.json is backed up \
at ${paths.pkgJsonBackupPath}. The modified package.json will be reverted back to \
it's original state and the backup deleted after a successful install.\n`);
});

const newDependencies = { ...originalPackageJson.dependencies, ...plugins };
originalPackageJson.dependencies = newDependencies;

fs.writeFile('package.json', JSON.stringify(originalPackageJson, null, 2), 'utf8', (err) => {
  if (err) throw err;
  console.log('Updated package.json with Foreman plugin packages\n');
});

/* eslint-enable no-console */
