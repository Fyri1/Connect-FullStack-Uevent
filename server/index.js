const axios = require('axios');

const options = {
  method: 'POST',
  url: 'https://qrcode-monkey.p.rapidapi.com/qr/transparent',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'qrcode-monkey.p.rapidapi.com',
  },
  data: '{"data":"https://www.qrcode-monkey.com","x":0,"y":0,"size":400,"crop":true,"download":false,"file":"png"}',
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error.response.data);
  });
