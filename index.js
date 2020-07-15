'use strict';

const programN = Math.ceil( Math.random() * 100 );

const arr = [14, 5498, 51, 287, 84, 521, 10, 7, 1875, 152, 45, 5,];

const indexOfSeven = find( arr, 7 );

arr.sort( (a, b) => a - b );

console.table( arr );

console.log( 'result = ', binarySearch( [0, 1, 2, 3, 4, 5], 10 ) );
console.log( 'result = ', binarySearch( [0, 1, 2, 3, 4, 5], 0 ) );
console.log( 'result = ', binarySearch( [0, 1, 2, 3, 4, 5], 5 ) );
console.log( 'result = ', binarySearch( [0, 1, 2, 3, 4, 5], 3 ) );

/**
 *
 * @param {[]} arr
 * @param {*} value
 * @returns {number} - index of searching value
 */
function find(arr, value) {

  for (let i = 0; i < arr.length; i++) {
    if (value === arr[i]) {
      return i;
    }
  }

  return -1;

}

function binarySearch(arr, v) {

  let from = 0;
  let to = arr.length - 1;

  let currentIndex = Math.ceil( to / 2 );

  while (true) {

    if (v > arr[currentIndex]) {
      from = currentIndex;
    } else {
      to = to - from === 1
           ? from
           : currentIndex;
    }

    currentIndex = Math.ceil( (to - from) / 2 + from );

    if (v === arr[currentIndex]) {
      return currentIndex;
    }

    if (from >= to) {
      return -1;
    }
  }
}

