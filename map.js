'use strict';

const vocabulary = new Map();

vocabulary.set( 'cat', 'кот, кошка' );
vocabulary.set( 'dog', 'собака' );
vocabulary.set( 'squirrel', 'белка' );
vocabulary.set( 'create', 'создать' );
vocabulary.set( 'read', 'прочитать' );
vocabulary.set( 'update', 'обновить' );
vocabulary.set( 'delete', 'удалить' );



const translate = str => str.split( ' ' ).map( w => vocabulary.get( w ) ).join( ' ' );

const str = 'cat dog read squirrel';
alert( translate( str ) );
