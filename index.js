const {readJSONFile, writeJSONFile} = require("./src/helpers.js");

const {index, show, create, destroy, edit} = require("./src/candlesController.js");

const{createRandomCandle} = require("./src/candlesCreator.js");

const inform = console.log;

function run(){
    let candles = readJSONFile("./data", "candles.json", "candlesCart.json")
    let writeToFile = false;
    let updatedCandles = [];
    let candleCreated = [];
    

    const action = process.argv[2];
    const candle = process.argv[3];

    switch (action){
        case "index":
            const candlesView = index(candles)
            inform(candlesView);
            break;
        case "show":
            const candlesViewShow = show(candles, candle)
            inform(candlesViewShow);
            break;
        case "create":
            candleCreated = create(candles, candle)
            writeJSONFile("./data", "candles.json", candles);
            break;
        case "update":
            updatedCandles = edit(candles, candle, process.argv[4])
            writeJSONFile("./data", "candles.json", candles);
            break;
        case "destroy":
            updatedCandles = destroy(candles, candle)
            writeJSONFile("./data", "candles.json", candles);
            break;
        
        default:
            inform("Did it work?")
    }
}

run()
