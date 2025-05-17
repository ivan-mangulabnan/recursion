function mergeSort (arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  
  return merge(mergeSort(left), mergeSort(right));
}

function merge (left, right) {
  let arr = [];
  let i = 0;
  let j = 0;

  while(i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      arr.push(left[i]);
      i++;
    } else {
      arr.push(right[j]);
      j++;
    }
  }

  return arr.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([3, 2, 1, 4]));