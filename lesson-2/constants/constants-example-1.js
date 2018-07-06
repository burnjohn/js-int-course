/*
 * This is the example of usage constants in the real
 * node js application
 *
 */

const fs = require('fs');
const https = require('https');
const admZip = require('adm-zip');
const path = require('path');

const { downloadedDirPath } = require('../../config.js');

const FILE_NAME = 'template.zip';
const FILES_INPUT = downloadedDirPath;
const FILE_SRC = path.join(FILES_INPUT, FILE_NAME);

const downloadSite = (url, dest) =>
  new Promise((res, rej) => {
    https.get(url, response => {
      response.on('error', err => rej(err));

      response.on('data', data => fs.appendFileSync(FILE_SRC, data));

      response.on('end', () => {
        const zip = new admZip(FILE_SRC);
        zip.extractAllTo(FILES_INPUT);
        fs.unlink(FILE_SRC);

        res();
      });
    });
  });

const unzipSiteFiles = (inputPath, outputPath) => {
  const zip = new admZip(FILE_SRC);
  zip.extractAllTo(outputPath);
};

const getTemplateFiles = templateConfig => {
  if (!fs.existsSync(FILES_INPUT)) {
    fs.mkdirSync(FILES_INPUT);
  }

  return { templateDir: FILES_INPUT, templateConfig };
};

module.exports = getTemplateFiles;
