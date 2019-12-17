const bcrypt = require( 'bcryptjs' );
const router = require( 'express'  ).Router();
const Users  = require( '../../../data/models/userModel' );

router.post( '/register', ( req, res ) => {
  const user    = req.body;
  const hash    = bcrypt.hashSync( user.password, 14 );
  user.password = hash;
  console.log( user );
  Users.add( user )
    .then( saved => {
      res.status( 201 ).json( saved );
    } )
    .catch( error => {
      res.status( 500 ).json( error );
    } );
} );

router.post( '/login', ( req, res ) => {
  let { username, password } = req.body;

  Users.findBy( { username } )
    .first()
    .then( user => {
      if ( user && bcrypt.compareSync( password, user.password ) ) {

        req.session.user = user;
        console.log( user );
        res.status( 200 ).json( { message: `Welcome ${ user.username }!` } );
      } else {
        res.status( 401 ).json( { message: 'You shall not pass!' } );
      }
    } )
    .catch( error => {
      res.status( 500 ).json( error );
    } );
} );

router.get( '/logout', ( req, res ) =>
  req.session ?
    req.session.destroy( error => {
      error ?
        res.status( 500 ).json( { message: 'You can chekout any time you like but you can never leave!!' } )
      : res.status( 200 ).json( { message: 'logged out' } ) } )
  : res.status( 200 ).end()
);

module.exports = router;
