const fs = require('fs');
const path = require('path');
const process = require('process');

const modulePath = path.join('src','app', 'modules');
const homePath = path.join(process.cwd(), '..','modules');

console.log(`Current: ${process.cwd()}`)
console.log(homePath);
fs.symlink(homePath, modulePath, (err) => {
    if(err) throw err;
    console.log('Created Sym Links');
});