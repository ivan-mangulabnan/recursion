// Using iteration.
function fibs (n) {
  if (n === 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  let arr = [0, 1];

  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr;
}

// Using recursive
function fibnRec (n) {
  if (n === 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  let prev = fibnRec(n - 1);
  let current = prev[prev.length - 1] + prev[prev.length - 2];
  prev.push(current);
  return prev;
}

console.log(fibnRec(8));