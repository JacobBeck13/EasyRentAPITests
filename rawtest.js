request = require ('request');

request('https://easyrent-api-dev.cit362.com', (err,response, body)=>{
    console.log('Error: '+err);
    console.log('Body: '+body);
});