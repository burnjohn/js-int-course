// Own promisify function
const { uploadSync } = require('./modules');

const utils = {};

utils.promisify = (method) => new Promise((res, rej) => {
  try {
    const result = method();
    res(result);
  } catch (e) {
    rej(e)
  }
});

const handleFileUpload = utils.promisify(uploadSync);

// Demo: how to work with Promise in node js
handleFileUpload()
  .then((dataToSave)  => {
    toJson(dataToSave);
  })
  .then(validateFile)
  .then(showLogs)
  .then((data) => {
    saveToDB(data);
    return data;
  })
  .then(saveToFS)
  .then(sendResponse)
  .catch(error => {
    console.log(error)
  });
