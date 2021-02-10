const rp = require('request-promise-native');
const config = require('config');

const easyRentUrl = config.get('EasyRentAPI-url')+'/reservations';


async function makeAReservation() {
    const date = new Date();
    let options = {
        method: 'POST',
        uri: easyRentUrl,
        headers: {
        },
        body: {
            "customerId": "sam.test@test.com",
            "reservationItems": [
                {
                    "description": "Ultralight",
                    "itemId": 4900001
                },
                {
                    "description": "Fuel",
                    "itemId": 4900002
                },
                {
                    "description": "Flight suit",
                    "itemId": 4900003
                },
                {
                    "description": "Helmet with visor",
                    "itemId": 4900004
                }
            ],
            "dueDate": 1610148694321
        },
        json: true, // Automatically stringifies the body to JSON
        simple: false,
    };
    let response = await rp(options);
    console.log("New reservation ID: "+response);
    return response;
}

async function getASingleReservationReservation(reservationId) {
    const options = {

        url: easyRentUrl+'/'+reservationId

    }
}

it(`Testing to see if ${easyRentUrl} is up`, async () =>{
    const reservationID = makeAReservation();
    var options = {
        uri: easyRentUrl+"/"+reservationID,
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

