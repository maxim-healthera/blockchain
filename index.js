const WalletFactory = require('./Wallet');

(async () => {
  const maxim = await WalletFactory.create();
  console.log('%cindex.js line:5 maxim', 'color: #007acc;', maxim);
  const ivan = await WalletFactory.create();
  maxim.send(500, maxim.publicKey);
})();
