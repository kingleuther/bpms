var winston = require('winston');

var logger = new (winston.Logger) ({
    // level: 'debug',
    transports: [
      new (winston.transports.Console)(),
      new (winston.transports.File)({
        filename: './logs/error.log',
        level: 'error',
        name: 'file.error',
        handleExceptions: true,
        json:false,
        timestamp: function() {
          var dateNow = new Date()
          .toISOString()
          .replace(/T/, ' ')
          .replace(/\..+/, '') ;
          return dateNow;
        }
      }),
      new (winston.transports.File)({
          filename: './logs/mixed.log',
          level: 'info',
          name: 'file.mixed',
          json:false
      })
    ]
  });

// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
// 
// if (process.env.NODE_ENV !== 'production') {
//     logger.add(new winston.transports.Console({
//       format: winston.format.simple()
//     }));
// }

  
// program doesn't terminate if an exception that is not caught is detected
logger.exitOnError = false; 

module.exports = logger;