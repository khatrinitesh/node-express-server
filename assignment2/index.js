// const result = 'nitesh'
// console.log(result)

// const fetchdata = async () => {
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const result = await response.json()
//         console.log(result)
//     }
//     catch(error){
//         console.error('error',error)
//     }
// }
// fetchdata()

// const https = require('node:https');

// https.get('https://encrypted.google.com/', (res) => {
//   console.log('statusCode:', res.statusCode);
//   console.log('headers:', res.headers);

//   res.on('data', (d) => {
//     process.stdout.write(d);
//   });

// }).on('error', (e) => {
//   console.error(e);
// }); 

// const greet = (name) => {
//     console.log(`hello ${name}`)
// }
// greet('nitesh')


// console.log(global)
// global.setTimeout(() => {
//     console.log('in the timeout') 
// }, 1000);

// setTimeout(() => {
//     console.log('in the timeout')
// },1000)

// const int = setInterval(() => {
//     console.log('nitesh khatri')
// },1000)
// console.log(__dirname)
// console.log(__filename)

// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World!');
// }).listen(8080);

// console.log('This example is different!');
// console.log('The result is displayed in the Command Line Interface');

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('Hello World!');
//   }).listen(8080);

// var http = require('http');
// var dt = require('./myfirstmodule');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write("The date and time are currently: " + dt.myDateTime());
//   res.end();
// }).listen(8080);

// var http = require('http');

// //create a server object:
// http.createServer(function (req, res) {
//   res.write('Hello World!'); //write a response to the client
//   res.end(); //end the response
// }).listen(8080); //the server object listens on port 8080

// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('Hello World!');
//   res.end();
// }).listen(8080);
// console.log(document.querySelector)

// console.log('test')

// const fs = require('fs');
// fs.writeFile('contact.html', 'How are you', ()=>{
//    console.log("success")
// });

// const fs = require('fs')
// fs.writeFile('service.html','how are you',() => {
//     console.log('successfully')
// })