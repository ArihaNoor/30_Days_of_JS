var pivotInteger = function(n) {
    let totalSum = (n * (n + 1)) / 2;
  let leftSum = 0;
  let rightSum = 0;
  for (let x = 1; x <= n; x++) {
      leftSum += x;
      rightSum = totalSum - leftSum + x;
      if (leftSum === rightSum) {
          return x;
      }
  }
  return -1;
};