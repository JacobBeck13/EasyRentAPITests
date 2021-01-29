const rp = require('request-promise-native');
const config = require('config');

const newUserUrl = config.get('EasyRentAPI-url') + 'reservations';
console.log(newUserUrl);

it(`Testing to see if ${newUserUrl} is up`, async () => {
    const date = new Date();
    let options = {
        method: 'POST',
        uri: newUserUrl,
        headers: {
        },
        body:     {
            "reservationId": "489ac64f-76bf-4c29-b713-63185bec95b0",
            "customerId": "4394924942",
            "reservationItems": [
                {
                    "description": "Kayak",
                    "itemId": 4949490
                },
                {
                    "description": "Paddle",
                    "itemId": 4949491
                }
            ],
            "dueDate": 1612293642000
        },
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


