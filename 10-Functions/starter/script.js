'use strict';
const bookings = [];

const createBooking = function (fligthNum = 1, numPassengers = 1, price = 199) {
    const booking = {
      fligthNum,
      numPassengers,
      price,
    };

    console.log(booking);
    bookings.push(booking)
}

createBooking('LH123')
createBooking('LH125', 2, 800)