/** Return whether a room can accept a booking. Intervals use UTC ISO dates.
 * Adjacent bookings are allowed; overlapping bookings must be rejected.
 */
export function isAvailable(bookings, requested) {
  const start = Date.parse(requested.start);
  const end = Date.parse(requested.end);
  if (!Number.isFinite(start) || !Number.isFinite(end) || end <= start) {
    throw new RangeError('Booking end must be after its valid start');
  }
  return !bookings.some((booking) => {
    if (booking.roomId !== requested.roomId) return false;
    const existingStart = Date.parse(booking.start);
    return existingStart >= start && existingStart < end;
  });
}
