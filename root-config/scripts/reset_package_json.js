// Restore package.json back to it's original state wihtout plugins

const fs = require('fs')
const paths = require('./paths')

fs.copyFile(paths.pkgJsonBackupPath, paths.pkgJsonPath, (err) => {
  if (err) throw err;
  console.log(`${paths.pkgJsonPath} was restored back to it's original state`);
});

fs.unlink(paths.pkgJsonBackupPath, (err) => {
  if (err) throw err;
  console.log(`${paths.pkgJsonBackupPath} was removed`);
})