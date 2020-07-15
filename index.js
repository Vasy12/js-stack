'use strict';

const programN = Math.ceil( Math.random() * 100 );

const arr = [14, 5498, 51, 287, 84, 521, 10, 7, 1875, 152, 45, 5,];

const indexOfSeven = find( arr, 7 );

arr.sort( (a, b) => a - b );

console.table( arr );

console.log( 'result = ', binarySearch( [0, 1, 2, 3, 4, 5], 10 ) );
console.log( 'result = ', binarySearch( [0, 1, 2, 3, 4, 5], 0 ) );
console.log( 'result = ', binarySearch( [0, 1, 2, 3, 4, 5], 1 ) );
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

  let start = 0;
  let end = arr.length - 1;

  let middle = Math.ceil( end / 2 );

  while (true) {

    if (v > arr[middle]) {
      start = middle;
    } else {
      end = end - start === 1
           ? start
           : middle;
    }

    middle = Math.ceil( (end - start) / 2 + start );

    if (v === arr[middle]) {
      return middle;
    }

    if (start >= end) {
      return -1;
    }
  }
}

