process.chdir(__dirname);
 
module.exports = {
  env :{
    browser: true,
    es6: true
  },
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    allowImportExportEverywhere: true,
    codeFrame: false
  },
  extends: [
    'airbnb-standard',
  ],
};