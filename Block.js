const hash = require('./Hash');

class Block {
  constructor(previousHash, transaction, timestamp = Date.now()) {
    this.previousHash = previousHash;
    this.transaction = transaction;
    this.timestamp = timestamp;
    this.hash = hash.createHash(JSON.stringify(this));
  }
}

module.exports = Block;
