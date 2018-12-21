const 
path    = require('path'),
fs      = require('fs');

const load = ( moduleName , app, router) => {
    let filePath = path.resolve(`./app/modules/${moduleName}/${moduleName}.route.js`);
    if( fs.existsSync(filePath)) {
        return require(filePath)(app, router);
    } 
}

exports.loadModules =  (app, router) =>  {
    fs.readdirSync('./app/modules').forEach( moduleName => load(moduleName, app, router));
};

exports.loadController = (name) => {
    let filePath = path.resolve(`./app/modules/${name}/${name}.controller.js`); 
     if( fs.existsSync(filePath)) {
        return  require(filePath);
    } 
}
