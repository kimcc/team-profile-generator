const fs = require('fs');
const fsExtra = require("fs-extra");

const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};

const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile('./src/styles.css', './dist/styles.css', err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'File copied!'
      });
    });
    fsExtra.copy('./src/assets', './dist/assets', err => {
      if (err) {
        reject(err);
        return;
      }
      console.log("Folder copied!");
    });
  });
};

// Shorthand property name since the property name and its value is the same
module.exports = { writeFile, copyFile };