const Block = require('./Block');

class Chain {
  static instance = new Chain();

  constructor() {
    this.chain = [new Block(null, {})];
  }

  getPreviousBlockHash() {
    const lastChainItemIndex = this.chain.length - 1;
    return this.chain[lastChainItemIndex].hash;
  }

  addBlock(transaction) {
    const block = new Block(this.getPreviousBlockHash(), transaction);
    this.chain.push(block);
  }
}

module.exports = Chain;
