const {nanoid} = require("nanoid");
const { faker } = require("@faker-js/faker");
const { readJSONFile, writeJSONFile } = require("./helpers");

const inform = console.log

function index(arrayOfCandles){
    return arrayOfCandles.map((eachCandle)=> `ID#: ${eachCandle.id},` + " " +`Candle name: ${eachCandle.name},` + " " +`Price $${eachCandle.priceInCents},` + " " +`In Stock: ${eachCandle.inStock},` + " " +`Number of Wicks: ${eachCandle.numberOfWicks}`).join("\n");
 }
 
 
 function show(arrayOfCandles, id){
     const candleToFind = arrayOfCandles.find((candle) => candle.id === id);
     return candle.id+ " " + candle.name + " " + candle.priceInCents + " " + candle.inStock + " " + candle.numberOfWicks;
 } 

function create(candles, candleName) {
    const candle = { name: candleName, id: nanoid(4)};
    candles.push(candle);
    return candles;
  }

  function destroy(candles, candleId){
    const index = candles.findIndex((candle) => candle.id === candleId);
    if (index > -1) {
        candles.splice(index, 1);
        inform("Candle has been removed from cart!");
        return candles;
    }else {
        inform("Candle has not been found, no action performed.")
    }
  }

  function edit(candles, candleId, updatedCandle){
    const index = candles.findIndex((candle) => candle.id === candleId);
    if (index >-1){
        candles[index].id = candleId;
        candles[index].name = updatedCandle;
        inform("Candle has been updated successfully!");
        return candles;
    } else {
        inform("Candle not found! No action needed or performed.")
    }
  }



  module.exports = {index, show, create, destroy, edit}