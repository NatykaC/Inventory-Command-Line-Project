const {nanoid} = require("nanoid");

function create(candles, candleName) {
    const candle = { name: candleName, id: nanoid(4) };
    candles.push(candle);
    return candles;
  }