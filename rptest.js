var rp = require('request-promise-native');

var options = {
    uri: 'https://easyrent-api-dev.cit362.com',
    headers:{
    },
};

var test = async () =>{

try{
    var response = await rp(options);
} catch (error)    {
    console.log(error);
}
};


test();