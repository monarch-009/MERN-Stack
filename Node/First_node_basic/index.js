// Create silly name generator in node.js

// First did-> npm init 
// Then did-> npm i sillyname

// Now we can use sillyname in our code
let sillyname = require('sillyname');
let name = sillyname();
console.log(`Hello my name is ${name}`);