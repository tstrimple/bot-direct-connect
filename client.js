var Axios = require('axios');

var config = {
    headers: {
        'user-agent': 'got/7.1.0 (https://github.com/sindresorhus/got)',
        authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Imk2bEdrM0ZaenhSY1ViMkMzbkVRN3N5SEpsWSJ9.eyJhdWQiOiIyM2EwZjU3Mi1kNWQ2LTQ3ZmEtYTBmYS1lODRjZjUwYzQ3OTEiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vZDZkNDk0MjAtZjM5Yi00ZGY3LWExZGMtZDU5YTkzNTg3MWRiL3YyLjAiLCJpYXQiOjE1MzkxMDAxMTgsIm5iZiI6MTUzOTEwMDExOCwiZXhwIjoxNTM5MTA0MDE4LCJhaW8iOiI0MkJnWU1oY2tIT1ZhYjkwYzhpcFpkN3pBNTlXQWdBPSIsImF6cCI6IjIzYTBmNTcyLWQ1ZDYtNDdmYS1hMGZhLWU4NGNmNTBjNDc5MSIsImF6cGFjciI6IjEiLCJ0aWQiOiJkNmQ0OTQyMC1mMzliLTRkZjctYTFkYy1kNTlhOTM1ODcxZGIiLCJ1dGkiOiJyY0FBc3dfX3RrQ0p1aXN4OHBpNkFBIiwidmVyIjoiMi4wIn0.PC5Cg3ezE3KGRZZZkdvpsb1PI5oCac0Bvl0TySkEJzloTYwX-7waK1Jb5anntKxTuvQaU1LnHKF1CeYkPKEsiQMyUdQ0_GHmKhMayKHQ0DVLNkoJQU2WJi3Th-InEGpm3sX0FW70cAvW8zFejUWTta7J_CLzkV6AfY4Bqc5pJye-hLyQLnLTN3tcA5SlZRpPOaa7c4zlR7ThjhS0E9PaGzuM4im2vUJ5X5aSWKcIAxpyvJ7XFwTjOq7hnL_oZLTC7G-WmG6gtAgkdT3NpWngPufYR_KYuu_p7UbV2Uu0f-BcJvZ9AT00udw5vbAt9wqI9XjCXU0YfpM2Lc7UEXRLZg',
        accept: 'application/json',
        'content-type': 'application/json',
        'accept-language': 'en-US'
    }
};

var bodyParameters = {
    type: 'message',
    text: 'Hello World!',
    from: {
        id: 'default-user',
        name: 'User'
    },
    locale: 'en-US',
    textFormat: 'plain',
    timestamp: '2018-10-09T15: 08: 39.082Z',
    channelData: {
        clientActivityId: '1539096257003.48786394882994144.28'
    },
    id: 'lf5aaf270hh',
    channelId: 'emulator',
    localTimestamp: '2018-10-09T10: 08: 39-05: 00',
    recipient: {
        id: 'default-bot', name: 'Bot'
    },
    conversation: {
        id: 'hf069e66813'
    },
    serviceUrl: 'http://localhost:5432'
}

Axios.post( 
  'http://localhost:3978/api/messages',
  bodyParameters,
  config
).then((response) => {
  console.log(response.data)
}).catch((error) => {
  console.log(error)
});
