const {readJSONFile, writeJSONFile} = require("./src/helpers");

const {index, show, create, destroy, edit} = require("./src/candlesController");

const inform = console.log

function run(){
    let candles = readJSONFile("data", "candles.json")

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
            updatedCandles = create(candles, candle)
            writeToFile = true;
            break;
        case "update":
            updatedCandles = edit(candles, candle, process.argv[4])
            writeToFile = true;
            break;
        case "destroy":
            updatedCandles = destroy(candles, candle)
            writeToFile = true;
            break;
        case "score": 
            const score = 
            inform()
            break;
        default:
            inform("Did it work?")
    }
}

run()
