'use strict';

const vocabulary = new Map();

vocabulary.set( 'cat', 'кот, кошка' );
vocabulary.set( 'dog', 'собака' );
vocabulary.set( 'squirrel', 'белка' );
vocabulary.set( 'create', 'создать' );
vocabulary.set( 'read', 'прочитать' );
vocabulary.set( 'update', 'обновить' );
vocabulary.set( 'delete', 'удалить' );

vocabulary.delete( 'f' );
const keysIter = vocabulary.keys();
const vocabularyKeys = [...keysIter];
const vocabularyValues = [...vocabulary.values()];

const arr1 = [1, 2, 2, , 7, 52, 1,];
const arr2 = [1, 2, 2, , 7, 52, 1,];
const arr1Iter = arr1[Symbol.iterator]();
const result = [...arr1Iter, ...arr2];


function getMapKeys(map) {
  const keyArray = [];
  const keysIterator = map.keys();
  let nextObj = keysIterator.next();
  while (!nextObj.done) {

    keyArray.push( nextObj.value );
    nextObj = keysIterator.next();
  }
  return keyArray;
}

console.table( vocabularyKeys );
console.table( getMapKeys( vocabulary ) );

const translate = (str, separator = ' ') => str
  .split( separator )
  .map( w => vocabulary.has( w )
             ? vocabulary.get( w )
             : w )
  .join( separator );

const str = 'cat dog read squirrel monkey';
console.table( fTranslate( str ) );

function fTranslate(str, separator = ' ') {

  const englishWords = str.split( separator ); // Array

  const russianWords = englishWords.map( function (word) {
    if (vocabulary.has( word )) {
      return vocabulary.get( word );
    }
    return word;
  } ); // Array

  return russianWords.join( separator ); // string
}
