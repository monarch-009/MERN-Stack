import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {  
    res.send('<h1>Radhe Radhe</h1>');
});

app.post('/register', (req, res) => {  
    res.sendStatus(201);
});

app.put('/user/aditya', (req, res) => {  
    res.sendStatus(200);
});

app.patch('/user/aditya', (req, res) => {
    res.sendStatus(200);
});

app.delete('/', (req, res) => {
    res.sendStatus(200  );
});

app.listen(3000, () => {
    console.log(`Server is listening on port ${port}`);
});