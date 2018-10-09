var Axios = require('axios');

var config = {
    headers: {
        'user-agent': 'got/7.1.0 (https://github.com/sindresorhus/got)',
        'content-type': 'application/x-www-form-urlencoded',
    }
};

var appId = process.env.MicrosoftAppId;
var appPassword = process.env.MicrosoftAppPassword;
var bodyParameters = 'grant_type=client_credentials&client_id=' + encodeURIComponent(appId) + '&client_secret=' + encodeURIComponent(appPassword) + '&scope=' + encodeURIComponent(appId + '/.default')

Axios.post( 
  'https://login.microsoftonline.com/botframework.com/oauth2/v2.0/token',
  bodyParameters,
  config
).then((response) => {
  console.log(response.data)
}).catch((error) => {
  console.log(error)
});

