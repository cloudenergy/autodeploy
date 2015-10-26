
module.exports = exports = function(app)
{
    app.post('/cloudenergy/api', function (req, res) {
        log.debug(req.body);
        res.status(200).send('');
    })
};