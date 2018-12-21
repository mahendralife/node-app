require('dotenv').config({ silent: true});
const express       = require("express"),
http                = require("http"),
cors                = require("cors"),
bodyParser          = require("body-parser"),
app                 = express(),
router              = express.Router(),
path                = require('path'),
jwtToken            = require(path.resolve('./app/config/jwtToken'))(router),
tokenError          = require(path.resolve('./app/config/jwtError')),
statusCode          = require(path.resolve('./app/config/statusCode')),
helpers             = require(path.resolve('./app/config/helpers')),
mongoose            = require(path.resolve('./app/config/mongoose'));


const server = http.createServer(app);
app.use(bodyParser.urlencoded({limit:'10mb', extended: true}));
app.use(cors());
mongoose.connect();
// load all module with route
helpers.loadModules(app, router);
app.use("/api/", router);
// app.use("/api/", router, (req, res ,next) => res.status(404).send(statusCode['404']));
tokenError.init(app);
app.get("/*", (req, res) =>  res.sendFile(path.resolve("./public/index.html")));

    
server.listen(process.env.port, () =>   console.log(`Server started at port: ${process.env.port}!`));
