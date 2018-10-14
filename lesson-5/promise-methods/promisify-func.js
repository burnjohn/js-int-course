// Own promisify function
const utils = {};

utils.promisify = (method) => new Promise((res, rej) => {
  try {
    const result = method();
    res(result);
  } catch (e) {
    rej(e)
  }
});

const handleFileUpload = utils.promisify(upload);

// Demo: how to work with Promise in node js
handleFileUpload()
  .then(toJson)
  .then(validateFile)
  .then(showLogs)
  .then(saveToDB)
  .then(saveToFS)
  .then(sendResponse)
  .catch(error => {
    console.log(error)
  });