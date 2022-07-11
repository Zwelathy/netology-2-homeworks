// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg = 0;

  for (i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i];
      sum += arr[i];
      avg = sum / arr.length;
    }
    else if (arr[i] < min) {
      min = arr[i];
      sum += arr[i];
      avg = sum / arr.length;
    }
    else {
      sum += arr[i];
      avg = sum / arr.length;
    }
  }

  avg = Number(avg.toFixed(2));

  return { min: min, max: max, avg: avg };
};

// Задание 2
function worker(arr) {
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
};

function makeWork(arrOfArr, func) {
  let max = 0;
  let sum = 0;

  for (let i = 0; i < arrOfArr.length; i++) {
    sum = func(arrOfArr[i]);
    if (sum > max) {
      max = sum;
    }
  }

  return max;
};

/* Так же проще
let arr = [[0, 0, 0], [-1, -99], [500, -490, 320], [15, 343424, 231, -54556]];

function forGreaterGood(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let max = 0;
    for (let it = 0; it < arr[i].length; it++) {
      max += arr[i][it];
    }

    if (max > sum) {
      sum = max;
    }
  }

  return sum;
};

console.log(forGreaterGood(arr));
*/

// Задание 3
function worker2(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    } else {
      min = arr[i];
    }
  }

  return Math.abs(max - min);
};
