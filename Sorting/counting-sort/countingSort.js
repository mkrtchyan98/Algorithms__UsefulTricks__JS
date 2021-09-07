function countingSort(arr) {
  let count = new Array(Math.max(...arr));
  console.log("count", count);
  for (let i = 0; i < arr.length; i++) {
    //Count the frequency of each element in the original array
    //And store it in  array
    ++count[arr[i]];
    let index = 0;
    for (let j = 0; j < count.length; j++) {
      for (let k = 0; k < count[i]; k++) {
        arr[index++] = i;
      }
    }
  }
  return arr;
}

