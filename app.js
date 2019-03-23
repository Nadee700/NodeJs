

console.log('Hello World');
const os =  require('os');
const http = require('http');

console.log('Architecture : ' + os.arch());
console.log('Cpus : ' + os.cpus().length);
console.log('platform : ' + os.platform());

const fs = require('fs');
const fileName = __dirname + '/test.txt';
const outFileName = __dirname + '/test-copy.txt';
const readStream  = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(outFileName);

fs.readFile(fileName, (err, data) => {
    if(err){
        console.error(err);
    }
        console.log(data.toString());
});

const data = fs.readFileSync(fileName);
console.log(data.toString());

readStream.pipe(writeStream);

readStream.on('data', data => {
    console.log(data.toString());
})

http.createServer((req,res) => {
    res.setHeader('Content-Type','text/html');
    res.write('<h1>Hello World</h1>');
    res.end();
}).listen(8080);

const http = require('http');

http.createServer

