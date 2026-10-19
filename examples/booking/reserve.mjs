import { isAvailable } from './availability.mjs';

/** Pure reservation operation. Caller persists the returned booking list. */
export function reserve(bookings, request) {
  if (!request.id || !request.roomId) throw new TypeError('id and roomId are required');
  if (bookings.some((booking) => booking.id === request.id)) {
    throw new Error('Booking ID already exists');
  }
  if (!isAvailable(bookings, request)) throw new Error('Room is already booked');
  return [...bookings, { ...request }];
}
