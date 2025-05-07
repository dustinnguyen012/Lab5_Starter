import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me.js';

// ---- isPhoneNumber ----
test('isPhoneNumber true - (123) 456-7890', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('isPhoneNumber true - (987) 654-3210', () => {
  expect(isPhoneNumber('(987) 654-3210')).toBe(true);
});
test('isPhoneNumber false - letters included', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});
test('isPhoneNumber false - too short', () => {
  expect(isPhoneNumber('(123) 456-78')).toBe(false);
});

// ---- isEmail ----
test('isEmail true - test@example.com', () => {
  expect(isEmail('test@example.com')).toBe(true);
});
test('isEmail true - simple valid email', () => {
  expect(isEmail('simple@email.com')).toBe(true);
});
test('isEmail false - missing @', () => {
  expect(isEmail('test.example.com')).toBe(false);
});
test('isEmail false - missing domain', () => {
  expect(isEmail('user@')).toBe(false);
});

// ---- isStrongPassword ----
test('isStrongPassword true - Hello123', () => {
  expect(isStrongPassword('Hello123')).toBe(true);
});
test('isStrongPassword true - My_Pass_4', () => {
  expect(isStrongPassword('My_Pass_4')).toBe(true);
});
test('isStrongPassword false - starts with digit', () => {
  expect(isStrongPassword('1passgood')).toBe(false);
});
test('isStrongPassword false - too short', () => {
  expect(isStrongPassword('ab')).toBe(false);
});

// ---- isDate ----
test('isDate true - 01/01/2000', () => {
  expect(isDate('01/01/2000')).toBe(true);
});
test('isDate true - 12/31/1999', () => {
  expect(isDate('12/31/1999')).toBe(true);
});
test('isDate false - dashes instead of slashes', () => {
  expect(isDate('01-01-2000')).toBe(false);
});
test('isDate false - missing year', () => {
  expect(isDate('12/31')).toBe(false);
});

// ---- isHexColor ----
test('isHexColor true - short hex #FFF', () => {
  expect(isHexColor('#FFF')).toBe(true);
});
test('isHexColor true - full hex #123ABC', () => {
  expect(isHexColor('#123ABC')).toBe(true);
});
test('isHexColor false - invalid hex length', () => {
  expect(isHexColor('#1234')).toBe(false);
});
test('isHexColor false - invalid letters', () => {
  expect(isHexColor('#ZZZZZZ')).toBe(false);
});
