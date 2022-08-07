  export default class Stock {

  constructor(symbol, exchange, open, high, low, close, bid, ask, trade_date) {

    this.exchange = exchange;
    this.symbol = symbol;
    this.open = open;
    this.high = high;
    this.low = low;
    this.close = close;
    this.bid = bid;
    this.ask = ask;
    this.trade_date = trade_date;
  }
}



