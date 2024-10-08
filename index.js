import Freecurrencyapi from "@everapi/freecurrencyapi-js";

const Concertcurrencyapi = new Freecurrencyapi("fca_live_XIyP7hxQ8lACBbT668NrqyBwrd1b8jT5XIdynjdd");

Concertcurrencyapi.latest({
    base_currency: 'USD',
    currencies: 'INR'
}).then(response => {
    console.log(response);
});