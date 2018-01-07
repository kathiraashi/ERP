const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
    url: 'mongodb://kathiravan:kathir143@ds247007.mlab.com:47007/testerp',
    secret : crypto
}