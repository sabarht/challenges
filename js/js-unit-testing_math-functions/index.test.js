import { add } from "./index.js";
import { subtract } from "./index.js";
import { multiply } from "./index.js";
import { divide } from "./index.js";

test("add() returns 5 if called with 2 and 3.", () => {
  const result1 = add(2, 3);
  expect(result1).toBe(5);
});
test("a negative value if the greater argument is negative ", () => {
  const result1 = add(2, -3);
  expect(result1).toBeLessThan(0);
});
test("add() returns a value close to 0.3 if called with add(0.1, 0.2)  ", () => {
  const result1 = add(0.1, 0.2);
  expect(result1).toBeCloseTo(0.3);
});

// ///////////////
test("subtract() returns 10 if called with 2 and 3.", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10);
});

test("returns a negative value if the second argument is greater than the first one", () => {
  const result1 = subtract(2, 6);
  expect(result1).toBeLessThan(0);
});
///////////////////
test("multiply() returns 5 if called with 2 and 3.", () => {
  const result = multiply(2, 4);
  expect(result).toBe(8);
});



////////////////////
test("divide() returns 5 if called with 2 and 3.", () => {
  const result = divide(9, 3);
  expect(result).toBe(3);
});
test("You should not do this!", () => {
  const result = divide(9, 0);
  expect(result).toEqual("You should not do this!");
});
