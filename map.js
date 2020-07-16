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
