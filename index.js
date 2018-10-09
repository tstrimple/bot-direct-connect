var restify = require('restify');
var builder = require('botbuilder');

var server = restify.createServer();

server.use(restify.plugins.bodyParser({ mapParams: false }));

server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});

var connector = new builder.ChatConnector({
    appId: process.env.MicrosoftAppId,
    appPassword: process.env.MicrosoftAppPassword
});

var botListener = connector.listen();

server.post('/api/messages', (req, res, next) => {
    botListener(req, res, next);
});

var bot = new builder.UniversalBot(connector, function (session) {
    session.send(session.message.text.split('').reverse().join(''));
});
