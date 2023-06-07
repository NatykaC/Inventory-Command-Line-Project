const {readJSONFile, writeJSONFile} = require("./src/helpers");

const {index, show} = require("./src/candlesController");

const inform = console.log

function run(){
    let candlesFile = readJSONFile("data", "candles.json")

    const action = process.argv[2];
    const candle = process.argv[3];

    switch (action){
        case "index":
            const candlesView = index(candlesFile)
            inform(candlesView);
            break;
        case "show":
            const candlesViewShow = show(candlesFile, candle)
            inform(candlesViewShow);
            break;
        case "create":
            updatedCandles = create(candlesFile, candle)
            writeToFile = true;
            break;
        case "update":
            updatedCandles = edit(candlesFile, candle, process.argv[4])
            writeToFile = true;
            break;
        case "destroy":
            updatedCandles = destroy(candlesFile, candle)
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
