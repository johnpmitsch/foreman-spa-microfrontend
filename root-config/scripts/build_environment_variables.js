/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');
const paths = require('./paths');
const plugins = require('../plugins.js');

const tmpDotEnv = '.env_tmp';

console.log('Setting environment variables according to Foreman plugins');
let envVars = '';

Object.keys(plugins).map((name) => {
  const envKey = `${name}-present`.toUpperCase().replace(/-/g, '_');
  envVars += `${envKey}=true\n`;
  return envVars;
});

fs.writeFile(tmpDotEnv, envVars, (err) => {
  if (err) {
    console.log(`Something went wrong creating a temporary ${tmpDotEnv} file. The original .env file has not been modified or created`);
    throw err;
  }

  fs.copyFile(path.resolve(tmpDotEnv), paths.dotenv, (copyErr) => {
    if (copyErr) throw copyErr;
    console.log(`${paths.dotenv} updated!`);

    fs.unlink(tmpDotEnv, (rmErr) => {
      if (rmErr) throw rmErr;
      console.log(`Temporary file ${tmpDotEnv} was removed`);
    });
  });
});

/* eslint-enable no-console */
