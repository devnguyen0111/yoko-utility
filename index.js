const fs = require("fs");
const path = require("path");

const directoryPath = path.join(__dirname, "function");

fs.readdir(directoryPath, function (err, files) {
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }

  files.forEach(function (file) {
    if (file.endsWith(".js")) {
      const filePath = path.join(directoryPath, file);
      const module = require(filePath);

      Object.keys(module).forEach((functionName) => {
        exports[functionName] = module[functionName];
      });
    }
  });
});
