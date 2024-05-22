// pkginfo makes it easy to interact with your package.json file! you dont need to worry about making sure your package information is shared correctly as it now handles it.

var pkginfo = require('pkginfo')(module, 'name', 'version', 'author');

console.dir(module.exports);