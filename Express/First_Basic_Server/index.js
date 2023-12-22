// 1. Create directory
// 2. Create index.js
// 3. npm init
// 4. npm install express
// 5. Write Server Application in index.js
// 6. Start Server

import express from 'express';
const app = express();
const port = 3000;


app.listen(3000, () => {
    console.log(`Server is listening on port ${port}`);
});

// netstat -ano | findstr :"LISTENING"  // -> find PID of process using port
// netstat -a -n -o | findstr :"LISTENING" | findstr "3000" // -> find PID of process using port 3000