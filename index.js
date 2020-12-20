const cnpm = require('cnpmjs.org');
const config = require('./config');

cnpm.startWorker(config);
cnpm.startSync(config);