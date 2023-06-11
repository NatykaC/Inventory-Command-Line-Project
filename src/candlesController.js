const {nanoid} = require("nanoid");
const { faker } = require("@faker-js/faker");
const { readJSONFile, writeJSONFile } = require("./helpers");
const {createRandomCandle} = require("./candlesCreator");

const inform = console.log

function index(candles){
    return candles.map((eachCandle)=> `Id#: ${eachCandle.id},` + " " +`Candle name: ${eachCandle.name},` + " " +`Price $${eachCandle.priceInCents},` + " " +`In Stock: ${eachCandle.inStock},` + " " +`Number of Wicks: ${eachCandle.numberOfWicks}`).join("\n");
 }
 
 
function show(candles, candleId){
    const candleToFind = candles.find((candle) => candle.id === candleId);
    return `Id#: ${candleToFind.id},` + " " + `Candle Name: ${candleToFind.name},` + " " + `Price $${candleToFind.priceInCents},` + " " + `In Stock: ${candleToFind.inStock},` + " " + `Number of Wicks: ${candleToFind.numberOfWicks}`;
 } 

function create(candles) { 
    candleCreated = candles.push(createRandomCandle());
    return candleCreated;
  }

function destroy(candles, candleId){
    const index = candles.findIndex((candle) => candle.id === candleId);
    if (index > -1) {
        candles.splice(index, 1);
        inform("Candle has been removed from cart!");
        return candles;
    }else {
        inform("Candle has not been found, no action performed.");
    }
  }

function edit(candles, candleId, updatedCandle){
    const index = candles.findIndex((candle) => candle.id === candleId);
    if (index > -1){
        candles[index].id = candleId;
        candles[index].name = updatedCandle;
        inform("Candle has been updated successfully!");
        return candles;
    } else {
        inform("Candle not found! No action needed or performed.");
    }
  }

function addToCart(candles, candleId){
    candlesCart = [];
    const candleToAdd = candles.find((candle) => candle.id === candleId);
    if (candleToAdd.inStock === true){
        candlesCart.push(`My Candles Shopping Cart: Id#: ${candleToAdd.id},` + " " + `Candle Name: ${candleToAdd.name},` + " " + `Price $${candleToAdd.priceInCents},` + " " + `In Stock: ${candleToAdd.inStock},` + " " + `Number of Wicks: ${candleToAdd.numberOfWicks}`)
        return candlesCart;
    }
   else{
        inform("Candle not in-stock! Unable to add to cart!");
    }
  }

  function emptyCart(){};



  module.exports = {index, show, create, destroy, edit, addToCart}