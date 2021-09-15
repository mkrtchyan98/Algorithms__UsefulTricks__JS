function bubbleSort(arr) {
  for (let j = 0; j < arr.length; j++) {
    // Decrease the amount of iterations as in the end of each iteration the last elements was already sorted 
    for (let i = 0; i < arr.length - j; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
  }
  return arr;
}
