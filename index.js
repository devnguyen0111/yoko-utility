const fs = require("fs");
const path = require("path");

const utilsPath = path.join(__dirname, "function");

const files = fs.readdirSync(utilsPath);

files.forEach((file) => {
  if (file.endsWith(".js")) {
    const utilModule = require(path.join(utilsPath, file));
    Object.assign(exports, utilModule);
  }
});
