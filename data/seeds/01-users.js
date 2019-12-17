const bcrypt = require( 'bcryptjs' );
const pass   = bcrypt.hashSync( 'pass', 14 );

exports.seed = knex => {
  knex( 'users' )
    .insert( [
      { username: "alberto", password: pass },
      { username: "anthony", password: pass },
      { username: "michael", password: pass },
      { username: "steve",   password: pass }
    ] );
};
