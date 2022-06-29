'use strict'

function solveEquation(a, b, c) {
  let result = [];
  let d = b ** 2 - 4 * a * c;

  if (d < 0) {
    return result;
  } else if (d == 0) {
    result = (-b) / (2 * a);
  } else {
    result.push((-b + Math.sqrt(d)) / (2 * a));
    result.push((-b - Math.sqrt(d)) / (2 * a));
  }
  
  return result;
};

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
