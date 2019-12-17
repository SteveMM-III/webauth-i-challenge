const router = require( 'express' ).Router();

const authRouter  = require( './auth/authRouter'  );
const usersRouter = require( './usersRouter'      );

router.use( '/auth',  authRouter  );
router.use( '/users', usersRouter );

router.get( '/', ( req, res ) =>  {
  res.json( { api: "It's alive" } );
} );

module.exports = router;
