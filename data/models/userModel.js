const db = require( '../dbConfig.js' );

module.exports = {
  add,
  find,
  findBy,
  findByID
};

function find() {
  return db( 'users' ).select( 'id', 'username' ).orderBy( 'id' );
}

function findBy( filter ) {
  return db( 'users' ).where( filter );
}

function add( user ) {
  return db ( 'users'    )
    .insert ( user, 'id' )
    .then   ( ids =>     {
      const [ id ] = ids;
      return findById( id );
    } );
}

function findByID( id ) {
  return db( 'users'  )
    .where ( { id }   )
    .first();
}
