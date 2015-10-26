
module.exports = exports = function(app)
{
    log.info('Load Module...');

    var api = require('./api')(app);
};