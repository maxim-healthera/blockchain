const { createHash, generateKeyPair, createSign } = require('crypto');

class Hash {
  createHash(string, alg = 'sha256') {
    return createHash(alg).update(string).digest('hex');
  }

  createSignature(data, privateKey) {
    return createSign('sha256').update(data).end().sign(privateKey);
  }

  async createAsymmetricKeys() {
    return new Promise((resolve, reject) => {
      generateKeyPair(
        'rsa',
        {
          modulusLength: 2048,
          publicKeyEncoding: { type: 'spki', format: 'pem' },
          privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
        },
        (err, ...keys) => {
          if (err) {
            return reject(err);
          }
          return resolve({ publicKey: keys[0], privateKey: keys[1] });
        }
      );
    });
  }
}

module.exports = new Hash();
