const router = require( 'express' ).Router();
const Users  = require( '../../data/models/userModel' );

router.get( '/', ( req, res ) => {
  Users.find()
    .then( users =>   {
      res.json( users );
    } )
    .catch( error => {
      console.log( error );
      res.status( 500 ).json( { error: 'You shall not pass!' } );
    } );
} );

module.exports = router;
