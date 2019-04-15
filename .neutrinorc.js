const library = require('@neutrinojs/library');
const karma = require('@neutrinojs/karma');

module.exports = neutrino => {
  library(neutrino, { 
    name: 'Test', 
    // https://github.com/neutrinojs/neutrino/issues/1251
    externals: (process.env.NODE_ENV==='test') ? false : {},
  }), 
  karma(neutrino, {
    logLevel: 'debug',
  });
};
