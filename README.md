# JavaScript Type Coercion Bug

This repository demonstrates a common error in JavaScript related to type coercion using the '+' operator.  When adding a number and a string, JavaScript performs string concatenation instead of numerical addition. This can lead to unexpected results if not handled correctly.

## Bug Description
The `foo` function intends to add two numbers. However, due to JavaScript's loose typing, if either input is a string, it concatenates the values as strings instead of performing mathematical addition.

## How to reproduce
1. Clone this repository.
2. Run `bug.js` using Node.js or a similar JavaScript runtime.
3. Observe the unexpected output from the console logs.

## Solution
The `bugSolution.js` file shows how to correctly handle this using explicit type conversion before performing the addition or using an alternative method.