// Second Task:
// Insertion sort is a simple sorting algorithm that works the way we sort playing cards in our hands.
// Each time we take a new card we put it in the right place in our hand.

// 1. Each time work only with the first i-1 element from of the array
// 2. Pick element arr[i] and insert it into sorted sequence in the array from 0 to i-1.

function insertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    // Pick the current element to be inserted into the sorted sequence
    const currentElement = arr[i];

    // Start from the rightmost element of the sorted sequence
    let j = i - 1;

    // Move elements of the sorted sequence that are greater than the current element
    // to one position ahead of their current position
    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert the current element into the correct position in the sorted sequence
    arr[j + 1] = currentElement;
  }

  return arr;
}

// // Example usage:
// const unsortedArray = [12, 11, 13, 5, 6];
// const sortedArray = insertionSort(unsortedArray.slice()); // Create a copy to keep the original array unchanged
// console.log(sortedArray);
