const rp = require('request-promise-native');
const config = require('config');

const projectsUrl = config.get('EasyRentAPI-url')+'/reservations';
it('Testing to see if ${projectsUrl} is up', async () =>{
    
    var options = {
        uri: projectsUrl,
        // Project
        headers:{
        },
    };

    var errorWasCaught=false;
    var errorCaught=null;

    try{
        var response = await rp(options);
    } catch (exception){
        errorCaught=exception;
        errorWasCaught=true;
    }
    expect(errorWasCaught).toBe(false);//assertion of what is expected
})

