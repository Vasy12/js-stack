'use strict';

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

const arr = [14, 5498, 51, 287, 84, 521, 10, 7, 1875, 152, 45, 5,];

const indexOfSeven = find( arr, 7 );

