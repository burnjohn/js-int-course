/*
 * This is the example of usage constants in the real
 * node js application
 *
 */

const fs = require('fs');
const { getImagesFreeFile } = require('./utils');

const getFilesToCheck = filesMap => {
  const sitefilePath = filesMap['site.json']['filePath'];
  const pageFilePath = filesMap['page.json']['filePath'];

  const pageFile = JSON.parse(fs.readFileSync(pageFilePath, 'utf8'));
  const siteFile = JSON.parse(fs.readFileSync(sitefilePath, 'utf8'));
  const newSiteFile = Object.assign({}, siteFile);

  newSiteFile.resource_directories[0].resources = [];

  return Object.assign({}, newSiteFile, pageFile);
};

const getImagesToDelete = (filesMap, imagesList) => {
  const filesToCheck = getFilesToCheck(filesMap);
  const filesString = JSON.stringify(filesToCheck);

  return imagesList.filter(imageName => filesString.indexOf(imageName) === -1);
};

const deleteFiles = (fileList, path) => {
  fileList.forEach(file => {
    fs.unlinkSync(`${path}/${file}`);
  });
};

const cleanImageFiles = (filesPath, filesMap) => {
  const { filePath } = filesMap['site.json'];
  const siteFile = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const imagesList = fs.readdirSync(filesPath);
  const imagesToDelete = getImagesToDelete(filesMap, imagesList);

  console.log('Deleting images: ');
  imagesToDelete.forEach(image => console.log(image));

  deleteFiles(imagesToDelete, filesPath);

  const newFile = getImagesFreeFile(siteFile, imagesToDelete);

  return [{ name: 'site.json', data: newFile, filePath }];
};

module.exports = cleanImageFiles;
