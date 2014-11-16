var bitcoin = require('bitcoinjs-lib');

var key = bitcoin.ECKey.makeRandom();

// Print your private key (in WIF format)
console.log(key.toWIF());
// => Kxr9tQED9H44gCmp6HAdmemAzU3n84H3dGkuWTKvE23JgHMW8gct

// Print your public key (toString defaults to a Bitcoin address)
console.log(key.pub.getAddress().toString());
// => 14bZ7YWde4KdRb5YN7GYkToz3EHVCvRxkF
        