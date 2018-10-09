var restify = require('restify');

var server = restify.createServer();

server.use(restify.plugins.bodyParser({ mapParams: false }));
server.use(restify.plugins.queryParser({ mapParams: false }));

server.get('*', (req, res, next) => {
    console.log('GET', req.path(), req.query, req.headers);
    console.log('##################################################');
    res.send(202);
    next();
});

server.post('*', (req, res, next) => {
    console.log('POST', req.path(), req.body, req.headers);
    console.log('##################################################');
    res.send(202);
    next();
});

server.listen(process.env.port || process.env.PORT || 5432, function () {
   console.log('%s listening to %s', server.name, server.url);
});
