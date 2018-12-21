const jwt           = require("jsonwebtoken"),
path                = require('path'),
expressJWT          = require('express-jwt'),
routeList           = require(path.resolve('./app/config/routes')),
env                 = require(path.resolve('./app/config/config'));

module.exports = (router) => {
    const JWTOption = {
        secret: env.secret
     };
    
    router.use(expressJWT(JWTOption).unless({ path: routeList.path}));
}
