const {nanoid} = require("nanoid");
const { faker } = require("@faker-js/faker");
const { readJSONFile, writeJSONFile } = require("./helpers");

function createRandomCandle(){
    const randomCandle = {
        id: nanoid(4),
        name: process.argv[3],
        priceInCents: faker.commerce.price(10, 200, 2, "$"),
        inStock: faker.datatype.boolean(),
        numberOfWicks: 3
    }
    return randomCandle;
}


module.exports = {createRandomCandle}