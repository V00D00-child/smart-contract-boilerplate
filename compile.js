const path = require('path');
const fs = require('fs');
const solc = require('solc');

// Go to current working dir and find contract
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');

// Read raw source code
const source = fs.readFileSync(inboxPath, 'utf8');

// Compile source code
module.exports = solc.compile(source, 1).contracts[':Inbox'];