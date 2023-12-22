import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {  // req = request, res = response (/)-> root directory
    console.log(req.headers);
    res.send('<h1>Radhe Radhe</h1>');
});

app.get('/about', (req, res) => {  // req = request, res = response (/)-> root directory
    res.send('<h1>About Page</h1>');
});

app.get('/contact', (req, res) => {  // req = request, res = response (/)-> root directory
    res.send('<h1>Contact Page</h1><p>Email: aditya@gmail.com</p><p>Phone: 1234567890</p>');
});


app.listen(3000, () => {   // Localhost:3000
    console.log(`Server is listening on port ${port}`);
});