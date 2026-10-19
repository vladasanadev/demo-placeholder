import test from 'node:test';
import assert from 'node:assert/strict';
import { reserve } from './reserve.mjs';
import { isAvailable } from './availability.mjs';

const booking = (id, start, end, roomId = 'studio') => ({
  id, roomId, start: `2026-10-20T${start}:00Z`, end: `2026-10-20T${end}:00Z`,
});

test('reserves a free room without mutating the original', () => {
  const original = [];
  assert.equal(reserve(original, booking('a', '10:00', '11:00')).length, 1);
  assert.equal(original.length, 0);
});
test('rejects an existing booking starting inside the requested slot', () => {
  assert.throws(() => reserve([booking('a', '10:30', '11:00')], booking('b', '10:00', '11:00')), /already booked/);
});
test('allows adjacent bookings', () => {
  assert.equal(isAvailable([booking('a', '11:00', '12:00')], booking('b', '10:00', '11:00')), true);
});
test('allows the same time in a different room', () => {
  assert.equal(isAvailable([booking('a', '10:00', '11:00', 'office')], booking('b', '10:00', '11:00')), true);
});
test('rejects invalid or reversed booking times', () => {
  assert.throws(() => isAvailable([], booking('a', '11:00', '10:00')), RangeError);
});

test('rejects a booking fully contained inside an existing booking', () => {
  assert.throws(() => reserve([booking('a', '10:00', '12:00')], booking('b', '10:30', '11:00')), /already booked/);
});
test('rejects an overlap when the existing booking starts earlier', () => {
  assert.equal(isAvailable([booking('a', '10:00', '11:00')], booking('b', '10:30', '11:30')), false);
});
