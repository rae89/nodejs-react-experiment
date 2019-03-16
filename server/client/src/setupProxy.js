const proxy = require('http-procy-middleware');

module.exports = function(app) {
    app.use(proxy('/auth/google', { target: 'http:localhost:5000'}));
};