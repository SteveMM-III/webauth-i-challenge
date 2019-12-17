const express          = require( 'express'               );
const apiRouter        = require( './routers/router.js'   );
const middlewareConfig = require( './middlware-config.js' );

const server = express();
middlewareConfig( server );

server.use( '/api/router', apiRouter );

module.exports = server;
