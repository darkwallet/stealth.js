StealthJS [![Build Status](https://drone.io/github.com/darkwallet/stealth.js/status.png)](https://drone.io/github.com/darkwallet/stealth.js/latest) 
[![Coverage Status](https://img.shields.io/coveralls/darkwallet/stealth.js.svg)](https://coveralls.io/r/darkwallet/stealth.js)
=========

Stealth addresses are a new form of bitcoin addresses that solve the problem of address reuse.

They allow the sender to generate new addresses for the receiver, and sending without anyone watching the blockchain knowing the receiver is the owner of the original stealth address.

The required extra data for the receiver to know the transaction is for her is included in the blockchain together with the transaction by using the OP_RETURN instruction.

You can see how a stealth transaction [looks like](https://blockchain.info/tx/6ea5c6f1a97f382f87523d13ef9f2ef17b828607107efdbba42a80b8a6555356).

**Note:** OP_RETURN is just supported as standard in the bitcoin network in recent versions of the mining software, so not all miners will confirm or propagate the transactions, this means at this moment sometimes they can take a bit longer to confirm. Also you probably won't see the unconfirmed transaction, but this is more an issue in our obelisk interaction or in obelisk.

![How Stealth Addresses Work](https://i.imgur.com/rHhNKL6.jpg)

More information at [DarkWallet/Stealth](https://wiki.unsystem.net/en/index.php/DarkWallet/Stealth). 
