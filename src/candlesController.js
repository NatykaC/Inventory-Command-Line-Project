const {nanoid} = require("nanoid");
const { faker } = require("@faker-js/faker");


function create(candles, candleName) {
    const candle = { name: candleName, id: nanoid(4) };
    candles.push(candle);
    return candles;
  }