import Stock from './stock.js'

export default class DataStore {
  constructor(stockCollection = [], mappedStockCollection = []) {
    this.stockCollection = stockCollection;
    this.mappedStockCollection = mappedStockCollection;
  }

  returnStock(exchange) {
    let stockCollection = [];
    Object.keys(this.mappedStockcollection).forEach(key => {
      if (key == exchange) {
        stockCollection = this.mappedStockCollection[key]
      }
    });
    return stockCollection;
  }

  addStock(Stock) {
    this.stockCollection.push(Stock);


  }
}

let stock1 = new Stock(
  "TDWL",
  1010,
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  new Date()
);
let stock2 = new Stock(
  "TDWL",
  1020,
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  new Date()
);
let stock3 = new Stock(
  "TDWL",
  1090,
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  new Date()
);
let stock4 = new Stock(
  "TDWL",
  2040,
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  new Date()
);
let stock5 = new Stock(
  "TDWL",
  1040,
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  new Date()
);
let stock6 = new Stock(
  "DFM",
  "EMAAR",
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  new Date()
);
let stock7 = new Stock(
  "DFM",
  "DFM",
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  new Date()
);
let stock8 = new Stock(
  "DFM",
  "DIB",
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  new Date()
);
let stock9 = new Stock(
  "DFM",
  "SHUAA",
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  new Date()
);
let stock10 = new Stock(
  "DFM",
  "UPP",
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  Math.floor(Math.random() * 10000),
  new Date()
);

let wholeStock = [stock1, stock2, stock3, stock4, stock5, stock6, stock7, stock8, stock9, stock10];

let selectedStock

for (let i = 0; i <= wholeStock.length; i++) {

  //if (dropdownValue === wholeStock[i].exchange) {
  //return selectedStock = wholeStock[i];
  //}
  //console.log(wholeStock[i].);
}



let exchangeStock = { "TWDL": [stock1, stock3, stock5, stock7, stock9], "DFM": [stock2, stock4, stock6, stock8, stock10] }





