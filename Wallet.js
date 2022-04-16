const Chain = require('./Chain');
const hash = require('./Hash');
const Transaction = require('./Transaction');

class WalletFactory {
  static async create() {
    try {
      const { privateKey, publicKey } = await hash.createAsymmetricKeys();
      return new Wallet(publicKey, privateKey);
    } catch (error) {
      console.log(
        '%cerror Wallet.js line:14 ',
        'color: red; display: block; width: 100%;',
        error
      );
    }
  }
}

class Wallet {
  constructor(publicKey, privateKey) {
    this.publicKey = publicKey;
    this.privateKey = privateKey;
  }
  send(amount, receiverPublicKey) {
    const transaction = new Transaction(
      amount,
      this.publicKey,
      receiverPublicKey
    );

    const signature = hash.createSignature(
      transaction.toString(),
      this.privateKey
    );

    Chain.instance.addBlock(transaction, this.publicKey, signature);
  }
}

module.exports = WalletFactory;
