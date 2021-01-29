const rp = require('request-promise-native');
const config = require('config');

const newReservation = config.get('EasyRentAPI-url') + '/reservations';
console.log(newReservation);

it(`Testing to see if ${newReservation} is up`, async () => {
    const date = new Date();
    let options = {
        method: 'POST',
        uri: newReservation,
        headers: {
        },
        body: {
            "customerId": "4394924942",
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

    let errorWasCaught = false;
    let errorCaught = null;

    try {
        let response = await rp(options);
    } catch (exception) {
        errorCaught = exception;
        errorWasCaught = true;
        throw console.log(errorCaught);
    }

    expect(errorWasCaught).toBe(false);
});


