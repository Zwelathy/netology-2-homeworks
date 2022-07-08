function compareArrays(arr1, arr2) {
  let result;
  let a = arr1;
  let b = arr2;

  if (a.length < b.length) {
    a = arr2;
    b = arr1;
  }

  result = a.every((key, inx) => key === b[inx]);

  return result;
}

function advancedFilter(arr) {
  let resultArr;

  resultArr = arr.filter(key => key > 0).filter(key => key % 3 === 0).map(key => key * 10);

  return resultArr;
}
