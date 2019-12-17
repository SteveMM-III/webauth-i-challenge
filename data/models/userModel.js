const db = require( '../dbConfig.js' );

module.exports = {
  add,
  find,
  findBy,
};

function find() {
  return db( 'users' ).select( 'id', 'username' );
}

function add( user ) {
  return db ( 'users'    )
    .insert ( user, 'id' )
    .then   ( ids =>     {
      const [ id ] = ids;
      return findById( id );
    } );
}

function findBy( filter ) {
  return db( 'users'          )
    .select( 'id', 'username' )
    .where ( filter           );
}
