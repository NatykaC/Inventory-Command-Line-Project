const { 
    readJSONFile,
    writeJSONFile } = require("./src/helpers");

let candles = readJSONFile("./data", "candles.json")